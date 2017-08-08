import React from "react";
import logo from "./triangle.svg";
import "./Main.css";

export default () => {
  return (
    <main className="container">
      <h1 className="product-title">Long Cotton Gabardine Car Coat</h1>

      <div className="row">
        <div className="col-xs-12 col-md-7">
          <div className="product-images-container">
            <img
              className="product-image"
              src="img/bitmap.jpg"
              srcset="img/bitmap@2x.jpg 2x, img/bitmap@3x.jpg 3x"
              alt="product-image"
            />
            <img
              className="product-image"
              src="img/bitmap2.jpg"
              srcset="img/bitmap2@2x.jpg 2x, img/bitmap2@3x.jpg 3x"
              alt="product-image"
            />
            <img
              className="product-image"
              src="img/bitmap3.jpg"
              srcset="img/bitmap3@2x.jpg 2x, img/bitmap3@3x.jpg 3x"
              alt="product-image"
            />
            <img
              className="product-image"
              src="img/bitmap4.jpg"
              srcset="img/bitmap4@2x.jpg 2x, img/bitmap4@3x.jpg 3x"
              alt="product-image"
            />
          </div>
        </div>

        <div className="col-xs-12 col-md-5">
          <div className="product-info-container">
            <h2 className="product-price">110 000 руб.</h2>
            <p className="product-id">Item 39428531</p>
          </div>

          <div className="product-color-container">
            <p className="product-color-current-selection-name">
              Colour: Honey
            </p>
            <div className="product-color-pallete">
              <button
                className="product-color-pallete-selector color-selector-black color-selector-inactive"
                type="button"
              />
              <button
                className="product-color-pallete-selector color-selector-honey color-selector-active"
                type="button"
              />
            </div>
            <hr />
          </div>

          <div className="product-actions">
            <button className="product-size-select" type="button">
              SELECT A SIZE
            </button>
            <button className="product-find" type="button">
              FIND IN STORE
            </button>
            <button className="product-size-help" type="button">
              NEED SIZE HELP?
            </button>
          </div>
        </div>
      </div>

      <div className="product-description">
        <div className="product-description-pane">
          <div className="product-description-header description-pane-opened">
            <button
              className="product-description-header-name-container"
              type="button"
            >
              <h2 className="product-description-header-name">DESCRIPTION</h2>
            </button>
          </div>
          <div className="product-description-pane-entry">
            <p>A refined car coat crafted in protective cotton gabardine.</p>
            <p>
              Invented by Thomas Burberry in 1879, cotton gabardine is a tightly
              woven and breathable fabric that protects against wind and rain.
            </p>
            <p>
              Raglan sleeves and a concealed button closure complement the clean
              tailored lines.
            </p>
            <p>The piece is finished with a distinctive check undercollar.</p>
            <br />
            <ul>
              <li>
                Coat length: 98cm/38.6in. This is based on a size UK 48 as
                proportions change slightly according to size.
              </li>
              <li>Outer: 100% cotton</li>
              <li>Check lining: 100% cotton</li>
              <li>Sleeve lining: 100% viscose</li>
              <li>Buttons: buffalo horn</li>
              <li>Specialist dry clean</li>
              <li>Made in Europe</li>
              <li>Item 39428531</li>
            </ul>
          </div>
        </div>
        <div className="product-description-pane product-accordeon-pane-shipping-and-returns">
          <div className="product-description-header description-pane-closed">
            <button
              className="product-description-header-name-container"
              type="button"
            >
              <h2 className="product-description-header-name">
                SHIPPING &amp; RETURNS
              </h2>
            </button>
          </div>
        </div>
      </div>

      <section className="delivery-container hidden-xs">
        <div className="row">
          <div className="col-md-7">
            <img
              className="delivery-image"
              src="img/bitmap5.jpg"
              srcset="img/bitmap5@2x.jpg 2x, img/bitmap5@3x.jpg 3x"
              alt="Product image"
            />
          </div>
          <div className="col-md-5">
            <h2 className="delivery-header">DELIVERY</h2>
            <h3 className="delivery-feature-name">Free Next Day Delivery</h3>
            <p className="delivery-feature-description">
              Order before 7pm Monday to Thursday for delivery the next day
            </p>
            <h3 className="delivery-feature-name">Collect-in-Store</h3>
            <p className="delivery-feature-description">
              Order online today and pick up your items in store as early as
              tomorrow
            </p>
            <h3 className="delivery-feature-name">Free Returns</h3>
            <p className="delivery-feature-description">
              Enjoy free returns on your order
            </p>
            <h3 className="delivery-feature-name">Free Gift Packaging</h3>
            <p className="delivery-feature-description">
              Discover our gift packaging, a gold lined box tied with a coloured
              ribbon
            </p>
          </div>
        </div>
      </section>

      <section className="product-recommended-container">
        <h2 className="product-recommended-header underlined">WE RECOMMEND</h2>
        <div className="product-recommended-list">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <a
                className="product-recommended-card"
                href="https://ru.burberry.com/embroidered-hooded-sweatshirt-p40580971"
              >
                <img
                  className="product-recommended-photo"
                  src="https://assets.burberry.com/is/image/Burberryltd/f51a470fc157e3014a115c64276c2e124d9fc477.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
                  alt="product-recommend-image-1"
                />
                <h3 className="product-recommended-name hidden-md">
                  Emroided Hooded
                </h3>
                <h3 className="product-recommended-name hidden-xs">
                  Emroided Hooded Content For Three Lines
                </h3>
                <h4 className="product-recommended-price">27 000 руб.</h4>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a
                className="product-recommended-card"
                href="https://ru.burberry.com/relaxed-fit-stretch-jeans-p40464661"
              >
                <img
                  className="product-recommended-photo"
                  src="https://assets.burberry.com/is/image/Burberryltd/eb872d02449c4050916c9eaf44e266bfdbd32304.jpg?$BBY_V2_ML_3X4$&hei=260&wid=195"
                  alt="product-recommend-image-2"
                />
                <h3 className="product-recommended-name hidden-md">
                  Relaxed Fit Stretch Jeans
                </h3>
                <h3 className="product-recommended-name hidden-xs">
                  Relaxed Fit Stretch Jeans Content For Three Lines
                </h3>
                <h4 className="product-recommended-price">22 500 руб.</h4>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a
                className="product-recommended-card"
                href="https://ru.burberry.com/leatherhouse-check-briefcase-p40396181"
              >
                <img
                  className="product-recommended-photo"
                  src="https://assets.burberry.com/is/image/Burberryltd/cfaeb1b3c79aeee09dfda4e26a9fb3f4525df542.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
                  alt="product-recommend-image-3"
                />
                <h3 className="product-recommended-name hidden-md">
                  Leather and House Check
                </h3>
                <h3 className="product-recommended-name hidden-xs">
                  Leather and House Check Content For Three Lines
                </h3>
                <h4 className="product-recommended-price">120 000 руб.</h4>
              </a>
            </div>
            <div className="col-xs-6 col-md-3">
              <a
                className="product-recommended-card"
                href="https://ru.burberry.com/leather-wingtip-brogues-p40381991"
              >
                <img
                  className="product-recommended-photo"
                  src="https://assets.burberry.com/is/image/Burberryltd/b33127f06e6c404cc3168645e099a9eb71aeca9c.jpg?$BBY_V2_SL_3X4$&hei=260&wid=195"
                  alt="product-recommend-image-4"
                />
                <h3 className="product-recommended-name hidden-md">
                  Leather Wingtip Check
                </h3>
                <h3 className="product-recommended-name hidden-xs">
                  Leather Wingtip Check Content For Three Lines
                </h3>
                <h4 className="product-recommended-price">46 000 руб.</h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="product-recommended-more-container hidden-md">
        <h2 className="product-recommended-more-header underlined">
          MORE FOR YOU
        </h2>
        <div className="product-recommended-more-list">
          <a
            className="product-recommended-more-item"
            href="https://ru.burberry.com/mens-trench-coats/black/"
          >
            Men’s Black Trench Coats
          </a>
          <a
            className="product-recommended-more-item"
            href="https://ru.burberry.com/mens-trench-coats/short/"
          >
            Men’s Short Trench Coats
          </a>
          <a
            className="product-recommended-more-item"
            href="https://ru.burberry.com/mens-trench-coats/long/"
          >
            Men’s Long Trench Coats
          </a>
        </div>
      </div>
    </main>
  );
};
