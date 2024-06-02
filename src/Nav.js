import mylogo from "./img/logo.svg"
import { PiSquaresFour } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Nav(props) {
  var [sar, setsar] = useState('');
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px 0px" }} className='nav'>
      <div>
        <img src={mylogo} className='p-3'></img>
      </div>
      <div className='d-flex align-items-center icons'>
        <PiSquaresFour ></PiSquaresFour>
        <h5>Departments</h5>
      </div>
      <div className='d-flex align-items-center icons'>
        <PiSquaresFour ></PiSquaresFour>
        <h5>Service</h5>
      </div>
      <div style={{ width: "600px", height: "40px", margin: "10px", borderRadius: "50px" }} className='d-flex align-items-center'>
        <input type='text' placeholder='SEARCH YOUR PRODUCT HERE' onChange={(e) => { setsar(e.target.value) }} style={{ textAlign: "center", width: "100%", height: "40px", borderRadius: "50px", margin: "0px", padding: "0px", border: "none" }}></input>
        <input type='button' className='search_btn' value="search" style={{ padding: "10px 20px", borderRadius: "50px" }} onClick={() => { props.search(sar) }}></input>
      </div>
      <div className='d-flex align-items-center icons'>
        <CiHeart></CiHeart>
        <div>
          <p className='m-0'>Rating</p>
          {/* <h6>My items</h6> */}
        </div>
      </div>
      <div className='d-flex align-items-center icons'>
        <IoPersonSharp></IoPersonSharp>
        <div>
          <p className='m-0'>login</p>
          {/* <h6>My items</h6> */}
        </div>
      </div>
      <div className='icons align-items-center d-flex'>
        <Link to={"/cart"}>
          <IoCartOutline></IoCartOutline>
        </Link>
      </div>
    </div>
  )
}
export default Nav;