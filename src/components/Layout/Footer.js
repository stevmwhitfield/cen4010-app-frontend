import React from "react";
import { useState } from "react";

import * as styles from "../../styles/Layout/Footer.module.scss";

// The footer of each page
const Footer = () => {
  // Create states for form information
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Called when form is submitted
  const handleFormSubmission = (e) => {
    // Prevents default form actions
    e.preventDefault();
    let formData;
    // If fields are not empty strings, update formData and reset states
    if (name && email && message) {
      formData = { name, email, message };
      setName("");
      setEmail("");
      setMessage("");
    } else {
      console.log("ERROR: Missing form values.");
    }

    // Send formData to the API using POST in JSON format
    return fetch("https://phoenixtech-app.herokuapp.com/api/contact", {
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
    <footer id={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            suscipit mauris ac molestie. Fusce nec sollicitudin libero. Nullam
            nisl sapien, blandit id tortor vitae, tempus facilisis nisi.
          </p>
          <br />
          <p>
            Fusce nec sollicitudin libero. Nullam nisl sapien, blandit id tortor
            vitae, tempus facilisis nisi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In eleifend suscipit mauris ac
            molestie.
          </p>
        </div>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <form
            name="contact"
            onSubmit={handleFormSubmission}
            action="/success"
            method="POST"
          >
            <div>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  minLength="2"
                />
              </label>
            </div>
            <div>
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
                <span>Message</span>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  cols="30"
                  rows="8"
                  required
                ></textarea>
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; Phoenix Tech 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
