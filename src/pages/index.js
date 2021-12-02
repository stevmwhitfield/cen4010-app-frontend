import React from "react";

import Layout from "../components/Layout/Layout";
import Head from "../components/Layout/Head";
import Hero from "../components/Home/Hero";
import TopBrands from "../components/Home/TopBrands";
import Info from "../components/Home/Info";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Head
          title="Computer Accessories and Peripherals - Phoenix Tech"
          description="Shop for computer accessories and peripherals to take your computer experience to the next level."
          // url=""
        />
        <Hero />
        <TopBrands />
        <Info
          imgSide="left"
          heading="Accessories"
          text="Quas corporis qui placeat dicta voluptatum vitae ut temporibus. Qui pariatur voluptatem animi quia dicta laudantium veniam et. Veritatis dolor eligendi non. Autem aut aut amet. Sed illum vel sequi aperiam ut consequatur rerum."
        />
        <Info
          imgSide="right"
          heading="Peripherals"
          text="Autem aut aut amet. Sed illum vel sequi aperiam ut consequatur rerum. Quas corporis qui placeat dicta voluptatum vitae ut temporibus. Qui pariatur voluptatem animi quia dicta laudantium veniam et. Veritatis dolor eligendi non."
        />
      </Layout>
    </>
  );
};

export default HomePage;
