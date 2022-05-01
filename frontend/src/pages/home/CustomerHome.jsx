import React, { useState, useEffect } from "react";
import { addItemToCart, addItemToWishlist, buyItem, fetchItems } from "../../API/api";
import NavBar from "../../components/navBar/NavBar";

export default function CustomerHome() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        handleFetchItems();
    }, []);

    const handleFetchItems = () => {
        fetchItems()
            .then(res => setItems(res.data))
            .catch(error => alert('Something went wrong'));
    }

    const handleBuyItem = (itemId) => {
        buyItem(itemId)
            .then(res => {
                console.log(res)
                alert(`${res.data[0].name} bought.`);
                handleFetchItems();
            })
            .catch(error => {
                alert('Something went wrong');
                console.log(error);
            });
    }

    const handleAddToCart = (itemId) => {
        const userEmail = localStorage.getItem('email');
        addItemToCart(userEmail, itemId)
            .then(res => {
                res.data === 'Item already exists!' ?
                    alert('This Item is already in the cart!') :
                    alert(`Item added to cart!`);
            })
    }

    const handleAddToWishList = (itemId) => {
        const userEmail = localStorage.getItem('email');
        addItemToWishlist(userEmail, itemId)
            .then(res => {
                res.data === 'Item already exists!' ?
                    alert('This Item is already in the wishlist!') :
                    alert(`Item added to wishlist!`);
            })
    }

    return (
        <>
            <NavBar role="Customer"/>
            <h1>Items for Sale</h1>
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
                            <button className="btn btn-primary" onClick={() => handleBuyItem(item.id)}>Buy</button>
                            <button className="btn btn-secondary" onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
                            <button className="btn btn-secondary" onClick={() => handleAddToWishList(item.id)}>Add to Wishlist</button>
                        </td>
                        </tr>
                    )}
                  
                </tbody>
                </table>

      </>
    ); 
}