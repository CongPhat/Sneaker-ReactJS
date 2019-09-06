import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../scss/category.scss';

class Category extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }

  render(){
    let { images } = this.props;
    return (
      <section className='main'>
        <div className='container'>
          <div className='category'>
            <div className='row justify-content-center'>
              <div className="col-md-12 col-lg-8 category--left">
                <div className='row'>
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 category--left__item">
                    <img src={images[0].image} alt=''/>
                    <div className='category__title'>
                      <h4>Sneaker for Sports</h4>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 category--left__item">
                    <img src={images[1].image} alt=''/>
                    <div className='category__title'>
                      <h4>Sneaker for Sports</h4>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 category--left__item">
                    <img src={images[2].image} alt=''/>
                    <div className='category__title'>
                      <h4>Sneaker for Sports</h4>
                    </div>
                  </div>
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 category--left__item">
                    <img src={images[3].image} alt=''/>
                    <div className='category__title'>
                      <h4>Sneaker for Sports</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 category--right">
                <img src={images[4].image} alt=''/>
                 <div className='category__title'>
                    <h4>Sneaker for Sports</h4>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Category.propTypes = {
  images : PropTypes.arrayOf(
    PropTypes.shape({image: PropTypes.string})
  ).isRequired
}

export default Category;
