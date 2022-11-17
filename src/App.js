import './App.css';

function App() {
  return (
    <>
    <div className='Main'>
      <p style={{fontSize:"27px", fontWeight:"bold"}}>Subscribe to LoveMe</p>
      <div className='btn-one'>
          <div className='bill-one'>
            <div>
            <p style={{fontWeight:"bold"}}>Bill Monthly</p>
            <p style={{paddingTop:"10px", color:"#BBBABA"}}>$10/month</p>
            </div>
            <div>
            <div className='ras'></div>
            </div>
          </div>
          <div className='bill-two'>
          <div>
            <p style={{fontWeight:"bold"}}>Bill Yearly</p>
            <p style={{paddingTop:"10px", color:"#BBBABA"}}>$5/month</p>
            </div>
            <div>
              <div className='rad'></div>
            </div>
          </div>
      </div>
      <p style={{fontSize:"20px", fontWeight:"bold", padding:"30px 0px", paddingBottom:"20px"}}>Payment Details</p>
      <div>
      <button type="button" className='paypal'>PayPal</button>
      <button type="button" className='bank'>Bank Transfer</button>
      </div>
      <p style={{fontSize:"15px", padding:"30px 0px", paddingBottom:"10px"}}>or subscribe using a Credit Card</p>
      <div className='bord'>
      <label>
          <p style={{ marginTop: "20px", fontWeight:"bold", fontSize:"18px" }}>Cardholder Name</p>
          <input placeholder={`Name`} className='holder'/>
        </label>
<div className='all'>
      <label>
          <p style={{ marginTop: "20px", fontWeight:"bold", fontSize:"18px" }}>Card Number</p>
          <input placeholder={`4111 1111 1111 1111`} className='holder number' />
        </label>
        <div className='ecvv'>
      <label>
          <p style={{ marginTop: "20px", fontWeight:"bold", fontSize:"18px" }}>Expiration Date</p>
          <input placeholder={`MM/YY`} className='hold expire'/>
        </label>
      <label>
          <p style={{ marginTop: "20px", fontWeight:"bold", fontSize:"18px" }}>CVV</p>
          <input placeholder={`234`}  className='hold cvv'/>
        </label>
        </div>
      <label>
          <p style={{ marginTop: "20px", fontWeight:"bold", fontSize:"18px" }}>Postal Code</p>
          <input placeholder={`21435`} className='holder' />
        </label>
        </div>
</div>
      <label>
          <p style={{ marginTop: "20px", fontWeight:"bold", fontSize:"20px" }}>Discount Code</p>
          <input id='discount' placeholder={`Enter Discount Code`} />
          <button type="button" className='apply'>Apply</button>
        </label>
      <div style={{ marginTop: "30px" }}>
        <div className='total' style={{ marginTop: "10px" }}><p>Subtotal</p> <p>$120.00</p></div>
        <div className='total' style={{ marginTop: "10px" }}><p style={{ color: "#DC4E4C" }}>Yearly Plan Discount</p> <p style={{ color: "#DC4E4C" }}>-$60.00</p></div>
        <div className='total' style={{ marginTop: "10px" }}><p>Total to Pay</p> <p>$60.00</p></div>
      </div>
      <p style={{fontSize:"15px", padding:"30px 0px", paddingBottom:"20px"}}>You have the right to cancel your subscription at any time</p>
      <button type="button" className='subscribe' style={{ fontSize:"16px" }}>Subscribe</button>
      
      <div className='footer'> 
        <div>
      <p style={{fontSize:"15px", marginTop: "8px", color: "grey" }}>Email Address</p>
      <p style={{fontSize:"15px", marginTop: "8px", color: "grey"}}>Invoices will be sent to this email address</p>
      </div>
      <div> 
      <input placeholder={`billing@loveme.com`} className='foot' />
     </div>
      </div>

      </div>
    </>
  );
}

export default App;
