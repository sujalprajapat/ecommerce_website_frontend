import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import { Button,Spinner  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { addcart } from './app/counter';
// import Single from './Single';
function Home(){
  var [data, setdata] = useState([]);
  var [data2, setdata2] = useState([]);
  var [x, setx] = useState();
  var [check, setcheck] = useState(true);
  const dispatch=useDispatch();
  // console.log("x", x)
  // var data3=[];
  // console.log("x:",x);
  let carthadler=(ele)=>{
   dispatch(addcart(ele));
    // dispatch(ele);
    // console.log("hello",ele);
  }
  function Callback(ch) {
    var data3 = data2.filter((e1, i1) => {
      return e1.category == ch.name
    })
    setdata(data3);
    console.log(data3)
  }
  function sars(ser) {
    var data1 = data2.filter((e, i) => {
      return e.title == ser
    })
    setdata(data1);
  }
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        console.log(response);
        setdata(response.data.products);
        setdata2(response.data.products);
        setcheck(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <div className="App" >
      <div>
        <Category cat={Callback} />
        <Nav search={sars} />
        {/* <Single /> */}
      </div>
      <div>
        <div className='row g-0 row-cols-2 d-flex justify-content-around' style={{ padding: "20px" }}>
          {
            check==true ? <Spinner animation="border" className="m-auto" style={{width:"200px",height:"200px",margin:"auto"}}variant="warning" /> : 
            data.map((ele, ind) => {
              return (

                <div className='col' style={{ padding: "0px" }} onClick={() => { setx(ele.title) }}>
                                  <Link to={`/${ele.id}`} style={{textDecoration:"none"}}>
                  <img src={ele.images[0]}></img>
                  <div className='pro_text'>
                    <h5>{ele.id}.{ele.title}</h5>
                    <p>{ele.description}</p>
                    <div className='d-flex justify-content-around m-2'>
                      <h6>price:{ele.price}</h6>
                      <h6>discount:{ele.discountPercentage}%</h6>
                    </div>
                    <div className='d-flex justify-content-around m-2'>
                      <p>{ele.brand}-{ele.category}</p>
                      <h6>rating:{ele.rating}</h6>
                    </div>
                  </div>
                  </Link>
                  <div className='cart_button' onClick={()=>{carthadler(ele)}}><Link>add to cart</Link></div>
                </div>
              );
            })
          }
        </div>
        {

        }
      </div>
    </div>
  );
}
export default Home;