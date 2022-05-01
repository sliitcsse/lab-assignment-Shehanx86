import React, { useState, useEffect } from "react";
import { createPromotion, fetchPromotions } from "../../API/api";
import NavBar from "../../components/navBar/NavBar";

export default function TraderPromotions() {
    const [promos, setPromos] = useState([]);
    const [promo, setPromo] = useState([]);

    useEffect(() => {
        handleFetchPromotions();
    }, []);

    const handleFetchPromotions = () => {
        fetchPromotions()
            .then(res => setPromos(res.data))
            .catch(error => alert('Something went wrong'));
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'id': {
                setPromo({...promo, id: value});
                break;
            }
            case 'name': {
                setPromo({...promo, name: value});
                break;
            }
            case 'price': {
                setPromo({...promo, price: value});
                break;
            }
            case 'itemId': {
                setPromo({...promo, itemId: value});
                break;
            }
            default: {}
        }
    }
    const handleCreatePromo = (e) => {
        e.preventDefault();
        console.log(promo)
        createPromotion(promo)
            .then(res => {
                if(res.data === 'Promotion already exists!') return alert(res.data);
                if(res.data === 'Item does not exist!') return alert(res.data);
                handleFetchPromotions();
            })
            .catch(error => alert('Something went wrong'))
    }

    return (
        <>
            <NavBar />
            <h1>Create Promotion</h1>
            <form>
                <div className="form-group">
                <label>Promotion Id</label>
                <input
                    type="text"
                    name="id"
                    placeholder="Enter promotion's id"
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter item's name"
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Price</label>
                <input
                    type="text"
                    name="price"
                    placeholder="Enter price"
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Item Id</label>
                <input
                    type="text"
                    name="itemId"
                    placeholder="Enter Item Id"
                    onChange={handleChange}
                />
                </div>
                <button onClick={handleCreatePromo}>Create Promotion</button> 
            </form>
            <br />
            <h1>Promotions</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Promotion Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Item</th>
                    {/* <th scope="col">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {promos && promos.map((promo, index) => 
                     <tr key={index}>
                        <th scope="row">{promo.id}</th>
                        <td>{promo.name}</td>
                        <td>{promo.price}</td>
                        <td>{promo.item.name}</td>
                        {/* { console.log(promo) } */}
                        <td>
                            {/* <button className="btn btn-primary" onClick={() => handleEditItemForm(item.id)}>Edit Item</button> */}
                        </td>
                        </tr>
                    )}
                  
                </tbody>
                </table>

      </>
    ); 
}