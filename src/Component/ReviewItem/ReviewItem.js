import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./ReviewItem.css"
const ReviewItem = props => {
    const {deleteProduct, cart} = props
    const {name, price, shipping, img, quantity} = cart;
    return (
        <div  className='review-container'>
            <div>
            <img src={img} alt=""/>
            </div>
            <div className='reviewItem'>
            <div>
                <p title={name}>Name: {name.length > 20 ? name.slice(0, 25)+ "..." : name}</p>
                <p>Price: {price}</p>
                <p>Shipping: {shipping}</p>
                <p>Quantity: {quantity}</p>
            </div>
            <div>
                <button className='delete-btn' onClick={()=> deleteProduct(cart)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
            </div>
            </div>
    );
};

export default ReviewItem;