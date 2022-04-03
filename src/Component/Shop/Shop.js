import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
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
        console.log(product);
        console.log(cart);
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
             <Order cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;