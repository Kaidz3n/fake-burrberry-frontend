import React from "react";
import "./Footer.css";

export default () => {
  return (
    <footer>
      <div className="footer-info-container hidden-xs">
        <div className="container">
          <nav className="footer-nav">
            <div className="row">
              <div className="col-md-3">
                <h4 className="footer-info-header">CUSTOMER SERVICE</h4>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/customer-service/contact-us/"
                >
                  Contact Us
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/customer-service/payment/"
                >
                  Payment
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/customer-service/shipping/"
                >
                  Shipping
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/customer-service/returns/"
                >
                  Returns
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/customer-service/faqs/"
                >
                  Faqs
                </a>
                <a
                  className="footer-info-link"
                  href="https://c-4303.estara.com/UI/gui.php?donotcache=1501937664377&accountid=200106299039&referrer=https%3A%2F%2Fru.burberry.com%2Fmen%2F&pagetitle=%D0%A2%D0%BE%D0%B2%D0%B0%D1%80%D1%8B+%D0%B4%D0%BB%D1%8F+%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD+%7C+Burberry&template=1018234&urid=348134&calltype=webvoicepop&estara_fsguid=850FF3223D9A8D4F1E8A6323E79CE585&guiid=43f2de8a9637b&timestamp=1501937768"
                >
                  Live Chat
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/the-burberry-app/"
                >
                  The Burberry App
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/store-locator/russia"
                >
                  Store Locator
                </a>
              </div>
              <div className="col-md-3">
                <h4 className="footer-info-header">OUR COMPANY</h4>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/our-history/"
                >
                  Our History
                </a>
                <a
                  className="footer-info-link"
                  href="https://www.burberryplc.com/"
                >
                  Burberry Group Plc
                </a>
                <a
                  className="footer-info-link"
                  href="https://burberrycareers.com/"
                >
                  Careers
                </a>
                <a
                  className="footer-info-link"
                  href="https://www.burberryplc.com/en/responsibility.html"
                >
                  Corporate Responsibility
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/site-map/"
                >
                  Site Map
                </a>
              </div>
              <div className="col-md-3">
                <h4 className="footer-info-header">LEGAL &amp; COOKIES</h4>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/legal-cookies/terms-conditions/"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/legal-cookies/privacy-policy/"
                >
                  Privacy Policy
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/legal-cookies/cookie-policy/"
                >
                  Cookie Policy
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/legal-cookies/accessibility-statement/"
                >
                  Accessibility Statement
                </a>
                <a
                  className="footer-info-link"
                  href="https://ru.burberry.com/legal-cookies/japan-only-sctl-indications/"
                >
                  Japan Only - SCTL indications
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="footer-buttons-container">
          <button className="footer-button" type="button">
            Shipping country: Russian Federation
          </button>
          <button className="footer-button" type="button">
            Language: English
          </button>
        </div>
        <div className="footer-help">
          <h4 className="footer-help-header">Need help?</h4>
          <a
            className="footer-contacts-info"
            href="https://ru.burberry.com/customer-service/contact-us/"
          >
            Find out more and contact us
          </a>
        </div>
      </div>
    </footer>
  );
};
