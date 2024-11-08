import React, { useEffect, useState } from 'react';
// import data from '../    data'; // here we put .. to go back in files and locate data file properly
import axios from 'axios';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

export default function HomeScreen() {
  //hook state
  // here is the usage of react hook to manage the state of your react component
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // useEffect is another hook that happens when your component did mounts to your web page
  // i mean after rendering your component your function  will run
  // accept two parameters function and array
  useEffect(() => {
    // send ajax req and fetch products
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products'); // array in backend will be transfer to data
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {
            // to write js code in react app
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          }
        </div>
      )}
    </div>
  );
}
