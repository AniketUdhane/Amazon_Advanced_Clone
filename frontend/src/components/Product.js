import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        {/* setting url of this image to the product for specific id*/}
        {/* <!-- image size : 680px by 830px--> */}
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">$ {product.price}</div>
      </div>
    </div>
  );
}
