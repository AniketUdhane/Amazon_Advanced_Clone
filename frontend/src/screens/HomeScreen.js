import React from 'react';
import data from '../data'; // here we put .. to go back in files and locate data file properly
import Product from '../components/Product';

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {
          // to write js code in react app
          data.products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
        }
      </div>
    </div>
  );
}
