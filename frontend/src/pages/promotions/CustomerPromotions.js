import React, { useState, useEffect } from "react";
import { fetchPromotions, purchasePromotion } from "../../API/api";
import NavBar from "../../components/navBar/NavBar";

export default function CustomerPromotions() {
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        handleFetchPromotions();
    }, []);

    const handleFetchPromotions = () => {
        fetchPromotions()
            .then(res => setPromos(res.data))
            .catch(error => alert('Something went wrong'));
    }

    const handlePurchasePromotion = (id) => {
        purchasePromotion(id)
            .then(() => {
                alert('Promotion purchased!')
                handleFetchPromotions();
            })
            .catch(() => alert('Something went wrong'));
    }
    return (
        <>
            <NavBar role="Customer"/>
            <h1>Promotions</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Promotion Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Item</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {promos && promos.map((promo, index) => 
                     <tr key={index}>
                        <th scope="row">{promo.id}</th>
                        <td>{promo.name}</td>
                        <td>{promo.price}</td>
                        <td>{promo.item.name}</td>
                        <td>
                            <button className="btn btn-primary" onClick={() => handlePurchasePromotion(promo.id)}>Purchase</button>
                        </td>
                        </tr>
                    )}
                  
                </tbody>
                </table>

      </>
    ); 
}