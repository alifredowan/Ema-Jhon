import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
const Product = (props) => {
    const {name, img, seller, price, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt=''/>
            <div className='product-info'>
            <h5>{name}</h5>
            <p>Price: {price}৳</p>
            <p>Seller: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => props.addCart(props.product)} className='btn-cart'><p>Add To Cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
