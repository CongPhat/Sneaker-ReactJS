import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from './menu.js';
import logo from './../img/logo.png';
import hamburger from './../img/hamburger.png';
import './../scss/menu.scss';

const menuSM = { menu: {top: '5%', animation: 'Menu 0.5s 1'}, nav: { width: '90%'}};
const menuFull = { menu: {top: '0%', animation: 'MenuFull 0.5s 1'}, nav: { width: '100%'}};

class MenuList extends Component {
  menuClick = () =>{
    let nav = document.querySelector('.navbarr__nav');
    nav.classList.toggle('visible');
  };

  openCart = () => {
    this.props.valueCart(true);
  };

  componentDidMount(){
    const menu = document.querySelector('.menu');
    menu.style = menuSM;
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }

  render(){
    const { menu, coorMenu, amountProduct } = this.props;
    let style = {};
    coorMenu === true ? style = menuSM 
    : style = menuFull
    return (
      <nav className='menu' style={style.menu}>
      	<div className='navbarr' style={style.nav}>
      		<div className="row">
            <div className="col-9 col-sm-9 col-md-3 col-lg-3 navbarr__logo">
              <img src={logo} alt='img' />
            </div>
            <div 
            className='col-3 col-sm-3 col-md-1 col-lg-1 navbarr__right'
            onClick={this.menuClick}
            >
              <div className='navbarr__hamburger'>
                <img src={hamburger} alt='img' />
              </div>
            </div>
	      		<ul className='col-12 col-sm-12 col-md-9 col-lg-9 navbarr__nav'>
	      			{menu.map( (item, index) => <Menu item={item} key={index}/> )}
              <li onClick={this.openCart}><a><span className="ti-bag"></span><span>[{amountProduct}]</span></a></li>
	      		</ul>
	      	</div>
      	</div>
      </nav>
    );
  }
}

MenuList.propTypes = {
  menu : PropTypes.arrayOf(PropTypes.string).isRequired,
  coorMenu : PropTypes.bool.isRequired,
  amountProduct: PropTypes.number.isRequired,
  valueCart: PropTypes.func
}

export default MenuList;
