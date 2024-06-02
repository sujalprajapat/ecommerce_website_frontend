// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Nav from "./Nav";
import Category from "./Category";
import { addcart } from './app/counter';
import { useDispatch } from "react-redux";

function Cat(){
    const { text } = useParams();
    const [val,setval]=useState([]);
    const dispatch=useDispatch();
    console.log(text);
    useEffect(() => {
      // alert(' ');
        axios.get(`https://dummyjson.com/products/category/${text}`)
          .then(function (response) {
            console.log(response.data.products);
            setval(response.data.products);
            console.log(val);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [text])
      let carthadler=(ele)=>{
        dispatch(addcart(ele));
         // dispatch(ele);
         // console.log("hello",ele);
       }
    return(

        <div>
            <Nav />
            <Category />
        <div className='row g-0 row-cols-2' style={{ padding: "20px" }}>
          {
            val.map((ele, ind) => {
              return (
                <Link to={`/${ele.id}`} style={{textDecoration:"none"}} className="d-flex justify-content-around">
                <div className='col' style={{ padding: "0px" }}>
                  <img src={ele.images[0]}></img>
                  <div className='pro_text'>
                    <h5>{ele.id}.{ele.title}</h5>
                    <p>{ele.description}</p>
                    <div className='d-flex justify-content-between m-2'>
                      <h6>price:{ele.price}</h6>
                      <h6>discount:{ele.discountPercentage}%</h6>
                    </div>
                    <div className='d-flex justify-content-between m-2'>
                      <p>{ele.brand}-{ele.category}</p>
                      <h6>rating:{ele.rating}</h6>
                    </div>
                  </div>
                <div className='cart_button' onClick={()=>{carthadler(ele)}}><Link>add to cart</Link></div>
                </div>  
                </Link>
              );
            })
          }
        </div>
        </div>
    )
}
export default Cat;