import React, { Component } from 'react';
// import './../scss/products.scss';

class Products extends Component {

  addProduct = () => {
    this.props.receiveP(this.props.item.idP)
  }

  render(){
    const { imageP, idP, name, price } = this.props.item;
    return (
      <div className="col-sm-6 col-md-6 col-lg-3 product__item">
        <div className='product__item__image'>
          <img src={imageP} alt=''/>
        </div>
        <div className='product__item__info'>
          <h3>{name}</h3>
          <h4>${price}.00</h4>
        </div>
        <div className='product__item__social'>
          <div className='add' onClick={this.addProduct}>
            <span className="ti-bag"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
