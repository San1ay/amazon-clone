import React from "react";
import Product from "./Product";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src="./home_banner.jpg" alt="" />
        <div className="home__row">
          <Product
            id="14241"
            title="Dove Daily Shampoo"
            image="https://m.media-amazon.com/images/I/41NTn+CDU5L._SL1000_.jpg"
            price={199}
            rating={3}
          />{" "}
          <Product
            id="14243"
            title="Power Strip"
            image="https://m.media-amazon.com/images/I/519RgXY+lRL._SL1500_.jpg"
            price={399}
            rating={4}
          />
        </div>{" "}
        <div className="home__row">
          <Product
            id="14233"
            title="ASUS TUF Laptop"
            image="https://m.media-amazon.com/images/I/91zVSkGGZbS._SL1500_.jpg"
            price={49899}
            rating={4}
          />
          <Product
            id="18243"
            title="Mi Beard Trimmer"
            image="https://m.media-amazon.com/images/I/61ApUe3q-PL._SL1500_.jpg"
            price={1299}
            rating={4}
          />
          <Product
            id="14043"
            title="BATA Men Formal Shoe"
            image="https://m.media-amazon.com/images/I/61wt+7fDyuL._UL1500_.jpg"
            price={740}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="44243"
            title="Mi Notebook Pro"
            image="https://m.media-amazon.com/images/I/71iiXU7HHkL._SL1500_.jpg"
            price={(57, 999)}
            rating={4}
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
}
