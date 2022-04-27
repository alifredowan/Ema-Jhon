import React from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../../Hook/UseCart';
import UseProduct from '../../Hook/UseProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProduct] = UseProduct();
    const [cart, setCart] = UseCart(products)
    const deleteProduct = product => {
        const deleteItem = cart.filter(pd => pd.id !== product.id)
        setCart(deleteItem)
        removeFromDb(product.id)
    }
    return (
        <div className='shop'>
            <div>
                {
                    cart.map(product => <ReviewItem
                    key={product.id}
                    cart={product}
                    deleteProduct={deleteProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='order-container'>
                <Order cart={cart}>
                <Link to={"/shipment"}><button>Proced Shipping</button></Link>
                </Order>
            </div>
        </div>
    );
};

export default Orders;