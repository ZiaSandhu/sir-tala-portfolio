"use client"
import ProgressScroll from "@/components/Common/ProgressScroll";
import Cursor from "@/components/Common/cusor";
import LoadingScreen from "@/components/Common/loader";
import Blog from "@/components/light/home/blog";
import ContactUs from "@/components/light/contact/ContactUs";
import Info from "@/components/light/contact/info";
import Footer from "@/components/light/home/footer";
import NavTop from "@/components/light/home/nav-top";
import Navbar from "@/components/light/home/navbar";
import Portfolio from "@/components/light/home/portfolio";
import Price from "@/components/light/home/price";
import Profile from "@/components/light/home/profile";
import Services from "@/components/light/home/services";
import Skills from "@/components/light/home/skills";
import Testimonials from "@/components/light/home/testimonials";
import Script from "next/script";
import React from "react";
import { useEffect } from "react";
import { fetchDataFirebase } from "@/lib/firebase";
import { useState } from "react";
function Light() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  
   function transformData(array) {
    return array.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
    }, {});}

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetchDataFirebase("portfolio");
      let newData = transformData(response)
      console.log("🚀 ~ fetchData ~ newData:", newData)
    
      setData(newData);
    } catch (error) {
      setData(null);
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <Cursor />
      <ContactUs />
     {loading && <LoadingScreen />}
      <ProgressScroll />

      <div>
        {/* <NavTop /> */}
       {data && <main className="container mt-20">
          <Profile data={data.home} about={data.about} />
          <Navbar />
          <section className="in-box">
            <Services data={data.udpatedServies.data} />
            <Skills data={data.updatedSkills.data} />
            <Portfolio data={data.work.data} />
            <Testimonials data={data.testimonials.data} />
            {/* <Price /> */}
            <Info />
            {/* <Blog /> */}
          </section>
        </main>}
        <Footer />
      </div>
      <Script
        src="/light/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/light/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/light/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/light/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/light/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default Light;
