import React, { useState, useEffect } from "react";
import { addItemToCart, addItemToWishlist, buyItem, createItem, editItem, fetchItems } from "../../API/api";

export default function TraderHome() {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    const [editClicked, setEditClicked] = useState(false);

    useEffect(() => {
        handleFetchItems();
    }, []);

    const handleFetchItems = () => {
        fetchItems()
            .then(res => setItems(res.data))
            .catch(error => alert('Something went wrong'));
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch(name) {
            case 'id': {
                setItem({...item, id: value});
                break;
            }
            case 'name': {
                setItem({...item, name: value});
                break;
            }
            case 'details': {
                setItem({...item, details: value});
                break;
            }
            case 'price': {
                setItem({...item, price: value});
                break;
            }
            default: {}
        }
    }

    const handleCreateItem = (e) => {
        e.preventDefault();
        console.log(item)
        createItem(item)
            .then(res => {
                res.data === 'Item already exists!' ?
                    alert('Item aleardy exists with id ID you have entered!') :
                   handleFetchItems()
            })
            .catch(error => alert('Something went wrong'))
    }

    const handleEditItemForm = (id) => {
        setEditClicked(true);
        const oldItem = items.find(item => item.id == id);
        setItem(oldItem);
    }

    const handleEditItem = (item) => {
        console.log(item)
        editItem(item.id, item)
            .then(res => {
                res.data === "Item does not exist!" ?
                    alert('Inavlid Id!') :
                    alert('Item updated!');
                    handleClearForm();
                    handleFetchItems();
            })
            .catch(error => alert('Something went wrong'));
    }

    const handleClearForm = () => {
        setEditClicked(false);
        setItem({});
    }
    return (
        <>
            <ul>
                <li><a href="items">Items</a></li>
                <li><a href="promotions">Promotions</a></li>
                <li><a href="cart">Cart</a></li>
                <li><a href="wishlist">Wishlist</a></li>
            </ul>

            <form>
                <div className="form-group">
                <label>Item Id</label>
                <input
                    type="text"
                    value={item.id || ''}
                    name="id"
                    placeholder="Enter item's id"
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={item.name || ''}
                    placeholder="Enter item's name"
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Details</label>
                <input
                    type="text"
                    name="details"
                    value={item.details || ''} 
                    placeholder="Enter details"
                    onChange={handleChange}
                />
                </div>
                <div className="form-group">
                <label>Price</label>
                <input
                    type="text"
                    name="price"
                    value={item.price || ''}
                    placeholder="Enter price"
                    onChange={handleChange}
                />
                </div>
                {editClicked ? 
                    <button type="button" onClick={() => handleEditItem(item)}>
                    Edit Item
                    </button> :
                    <button type="button" onClick={handleCreateItem}>
                        Create Item
                    </button>
                }   
            </form>
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
                            <button className="btn btn-primary" onClick={() => handleEditItemForm(item.id)}>Edit Item</button>
                        </td>
                        </tr>
                    )}
                  
                </tbody>
                </table>

      </>
    ); 
}