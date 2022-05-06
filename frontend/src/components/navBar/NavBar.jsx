import { useEffect, useState } from "react";

export default function NavBar(props) {  
    const [role, setRole] = useState();  
    useEffect(() => {
        const email = localStorage.getItem('email');
        const role = localStorage.getItem('role');
        if(!role || !email) return window.location.href="/login"; 
        setRole(role);
    })
    const logout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("role");
        window.location.href = "/login"
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li>
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/promotions">Promotions</a>
                </li>
                {role == 'Customer' ?
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/wishlist">Wishlist</a>
                    </li>
                </> :
                <>
                    <li className="nav-item">
                        <a className="nav-link" href="/customers">Customers</a>
                    </li>
                </>
                }
            </ul>
            <button className="btn" onClick={logout}>Logout</button>
        </nav>
    );
}