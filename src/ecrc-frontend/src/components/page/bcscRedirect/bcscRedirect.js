import React from "react";
import PropTypes from "prop-types";

import Header from "../../base/header/Header";
import Footer from "../../base/footer/Footer";
import TermsOfUse from "../../base/termsOfUse/TermsOfUse";
import "../page.css";

export default function BcscRedirect({ page: { header } }) {
  return (
    <main>
      <Header header={header} />
      <div className="page">
        <div className="content"></div>
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
