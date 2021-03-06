import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseProduct from '../../Hook/UseProduct';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Order from '../Order/Order';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = UseProduct();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCard();
        const saveCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product =>product.id === id)
            if (addedProduct) {
                const quentity = storedCart[id]
                addedProduct.quantity = quentity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    }, [products])
    const addToCart = (product) => {
        let newCart = [];
        const exists = cart.find(selectedProduct => selectedProduct.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(selectedProduct => selectedProduct.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart([...cart, product])
        addToDb(product.id)
    }
    return (
        <div className='shop'>
            <div className='shop-container'>
                {
                products.map(product => <Product 
                    key={product.id} 
                    product={product}
                    addCart={addToCart}
                     ></Product>)
                }
            </div>
            <div className='order-container'>
             <Order cart={cart}>
                 <Link to={"/orders"}>
                     <button>Review Order</button>
                 </Link>
             </Order>
            </div>
        </div>
    );
};

export default Shop;