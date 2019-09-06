import React, { Component } from 'react';
import './../scss/footer.scss';

class Footer extends Component {
  showEmail = () =>{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = this.refs.email.value;
    re.test(email) ? alert(`Thank you for registering. We will notify via email: ${email}`)
    : alert('You have entered the wrong email format. Please enter again!');
  };

  changingEmail = (event) =>{
    // console.log(event.target.value);
  };
  
  shouldComponentUpdate(nextProps) {
    if(nextProps === this.props) return false
    else return true
  }

  render(){
    return (
      <footer>
        <div className='container'>
          <div className='ftmain'>
            <div className='row justify-content-center'>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 ftmain__item">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 ftmain__item">
                <h1>Newsletter</h1>
                <p>Stay update with our latest</p>
                <div className='ftmain__item--email'>
                  <input placeholder='Enter Email' type='text' ref='email' onChange={this.changingEmail}/>
                  <button type='submit' onClick={this.showEmail}>Enter</button>
                </div>
              </div>
              <div className="col-xs-5 col-sm-7 col-md-5 col-lg-3 ftmain__item">
                <h1>Instragram Feed</h1>
                <div className='ftmain__ins'>
                  <div className='row'>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i1.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i2.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i3.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i4.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i5.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i6.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i7.jpg' alt=''/>
                    </div>
                    <div className="col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 ftmain__ins--image">
                        <img src='./../img/i8.jpg' alt=''/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2 ftmain__item">
                <h1>Follow Us</h1>
                <p>Let us be social</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;