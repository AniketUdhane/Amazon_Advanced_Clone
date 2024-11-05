import React from 'react';
// importing data.js file
import data from './data';
function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="h-brand" href="/">
            amazon advanced
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {
              // to write js code in react app
              data.products.map((product) => (
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    {/* setting url of this image to the product for specific id*/}
                    {/* <!-- image size : 680px by 830px--> */}
                    <img
                      className="medium"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                  <div className="card-body">
                    <a href={`/product/${product._id}`}>
                      <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div className="price">Rs. {product.price}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
      <footer className="row center">&copy; All rights reserved</footer>
    </div>
  );
}

export default App;
