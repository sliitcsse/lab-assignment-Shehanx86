import React, { useState, useEffect } from "react";
import { fetchWishlist, removeItemFromWishlist } from "../API/api";

export default function Wishlist() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleFetchCart();
    }, []);

    const handleFetchCart = () => {
        const email = localStorage.getItem('email');
        fetchWishlist(email)
            .then(res => setItems(res.data))
            .catch(error => alert('Something went wrong'));
    }

    const handleRemoveFromWishlist = (id) => {
        const email = localStorage.getItem('email');
            removeItemFromWishlist(email, id)
            .then(() => handleFetchCart())
            .catch(error => console.log())
    }

    return (
        <>
            <ul>
                <li><a href="items">Items</a></li>
                <li><a href="promotions">Promotions</a></li>
                <li><a href="cart">Cart</a></li>
                <li><a href="wishlist">Wishlist</a></li>
            </ul>

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
                            <button className="btn btn-primary" onClick={() => handleRemoveFromWishlist(item.id)}>Remove</button>
                        </td>
                        </tr>
                    )}
                  
                </tbody>
                </table>

      </>
    ); 
}