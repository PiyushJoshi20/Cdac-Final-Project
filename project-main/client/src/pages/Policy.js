import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className=" bg-info p-2 text-black text-center">
            Privacy Policy
          </h1>
          <p>This Privacy Policy was last updated on March 23, 2023.</p>
          <p>
            Thank you for joining Learn annd Grow. We at Learn annd Grow respect
            your privacy and want you to understand how we collect, use, and
            share data about you. This Privacy Policy covers our data collection
            practices and describes your rights regarding your personal data.
          </p>
          <p>
            Unless we link to a different policy or state otherwise, this
            Privacy Policy applies when you visit or use Udemy websites, mobile
            applications, APIs, or related services . It also applies to
            prospective customers of our business and enterprise products.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
