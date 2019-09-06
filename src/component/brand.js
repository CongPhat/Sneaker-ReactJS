import React, { Component } from 'react';
import './../scss/brand.scss';

class Brand extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return true
    else return false
  }

  render(){
    return (
      <section className='main'>
        <div className='container'>
          <div className='brand'>
            <div className='row'>
              <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 brand__item">
                <a href='/#'><img src='./../img/brand/1.png'alt=''/></a>
              </div>
               <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 brand__item">
                <a href='/#'><img src='./../img/brand/2.png'alt=''/></a>
              </div>
               <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 brand__item">
                <a href='/#'><img src='./../img/brand/3.png'alt=''/></a>
              </div>
               <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 brand__item">
                <a href='/#'><img src='./../img/brand/4.png'alt=''/></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Brand;