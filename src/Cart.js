import { addcart,increment } from "./app/counter";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
const Cart = () => {
    var arr = useSelector((state) => state.counter.value);
    var [val,setval]=useState();
    var dispatch=useDispatch()
    console.log(arr);
    let incre =(el)=>{
        dispatch=increment(el);
    }
    return (
        <div className="cart">
            <Table striped bordered hover size="sm" >
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total price</th>
                    </tr>
                {
                    arr.map((ele, ind) => {
                        return (
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.title}</td>
                                        <td><img width={"200px"} height={"120px"} padding={"20px"} src={ele.thumbnail}></img></td>
                                        <td>{ele.price}</td>
                                        <td>1</td>
                                        <td>{ele.t}</td>
                                    </tr>
                        )
                    })
                }
                </Table>
            </div>
            );
}

            export default Cart;