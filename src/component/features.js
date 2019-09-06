import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../scss/features.scss';

class Features extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }

  render(){
    let { image, title, des } = this.props.item;
    return (
      <div className='features__item'>
        <div className='features__image'>
          <img src={image} alt=''/>
        </div>
        <h6>{title}</h6>
        <p>{des}</p>
      </div>
    );
  }
}


Features.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    des: PropTypes.string
  })
}

export default Features;
