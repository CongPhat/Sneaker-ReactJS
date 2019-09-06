import React, { Component } from 'react';
// import './../scss/cart.scss';

class ItemsCart extends Component {
  removeProduct = () => {
    this.props.removeProduct(this.props.item.code)
  };

   render(){
    const { item } = this.props;
    return (
      <div className='cart__item'>
        <div className='cart__item--image'>
          <img src={item.imageP} alt=''/>
        </div>
        <div className='cart__item--info'>
          <h1>${item.price}.00</h1>
          <h2>{item.name}</h2>
          <span className="icon-bin" onClick={this.removeProduct}></span>
        </div>
      </div>
    );
  }
}

export default ItemsCart;
