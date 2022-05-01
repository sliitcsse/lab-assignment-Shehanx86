import CustomerHome from "./CustomerHome";
import TraderHome from "./TraderHome";

export default function Home() {
    const role = localStorage.getItem('role');
    return(
        <>
            {role === 'Customer' ? <CustomerHome/> : <TraderHome/>}
        </>
    );
}