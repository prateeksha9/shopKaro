import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, reduceCart, decreaseQuantity } from '../action/cart';

function CartItem(props) {
  // get all the required properties from props
  const { name, brand, img, price, id } = props.item;

  // useDispatch is used to call actions on various events
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(reduceCart(id));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id));
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
            <h2>{name}</h2>
            <span>
              Brand: {brand}
              <br></br>
            </span>
            <span>
              Quantity: {props.item.quantity}
              <br></br>
            </span>
            <span>Price: {price}</span>
          </div>
        </div>
        <div className="cardAction">
          <button onClick={() => handleIncrease()}>
            <img
              src="https://banner2.cleanpng.com/20180409/gye/kisspng-computer-icons-symbol-icon-design-google-plus-5acb0027158c40.8641644415232532870883.jpg"
              alt="increase"
            />
          </button>
          <button onClick={() => handleDecrease()}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c2ctrlI2DuGydazN6VxYqJhKhxGDNLGE5sDZ0IOBk1gBepiaLaxhZNPZkdHieZKW5S4&usqp=CAU"
              alt="decrease"
            />
          </button>
          <button onClick={() => handleRemoveFromCart()}>
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

export default CartItem;
