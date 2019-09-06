import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemsCart from './itemscart';
import './../scss/cart.scss';

class Cart extends Component {

  closeCart = () => {
    this.props.valueCart(false)
  };

  removeProduct = (code) => {
    this.props.removeProduct(code);
  };  

  componentDidMount(){
    const cart1 = document.querySelector('.cart');
    cart1.style.display = 'none';
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    const { toggleCart } = nextProps;

  }

  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }

   render(){
    const { cart, toggleCart } = this.props;
    let open;
    toggleCart === true ? open = {display: 'block', animation: 'OpenCart 1s 1'} : open = { transform: 'translateX(-100%)', animation: 'CloseCart 1s 1', boxShadow: 'none'}
    let total = cart.reduce( (total, item) => {return total + item.price},0);
    return (
      <section className='cart' style={open}>
        <div className='cart__title'>
          <h1>My Cart, </h1>
          <h2>{cart.length} item</h2>
          <span className="icon-cross" onClick={this.closeCart}></span>
        </div>
        <div className='cart__allitem'>
          {cart.map( (item, index) => <ItemsCart item={item} key={index} removeProduct={this.removeProduct}/>)}
        </div>
        <div className='cart__total'>
          <h2>Total: </h2>
          <h3>${total}.00</h3>
        </div>
        <div className='cart__checkout'>
          <button type='submit'>
            CHECKOUT
          </button>
        </div>
      </section>
    );
  }
}

Cart.propsTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      idP : PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      imageP: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleCart: PropTypes.bool.isRequired,
  valueCart: PropTypes.func,
  initialCart: PropTypes.number.isRequired,
  removeProduct: PropTypes.func
}

export default Cart;
