import React, { Component } from 'react';
import './../scss/menu.scss';

class Menu extends Component {
	shouldComponentUpdate(nextProps) {
    	if(nextProps === this.props) return false
    	else return true
  	}

  render(){
    let { item } = this.props;
    return (
      <li><a href="/#">{item}</a></li>
    );
  }
}

export default Menu;
