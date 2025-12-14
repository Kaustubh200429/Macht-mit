import React, { useState } from "react";
import "./Payments.css";

const Payments = () => {
  const [method, setMethod] = useState("upi");

  return (
    <div className="payment-container">
      <h1>Complete Your Payment</h1>
      <p>Select a payment method to proceed</p>



      <div className="payment-box">
        <div class="stepper-box">
  <div class="stepper-step stepper-completed">
    <div class="stepper-circle">
      <svg
        viewBox="0 0 16 16"
        class="bi bi-check-lg"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"
        ></path>
      </svg>
    </div>
    <div class="stepper-line"></div>
    <div class="stepper-content">
      <div class="stepper-title">German Course selected</div>
      <div class="stepper-status">Full Course</div>
      <div class="stepper-time">Time Zone : IST</div>
    </div>
  </div>

  <div class="stepper-step stepper-active">
    <div class="stepper-circle">2</div>
    <div class="stepper-line"></div>
    <div class="stepper-content">
      <div class="stepper-title">Processing</div>
      <div class="stepper-status">In Progress</div>
      <div class="stepper-time">Time Zone : IST</div>
    </div>
  </div>

  <div class="stepper-step stepper-pending">
    <div class="stepper-circle">3</div>
    <div class="stepper-content">
      <div class="stepper-title">Payment Successfull</div>
      <div class="stepper-status">Pending</div>
      <div class="stepper-time">Time Zone : IST</div>
    </div>
  </div>

  <div class="stepper-controls">
    <button class="stepper-button">Cancel Payment
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-arrow-left"
        viewBox="0 0 16 16"
      >
       </svg>
       
    </button>
  </div>
</div>
        {/* LEFT SIDE */}
        <div className="payment-methods">
          <button onClick={() => setMethod("upi")}>UPI</button>
          <button onClick={() => setMethod("card")}>Card</button>
          <button onClick={() => setMethod("netbanking")}>Net Banking</button>
          <button onClick={() => setMethod("wallet")}>Wallet</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="payment-content">
          {method === "upi" && (
            <div className="upi">
              <h2>UPI Payment</h2>
              <p>Scan QR code using any UPI app</p>

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=yourupi@upi&pn=MACHTMIT&cu=INR"
                alt="UPI QR"
              />

              <p className="upi-id">UPI ID: <b>yourupi@upi</b></p>
            </div>
          )}

          {method === "card" && (
            <div className="card">
              <h2>Card Payment</h2>
              <input type="text" placeholder="Card Number" />
              <input type="text" placeholder="Name on Card" />
              <div className="row">
                <input type="text" placeholder="MM/YY" />
                <input type="text" placeholder="CVV" />
              </div>
              <button className="pay-btn">Pay Now</button>
            </div>
          )}

          {method === "netbanking" && (
            <div className="netbanking">
              <h2>Net Banking</h2>
              <select>
                <option>Select Bank</option>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
                <option>AXIS</option>
              </select>
              <button className="pay-btn">Proceed</button>
            </div>
          )}

          {method === "wallet" && (
            <div className="wallet">
              <h2>Wallet Payment</h2>
              <button>Paytm</button>
              <button>PhonePe</button>
              <button>Google Pay</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;
