import React from "react";
import PropTypes from "prop-types";

import Header from "../../base/header/Header";
import Footer from "../../base/footer/Footer";

import SideCards from "../../composite/sideCards/SideCards";
import "../page.css";
import "./BcscRedirect.css";

export default function BcscRedirect({ page: { header } }) {
  return (
    <main>
      <Header header={header} />
      <div className="page">
        <div className="content col-md-8">
          <h1>BC Service Card Application</h1>
          <p>
            Workers of a cannabis retail store must register with the Province.
            Workers must also pass security screening every two years.
          </p>
          <p>
            Cannabis retail store application and licensing fees do not cover
            worker registration costs. Workers must apply to register and are
            responsible for the cost. Licence applicants and licensees can pay
            workers&apos; registration costs if they wish.
          </p>
          <h3>
            To register as a Cannabis Worker online, you must log in with your
            BC Service Card Account.
          </h3>
          <p>Please select an option below:</p>
          <div className="option">
            I’m a B.C. resident with a BC Services Card Account
          </div>
          <div className="option">
            I’m a B.C. resident but I don&apos;t have a BC Services Card Account
          </div>
          <div className="option">
            I’m not a B.C. resident, send me a Cannabis Worker Registration
            form.
          </div>
        </div>

        <div className="sidecard">
          <SideCards type={"bcservice"} />
          <SideCards type={"withoutBCServiceCard"} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

BcscRedirect.propTypes = {
  page: PropTypes.shape({
    header: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired
};
