import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./Payments.css";

const Payment = () => {
  const location = useLocation();
  const history = useHistory();

  // ✅ SAFELY READ DATA FROM COURSE PAGE
  const courseName = location.state?.courseName || "Course";
  const fullPrice = location.state?.fullPrice || "₹0";
  const monthlyPrice = location.state?.monthlyPrice || "₹0";

  // remove ₹ for calculation
  const fullAmount = fullPrice.replace(/[₹,]/g, "");
  const monthlyAmount = monthlyPrice.replace(/[₹,]/g, "");

  // STATES
  const [paymentType, setPaymentType] = useState("monthly");
  const [method, setMethod] = useState("upi");

  // FINAL AMOUNT
  const amount =
    paymentType === "full" ? fullAmount : monthlyAmount;

  // UPI STRING
  const upiString = `upi://pay?pa=9148526550@ybl&pn=MACHTMIT&am=${amount}&cu=INR&tn=${encodeURIComponent(
    courseName + " Course Fee"
  )}`;

  return (
    <div className="payment-container">
      <h1>Course Payment</h1>
      <p>{courseName}</p>

      <div className="payment-box">

        {/* ===== LEFT SUMMARY ===== */}
        <div className="stepper-box">
          <div className="stepper-step stepper-completed">
            <div className="stepper-circle">✓</div>
            <div className="stepper-content">
              <div className="stepper-title">{courseName}</div>
              <div className="stepper-status">
                Amount: ₹{amount}
                {paymentType === "monthly" && " / month"}
              </div>
            </div>
          </div>

          <button
            className="stepper-button"
            onClick={() => history.push("/courses")}
          >
            Cancel
          </button>
        </div>

        {/* ===== PAYMENT METHODS ===== */}
        <div className="payment-methods">
          <button onClick={() => setMethod("upi")}>UPI</button>
          <button onClick={() => setMethod("card")}>Card</button>
          <button onClick={() => setMethod("netbanking")}>
            Net Banking
          </button>
        </div>

        {/* ===== PAYMENT CONTENT ===== */}
        <div className="payment-content">

          {/* PRICE TYPE */}
          <div className="payment-type">
            <label>
              <input
                type="radio"
                checked={paymentType === "monthly"}
                onChange={() => setPaymentType("monthly")}
              />
              Monthly – {monthlyPrice}
            </label>

            <label>
              <input
                type="radio"
                checked={paymentType === "full"}
                onChange={() => setPaymentType("full")}
              />
              Full Course – {fullPrice}
            </label>
          </div>

          {/* ===== UPI ===== */}
          {method === "upi" && (
            <div className="upi">
              <h2>UPI Payment</h2>

              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                  upiString
                )}`}
                alt="UPI QR"
              />

              <p><b>UPI ID:</b> 9148526550@ybl</p>
              <p><b>Amount:</b> ₹{amount}</p>
            </div>
          )}

          {/* ===== CARD ===== */}
          {method === "card" && (
            <div className="card">
              <input placeholder="Card Number" />
              <input placeholder="Name on Card" />
              <button className="pay-btn">
                Pay ₹{amount}
              </button>
            </div>
          )}

          {/* ===== NET BANKING ===== */}
          {method === "netbanking" && (
            <div className="netbanking">
              <select>
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
              </select>
              <button className="pay-btn">
                Pay ₹{amount}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Payment;
