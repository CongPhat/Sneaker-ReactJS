import React, { Component } from 'react';
import './../scss/deal.scss';

class Deal extends Component {
  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }

  render(){
    return (
      <section className='main'>
        <div className='container'>
          <div className='deal'>
            <div className='deal__title'>
              <h1>Deals of the Week</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='row'>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r1.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r2.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r3.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r4.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r5.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r6.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r6.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r7.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r8.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r9.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r10.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
              <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-4 deal__item">
                <div className='deal__item--image'>
                  <img src='./../img/r11.jpg' alt=''/>
                </div>
                <div className='deal__item--info'>
                  <h1>BLACK LACE HEELS</h1>
                  <h2>$189.00</h2>
                  <h2>$210.00</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Deal;