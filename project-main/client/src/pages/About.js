import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className=" bg-info p-2 text-black text-center">About Us</h1>
          <p className="text-justify mt-2">
            We help organizations of all types and sizes prepare for the path
            ahead — wherever it leads. Our curated collection of business and
            technical courses help companies, governments, and nonprofits go
            further by placing learning at the center of their strategies.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
