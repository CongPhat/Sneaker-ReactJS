import React, { Component } from 'react';
import Banner from './component/banner';
import MenuList from './component/menulist';
import Features from './component/features';
import Category from './component/category';
import ProductList from './component/productlist';
import Cart from './component/cart';
import Brand from './component/brand';
import Deal from './component/deal';
import Footer from './component/footer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      menu: ['HOME', 'SHOP', 'BLOG', 'PAGES', 'CONTACT'],
      features: [
        {image : './../img/features/f-icon1.png', title: 'Free Delivery', des: 'Free Shipping on all order'},
        {image : './../img/features/f-icon2.png', title: 'Return Policy', des: 'Free Shipping on all order'},
        {image : './../img/features/f-icon3.png', title: '24/7 Support', des: 'Free Shipping on all order'},
        {image : './../img/features/f-icon4.png', title: 'Secure Payment', des: 'Free Shipping on all order'}
      ],
      category: [
        {image: './../img/category/c1.jpg'},
        {image: './../img/category/c2.jpg'},
        {image: './../img/category/c3.jpg'},
        {image: './../img/category/c4.jpg'},
        {image: './../img/category/c5.jpg'}
      ],
      products : [
        {id: 1, status: true, title: 'Latest Products', productlist: [
          {idP: 11, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p1.jpg'},
          {idP: 12, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p2.jpg'},
          {idP: 13, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p3.jpg'},
          {idP: 14, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p4.jpg'},
          {idP: 15, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p5.jpg'},
          {idP: 16, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p6.jpg'},
          {idP: 17, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p7.jpg'},
          {idP: 18, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p8.jpg'}
        ]},
        {id: 2, status: false, title: 'Coming Products', productlist: [
          {idP: 19, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p8.jpg'},
          {idP: 20, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p7.jpg'},
          {idP: 21, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p6.jpg'},
          {idP: 22, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p5.jpg'},
          {idP: 23, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p4.jpg'},
          {idP: 24, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p3.jpg'},
          {idP: 25, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p2.jpg'},
          {idP: 26, name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON', price: 150.00 ,imageP: './../img/product/p1.jpg'}
        ]}
      ],
      coorMenu: true,
      cart: [],
      toggleCart: false,
    }
  }

  ScrollMenu = ()=>{
    window.pageYOffset > 10 ? this.setState({coorMenu: false}) : this.setState({coorMenu: true});
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('scroll', this.ScrollMenu)
    if(localStorage.getItem('cart') != null){
      let originalCart = JSON.parse(localStorage.getItem('cart'))
      this.setState({cart: originalCart})
    }
  };

  getId = (id) => {
    let { products } = this.state;
    for(var item of products){
      if(item.id === id){item.status = false}
      else item.status = true
    }
    this.setState({products});
  };

  receiveProductAddToCart = (idProductAddToCart) => {
    let { products } = this.state;
    let productAddToCart;
    for( var itemP of products){
      for (var itemPList of itemP.productlist){
        if(itemPList.idP === idProductAddToCart){
          let code = Math.random();
          productAddToCart = {code, ...itemPList}
        }
      }
    }
    this.setState({cart: [...this.state.cart, productAddToCart]});
    setTimeout( () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    },2000)
  };

  valueCart = (value) => {
    this.setState({toggleCart: value})
  };

  removeProduct = (code) => {
    const { cart } = this.state;
    let newCart = cart.filter( (item) => {return item.code !== code})
    this.setState({cart: newCart});
    setTimeout( () => {
      localStorage.setItem('cart', JSON.stringify(this.state.cart))
    },2000)
  };

  render(){
    const { menu, features, category, products, coorMenu, cart, toggleCart } = this.state;
    return (
      <div className='App'>
        <Banner/>
        <MenuList menu={menu} coorMenu={coorMenu} amountProduct={cart.length} valueCart={this.valueCart}/>
        <Cart 
        cart={cart} 
        toggleCart={toggleCart} 
        valueCart={this.valueCart} 
        removeProduct={this.removeProduct}
        />
        <section className='main'>
          <div className='container'>
            <div className='features'>
               { features.map( (item, index)=> <Features item={item} key={index}/> )}
            </div>
          </div>
        </section>
        <Category images={category}/>
        { products.map( (item, index)=> item.status && <ProductList 
          item={item} 
          key={index} 
          getId={this.getId}
          receiveP={this.receiveProductAddToCart}
          />)}
        <Brand />
        <Deal />
        <Footer />
      </div>
    );
  }
}

export default App;
