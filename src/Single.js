import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Nav from "./Nav";
import { addcart } from './app/counter';
import { useDispatch } from "react-redux";
function Single(){
    // console.log("hellloooo",props)
    var [im,setim]=useState(' ');
    var [val1,setval1]=useState([]);
    var [val2,setval2]=useState([]);
    const dispatch=useDispatch();
    // var [check,setcheck]=useState("1");
    console.log(im);
    const { id } = useParams();
    console.log("id",id);
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
          .then(function (response) {
            // console.log(response.data);
            setval1(response.data);
            setval2(response.data.images);
            console.log(val2[0]);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [id])
      let carthadler=(ele)=>{
        dispatch(addcart(ele));
         // dispatch(ele);
         // console.log("hello",ele);
       }
      // setim(val1.thumbnail);
    return(
        <div className="single">
          <div>
            <Nav />
          </div>
            <div>
                </div>
            <div className="d-flex " style={{marginTop:"100px"}}>
                <div style={{width:"50%"}}>
                  <img src={ im==' '? val1.thumbnail:im }style={{margin:"100px",width:"400px"}}></img>
                </div>
             <div style={{margin:"100px"}}>
             <h1 style={{color:"black",margin:"20px"}}>{val1.title}</h1>
                <h5 style={{color:"black",margin:"20px"}}>price:   ${val1.price}</h5>
                <h5 style={{color:"black",margin:"20px"}}>discount-price:   {val1.discountPercentage}%</h5>
                <p style={{color:"grey",margin:"20px !important"}}>productdetail...:{val1.description}.</p>
                <h6 style={{color:"black",margin:"20px"}}>available-stock: {val1.stock}pies</h6>
                <h6 style={{color:"black",margin:"20px"}}>rating: {val1.rating}</h6>
                <h6 style={{color:"black",margin:"20px"}}>{val1.brand}-{val1.category}</h6>
             <div className='cart_button' onClick={()=>{carthadler(val1)}}><Link>add to cart</Link></div>
             </div>
             </div>
             <div style={{display:"flex"}}>
             {
                val2.map((ele,ind)=>{
                    return (
                        <div onClick={(e)=>{setim(ele)}}>
                             <img src={ele} style={{width:"100px",height:"100px",margin:"20px",borderRadius:"10px"}}></img>
                      </div>  
                    )
                })
             }
              </div>
        </div>
    )
}
export default Single;