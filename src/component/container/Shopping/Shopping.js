import React, { Component } from 'react';
import Controls from '../../Controls/Controls';
import Modal from '../../shared/Modal/Modal';
import productContext from '../../../context/product-context';


const prices = {
    product1: 59,
    product2: 89,
    product3: 100,
    product4: 35,
    product5: 70,
}

class Shopping extends Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
            product5: 0,
        },
        totalPrice: 0
    }
    addProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updateCount = prevCount + 1;
        const updateProducts = {
            ...this.state.products
        };
        updateProducts[type] = updateCount;
        const priceAdd = prices[type];
        const prevPrice = this.state.totalPrice;
        const updateTotalPrice = prevPrice + priceAdd;
        this.setState({ products: updateProducts, totalPrice: updateTotalPrice })
        console.log('this happend')


    }
    removeHandler = (type) => {
        const prevCount = this.state.products[type];
        const updateCount = (prevCount === 0) ? 0 : prevCount - 1;
        const updateProducts = { ...this.state.products };
        updateProducts[type] = updateCount;
        const removeprice = prices[type];
        const prevPrice = this.state.totalPrice;
        const updateTotalPrice = (prevPrice === 0) ? 0 : prevPrice - removeprice;
        this.setState({ products: updateCount, totalPrice: updateTotalPrice });
        console.log('remove action happen')


    }
    render() {
        return (
            <productContext.Provider
                value={{
                    productAdd: this.addProductHandler,
                    productRemove: this.removeHandler
                }} >
                
                <Controls price={this.state.totalPrice} />
                <Modal />

            </productContext.Provider>

        );
    }
}

export default Shopping;
