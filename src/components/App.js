import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import fetchPosts from '../action/posts';
import { useSelector, useDispatch } from 'react-redux';
// import Home from '.';
import {
  Home,
  Navto,
  CreateProduct,
  Cart,
  Page404,
  ProductPage,
  Footer,
} from '.';

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <Router>
      <div className="App">
        <Navto />

        <Routes>
          <Route path="/shopKaro" element={<Home posts={posts} />} />
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/addProduct" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
