import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { sortPosts } from '../action/posts';
import fetchPosts from '../action/posts';

function Navto() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [sort, setSort] = useState(false);
  const handleSort = () => {
    if (!sort) {
      setSort(true);
      // dispatch(startSort());
      dispatch(sortPosts());
    } else {
      setSort(false);
      dispatch(fetchPosts());
    }
  };
  return (
    <div className="nav">
      <div className="navLeft">
        <div>
          <Link to="/">
            <img
              className="logo"
              src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="navAction">
          <Link to="/addProduct">
            <button>Add Product</button>
          </Link>
          <button onClick={handleSort}>{sort ? 'Sorted' : 'Sort'}</button>
        </div>
        <div>
          <Link to="/cart">
            <img
              className="cart"
              src="https://st2.depositphotos.com/3665639/7450/v/380/depositphotos_74500663-stock-illustration-pictograph-of-shopping-cart.jpg"
              alt="cart"
            />
          </Link>
          <div className="cartLength">{cart.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Navto;
