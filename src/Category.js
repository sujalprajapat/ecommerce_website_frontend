import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Category(props){
        var [datas,setdatas]=useState([])
        // var [datas1,setdatas1]=useState(props.name);
        var [val,setval]=useState(' ');
        // console.log("val",props.name);
        // console.log("val=",val);
    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
          .then(function (response) {
            // console.log(response.data);
            setdatas(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [])
      return(
        <ul className='category p-0'>
          {}
            <h2 style={{color:"grey",padding:"20px"}}>CATEGORIES</h2>
            {
                datas.map((ele,ind)=>{
                    return(
                    <Link to={`/category/${ele.slug}`}>
                    <li>{ele.name}</li>
                    </Link>
                    )
                })
            }
        </ul>
      )
}
export default Category;