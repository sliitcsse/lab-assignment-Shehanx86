import React, { useState, useEffect } from "react";
import { fetchCart, removeItemFromCart } from "../API/api";
import NavBar from "../components/navBar/NavBar";

export default function Cart() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleFetchCart();
    }, []);

    const handleFetchCart = () => {
        const email = localStorage.getItem('email');
        fetchCart(email)
            .then(res => setItems(res.data))
            .catch(error => alert('Something went wrong'));
    }

    const handleRemoveFromCart = (id) => {
        const email = localStorage.getItem('email');
        removeItemFromCart(email, id)
            .then(res => handleFetchCart())
            .catch(error => console.log())
    }

    return (
        <>
            <NavBar role="Customer" />
            <h1>Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Details</th>
                    <th scope="col">Price</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items && items.map((item, index) => 
                     <tr key={index}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.details}</td>
                        <td>{item.price}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                        </td>
                        </tr>
                    )}
                  
                </tbody>
                </table>

      </>
    ); 
}