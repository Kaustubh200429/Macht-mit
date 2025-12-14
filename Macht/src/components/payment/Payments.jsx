import React, { useState } from "react";
import "./Payments.css";
import { Link, useLocation } from "react-router-dom";

const Payments = () => {
  const [method, setMethod] = useState("upi");

  // 🔹 Get selected course data
  const location = useLocation();
  const courseName = location.state?.courseName || "German Course";
  const coursePrice = location.state?.coursePrice || "₹0";

  return (
    <div className="payment-container">
      <h1>Complete Your Payment</h1>
      <p>Select a payment method to proceed</p>

      <div className="payment-box">

        {/* STEPPER */}
        <div className="stepper-box">

          <div className="stepper-step stepper-completed">
            <div className="stepper-circle">
              ✓
            </div>
            <div className="stepper-line"></div>
            <div className="stepper-content">
              <div className="stepper-title">{courseName}</div>
              <div className="stepper-status">Amount: {coursePrice}</div>
              <div className="stepper-time">Time Zone : IST</div>
            </div>
          </div>

          <div className="stepper-step stepper-active">
            <div className="stepper-circle">2</div>
            <div className="stepper-line"></div>
            <div className="stepper-content">
              <div className="stepper-title">Processing</div>
              <div className="stepper-status">In Progress</div>
              <div className="stepper-time">Time Zone : IST</div>
            </div>
          </div>

          <div className="stepper-step stepper-pending">
            <div className="stepper-circle">3</div>
            <div className="stepper-content">
              <div className="stepper-title">Payment Successful</div>
              <div className="stepper-status">Pending</div>
              <div className="stepper-time">Time Zone : IST</div>
            </div>
          </div>

          <div className="stepper-controls">
            <Link to="/pricing" className="stepper-button">
              Cancel Payment
            </Link>
          </div>
        </div>

        {/* PAYMENT METHODS */}
        <div className="payment-methods">
          <button onClick={() => setMethod("upi")}>UPI</button>
          <button onClick={() => setMethod("card")}>Card</button>
          <button onClick={() => setMethod("netbanking")}>Net Banking</button>
          <button onClick={() => setMethod("wallet")}>Wallet</button>
        </div>

        {/* PAYMENT CONTENT */}
        <div className="payment-content">

          {method === "upi" && (
            <div className="upi">
              <h2>UPI Payment</h2>
              <p>Scan QR code using any UPI app</p>

              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=9148526550@ybl&pn=MACHTMIT&am=${coursePrice.replace("₹", "")}&cu=INR`}
                alt="UPI QR"
              />

              <p className="upi-id">
                UPI ID: <b>9148526550@ybl</b>
              </p>
              <p><strong>Amount:</strong> {coursePrice}</p>
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
