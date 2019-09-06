import React, { Component } from 'react';
import './../scss/banner.scss';

class Banner extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }
  
  render(){
    return(
      <header>
      	<div className='container'>
      		<div className="row">
      			<div className="col-md-6 col-lg-5 infor">
      				<h1>Nike New <br/> Collection!</h1>
      				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
      				sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation</span>
      			</div>
      			<div className="col-md-6 col-lg-7 image">
      			</div>
      		</div>
      	</div>
      </header>
    );
  }
}

export default Banner;
