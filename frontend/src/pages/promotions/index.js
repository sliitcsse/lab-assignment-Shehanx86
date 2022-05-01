import CustomerPromotions from "./CustomerPromotions";
import TraderPromotions from "./TraderPromotions";

export default function Promotion() {
    const role = localStorage.getItem('role');
    return(
        <>
            {role === 'Customer' ? <CustomerPromotions/> : <TraderPromotions/>}
        </>
    );
}