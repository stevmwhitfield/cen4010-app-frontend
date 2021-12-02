import React from "react";
import { useState } from "react";
import { navigate } from "gatsby-link";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";

import * as styles from "../styles/Checkout/Checkout.module.scss";

const CheckoutPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationDate, setExpirationDate] = useState("");

  const handleFormSubmission = (e) => {
    e.preventDefault();
    let formData;
    if (
      firstName &&
      lastName &&
      email &&
      city &&
      postalCode &&
      phoneNumber &&
      creditCardNumber &&
      securityCode &&
      expirationDate
    ) {
      formData = {
        firstName,
        lastName,
        email,
        city,
        postalCode,
        phoneNumber,
        creditCardNumber,
        securityCode,
        expirationDate,
      };
      setFirstName("");
      setLastName("");
      setEmail("");
      setCity("");
      setPostalCode("");
      setPhoneNumber("");
      setCreditCardNumber("");
      setSecurityCode("");
      setExpirationDate("");
      alert("Thank you for your purchase!");
      navigate("/");
    } else {
      console.log("ERROR: Missing form values.");
    }

    return fetch("https://phoenixtech-app.herokuapp.com/api/transactions", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <Layout>
        <Head
          title="Checkout | Phoenix Tech"
          description=""
          // url=""
        />
        <div id={styles.checkout}>
          <h1>Checkout</h1>
          <div className={styles.contact}>
            <form
              name="contact"
              onSubmit={handleFormSubmission}
              action="/success-purchase"
              method="POST"
            >
              <div id={styles.personalInformation}>
                <h2>Personal Information</h2>
                <div>
                  <label>
                    <span>First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      minLength="2"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>Last Name</span>
                    <input
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      minLength="2"
                    />
                  </label>
                </div>
                <div className={styles.twoCol}>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>City</span>
                    <input
                      type="text"
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>Postal Code</span>
                    <input
                      type="text"
                      name="postalCode"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div className={styles.twoCol}>
                  <label>
                    <span>Phone Number</span>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
              <div id={styles.paymentDetails}>
                <h2>Payment Details</h2>
                <div className={styles.twoCol}>
                  <label>
                    <span>Credit Card Number</span>
                    <input
                      name="text"
                      value={creditCardNumber}
                      onChange={(e) => setCreditCardNumber(e.target.value)}
                      minLength="16"
                      maxLength="16"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>Security Code</span>
                    <input
                      name="securityCode"
                      value={securityCode}
                      onChange={(e) => setSecurityCode(e.target.value)}
                      minLength="3"
                      maxLength="3"
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span>Expiration Date</span>
                    <input
                      name="expirationDate"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                      pattern="^(0[1-9]|1[0-2])-\d{4}$"
                      required
                    />
                  </label>
                </div>
              </div>
              <button type="submit">Complete Purchase</button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CheckoutPage;
