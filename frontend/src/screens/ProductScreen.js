import React from 'react';
import data from '../data';
import Rating from '../components/Rating';
import { Link, useParams } from 'react-router-dom';
export default function ProductScreen(props) {
  // const { image } = props;
  const { id } = useParams();
  const product = data.products.find((x) => x._id === id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div>
      <Link to="/"> back </Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </li>
            <li>Price: ${product.price}</li>
            <li>
              Description: <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1 temp">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status: </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add to cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
