import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Payments.css";

const Payments = () => {
  const location = useLocation();

  // ===== DATA FROM COURSE PAGE =====
  const courseName = location.state?.courseName || "German Course";
  const fullPriceRaw = location.state?.fullPrice || "₹0";
  const monthlyPriceRaw = location.state?.monthlyPrice || "₹0";

  // Remove ₹ and commas
  const fullPrice = fullPriceRaw.replace(/[₹,]/g, "");
  const monthlyPrice = monthlyPriceRaw.replace(/[₹,]/g, "");

  // ===== STATES =====
  const [method, setMethod] = useState("upi");
  const [paymentType, setPaymentType] = useState("monthly");

  // Selected amount
  const amount = paymentType === "full" ? fullPrice : monthlyPrice;

  return (
    <div className="payment-container">
      <h1>Complete Your Payment</h1>
      <p>Select a payment method to proceed</p>

      <div className="payment-box">

        {/* ================= LEFT STEPPER ================= */}
        <div className="stepper-box">
          <div className="stepper-step stepper-completed">
            <div className="stepper-circle">✓</div>
            <div className="stepper-content">
              <div className="stepper-title">{courseName}</div>
              <span className="stepper-status">
                Amount: ₹{amount} {paymentType === "monthly" && "per month"}
              </span>
              <div className="stepper-time">Time Zone : IST</div>
            </div>
          </div>

          <div className="stepper-step stepper-active">
            <div className="stepper-circle">2</div>
            <div className="stepper-content">
              <div className="stepper-title">Processing</div>
              <span className="stepper-status">In Progress</span>
            </div>
          </div>

          <div className="stepper-step stepper-pending">
            <div className="stepper-circle">3</div>
            <div className="stepper-content">
              <div className="stepper-title">Payment Successful</div>
              <span className="stepper-status">Pending</span>
            </div>
          </div>
        </div>

        {/* ================= PAYMENT METHODS ================= */}
        <div className="payment-methods">
          <button onClick={() => setMethod("upi")}>UPI</button>
          <button onClick={() => setMethod("card")}>Card</button>
          <button onClick={() => setMethod("netbanking")}>Net Banking</button>
          <button onClick={() => setMethod("wallet")}>Wallet</button>
        </div>

        {/* ================= PAYMENT CONTENT ================= */}
        <div className="payment-content">

          {/* ===== FULL / MONTHLY SELECT ===== */}
          <div className="payment-type">
            <label>
              <input
                type="radio"
                name="paytype"
                checked={paymentType === "full"}
                onChange={() => setPaymentType("full")}
              />
              Full Course – ₹{fullPrice}
            </label>

            <label>
              <input
                type="radio"
                name="paytype"
                checked={paymentType === "monthly"}
                onChange={() => setPaymentType("monthly")}
              />
              Monthly – ₹{monthlyPrice} per month
            </label>
          </div>

          {/* ================= UPI ================= */}
          {method === "upi" && (
            <div className="upi">
              <h2>UPI Payment</h2>
              <p>Scan QR using any UPI app</p>

              {/* 🔥 DYNAMIC QR WITH AMOUNT */}
             <img
  src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=9148526550@ybl&pn=MACHTMIT&am=${amount}&cu=INR&tn=${encodeURIComponent(courseName + " Fee")}`}
  alt="UPI QR"
/>

              <p><b>UPI ID:</b> 9148526550@ybl</p>
              <p><b>Amount:</b> ₹{amount}</p>
            </div>
          )}

          {/* ================= CARD ================= */}
          {method === "card" && (
            <div className="card">
              <h2>Card Payment</h2>
              <input placeholder="Card Number" />
              <input placeholder="Name on Card" />
              <div className="row">
                <input placeholder="MM/YY" />
                <input placeholder="CVV" />
              </div>
              <button className="pay-btn">Pay ₹{amount}</button>
            </div>
          )}

          {/* ================= NET BANKING ================= */}
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
              <button className="pay-btn">Pay ₹{amount}</button>
            </div>
          )}

          {/* ================= WALLET ================= */}
          {method === "wallet" && (
            <div className="wallet">
              <h2>Wallet</h2>
              <button>PhonePe</button>
              <button>Google Pay</button>
              <button>Paytm</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payments;