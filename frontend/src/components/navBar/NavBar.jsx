import { useEffect } from "react";

export default function NavBar(props) {    
    useEffect(() => {
        const email = localStorage.getItem('email');
        const role = localStorage.getItem('role');
        if(!role || !email) return window.location.href="/login"; 
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
                {props.role == 'Customer' &&
                <div>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">cart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/wishlist">Wishlist</a>
                    </li>
                </div>
                }
            </ul>
            <button className="btn" onClick={logout}>Logout</button>
        </nav>
    );
}