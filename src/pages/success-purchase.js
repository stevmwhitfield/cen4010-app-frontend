import React from "react";
import { useState, useEffect } from "react";
import { navigate } from "gatsby-link";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";

import * as styles from "../styles/Form/Success.module.scss";

const SuccessPurchasePage = () => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

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
          <h1>Thank you for your purchase!</h1>
          <h2>Redirecting back to home page in {time} seconds...</h2>
        </div>
      </Layout>
    </>
  );
};

export default SuccessPurchasePage;
