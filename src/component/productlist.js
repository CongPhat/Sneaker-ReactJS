import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Products from './products';
import './../scss/productlist.scss';

class ProductList extends Component {

  Move = () => {
    this.props.getId(this.props.item.id);
  };

  receiveP = (idProductAddToCart) => {
    this.props.receiveP(idProductAddToCart);
  };

  render(){
    let { item } = this.props;
    return (
      <section className='main'>
        <div className='container'>
          <div className='product'>
            <div className='product__title'>
              <div className='product__title--move' onClick={this.Move}>
                <img src='./../img/product/prev.png' alt=''/>
              </div>
              <div className='product__title--main'>
                <h1>{item.title}</h1>
              </div>
              <div className='product__title--move' onClick={this.Move}>
                <img src='./../img/product/next.png' alt=''/>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
               tempor incididunt ut labore et
                dolore
                magna aliqua.</p>
            <div className='row'>
              {item.productlist.map( (item, index) => <Products 
                item={item} 
                key={index} 
                receiveP={this.receiveP}/>)}
            </div>
          </div>
        </div>
      </section>
    );
  }
}


ProductList.propTypes = {
  item : PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    productlist: PropTypes.arrayOf(
      PropTypes.shape({
        idP : PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired, 
        imageP: PropTypes.string.isRequired
      })
    ).isRequired
  }),
  getId : PropTypes.func.isRequired,
  receiveP: PropTypes.func.isRequired
}

export default ProductList;
