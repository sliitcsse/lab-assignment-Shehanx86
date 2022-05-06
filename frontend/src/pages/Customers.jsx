import React, { useState, useEffect } from "react";
import { getCustomers } from "../API/api";
import NavBar from "../components/navBar/NavBar";

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        handleFetchCart();
    }, []);

    const handleFetchCart = () => {
        const email = localStorage.getItem('email');
        getCustomers()
            .then(res => setCustomers(res.data))
            .catch(() => console.log(error))
    }


    return (
        <>
            <NavBar role="Trader" />
            <h1>Customers</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {customers && customers.map((cus, index) => 
                     <tr key={index}>
                        <td>{cus.name}</td>
                        <td>{cus.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
      </>
    ); 
}