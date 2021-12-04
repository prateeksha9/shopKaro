import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductId, editProduct } from '../action/posts';
import { extendCart } from '../action/cart';
import { Link } from 'react-router-dom';

function Post(props) {
  const { name, brand, description, img, price, id } = props.post;
  const [edit, setEdit] = useState(false);
  const [newDes, setNewDes] = useState('');
  // const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartAction = () => {
    const newIteminCart = {
      id: id,
      name: name,
      brand: brand,
      img: img,
      price: price,
      quantity: 1,
    };
    dispatch(extendCart(newIteminCart));
  };

  const editDesDone = () => {
    setEdit(false);
    dispatch(editProduct(id, newDes));
  };
  const editDes = () => {
    setEdit(true);
  };
  const handleChange = (e) => {
    setNewDes(e.target.value);
  };
  const handleDelete = () => {
    dispatch(deleteProductId(id));
  };

  return (
    <div>
      <div className="card">
        <div className="details">
          <div className="cardLeft">
            {img === 'null' ? (
              <img
                src="https://us.123rf.com/450wm/blankstock/blankstock1904/blankstock190400607/119982741-no-or-stop-attach-document-icon-information-file-sign-paper-page-concept-symbol-upload-data-prohibit.jpg?ver=6"
                alt="ProductPic"
              />
            ) : (
              <img src={img} alt="ProductPic" />
            )}
          </div>
          <div className="cardHead">
            <Link to={`/product/${id}`}>
              <h2>{name}</h2>
            </Link>

            <span>
              Brand: {brand}
              <br></br>
            </span>
            <span>Price: {price}</span>
          </div>
        </div>

        <div className="cardDescription">
          <h3>Description:</h3>
          {edit ? (
            <input
              type="text"
              placeholder={description}
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <span>{description}</span>
          )}
        </div>
        <div className="cardAction">
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

          <button onClick={() => handleDelete()}>
            <img
              src="https://w7.pngwing.com/pngs/228/54/png-transparent-logo-trademark-brand-delete-button-miscellaneous-text-trademark.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
