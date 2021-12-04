import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { editProduct } from '../action/posts';
import { extendCart } from '../action/cart';

function ProductOnly() {
  const params = useParams();
  const posts = useSelector((state) => state.posts);
  const index = posts.findIndex((prod) => prod.id === params.id);
  const [edit, setEdit] = useState(false);
  const [newDes, setNewDes] = useState('');
  const dispatch = useDispatch();
  const product = posts[index];
  const editDesDone = () => {
    setEdit(false);
    dispatch(editProduct(product.id, newDes));
  };
  const editDes = () => {
    setEdit(true);
  };
  const handleChange = (e) => {
    setNewDes(e.target.value);
  };

  const addToCartAction = () => {
    const newIteminCart = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      img: product.img,
      price: product.price,
      quantity: 1,
    };
    dispatch(extendCart(newIteminCart));
  };

  return (
    <div>
      <div className="cardPr">
        <div className="details">
          <div className="cardLeft">
            {product.img === 'null' ? (
              <img
                src="https://us.123rf.com/450wm/blankstock/blankstock1904/blankstock190400607/119982741-no-or-stop-attach-document-icon-information-file-sign-paper-page-concept-symbol-upload-data-prohibit.jpg?ver=6"
                alt="ProductPic"
              />
            ) : (
              <img src={product.img} alt="ProductPic" />
            )}
          </div>
          <div className="cardHead">
            <h2>{product.name}</h2>

            <span>
              Brand: {product.brand}
              <br></br>
            </span>
            <span>Price: {product.price}</span>
          </div>
        </div>

        <div className="cardDescription">
          <h3>Description:</h3>
          {edit ? (
            <input
              type="text"
              placeholder={product.description}
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <span>{product.description}</span>
          )}
        </div>
        <div className="cardPrAction">
          <button onClick={addToCartAction}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/e-commerce-46/64/x-07-512.png"
              alt="add-to-cart"
            />
          </button>
          {edit ? (
            <button className="buttonDes" onClick={() => editDesDone()}>
              Done
            </button>
          ) : (
            <button onClick={() => editDes()}>
              <img
                src="https://st2.depositphotos.com/8659352/45860/v/380/depositphotos_458607942-stock-illustration-pencil-logo-vector-symbol.jpg"
                alt="edit-logo"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductOnly;
