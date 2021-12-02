import React from "react";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";

import * as styles from "../styles/404/404.module.scss";

const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <Head
          title="Page not found | Phoenix Tech"
          description="Error 404: Page not found"
          // url=""
        />
        <div id={styles.notFound}>
          <h1>Error 404</h1>
          <h2>Page not found</h2>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
