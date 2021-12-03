import React from 'react';
import { useSelector } from 'react-redux';

function ProductPage(props) {
  const posts = useSelector((state) => state.posts);
  return <div> Product page</div>;
}

export default ProductPage;
