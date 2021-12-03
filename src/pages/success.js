import React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby-link";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";

import * as styles from "../styles/Form/Success.module.scss";

// Redirect to this page after successful form submission - not currently used
const SuccessPage = () => {
  // Create a state for time in seconds
  const [time, setTime] = useState(3);

  // On page load
  useEffect(() => {
    // Reduce 'time' by 1 for each second
    const countdown = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    // Clean up interval timer
    return () => {
      clearInterval(countdown);
    };
  });

  // On page load
  useEffect(() => {
    // Redirect to home after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clean up timeout
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Layout>
        <Head
          title="Success | Phoenix Tech"
          description=""
          // url=""
        />
        <div id={styles.success}>
          <h1>Message sent!</h1>
          <h2>Redirecting back to home page in {time} seconds...</h2>
        </div>
      </Layout>
    </>
  );
};

export default SuccessPage;
