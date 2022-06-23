import Navbar from "../../components/Navbar/Navbar";

const StripePaymentSuccess = () => {
    return (
        <>
        <Navbar/>
        <div style={{color:"darkblue", marginTop:150}}>
            <h2 style={{color:"darkblue", marginLeft:550}}>Your payment is successful</h2>
            <h4 style={{color:"darkblue", marginLeft:580}}>Congratulations for your studies!</h4>
            <p style={{color:"darkblue", marginLeft:550}}>
                
                {/* <a href="mailto:orders@example.com">orders@example.com</a>. */}
            </p>
                
            </div>
           
        </>
    );
};
export default StripePaymentSuccess;
