import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        console.log(product);
        setCart([...cart, product])
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
             <Order cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;