import React from 'react';

import SignInSignUp from '../../components/sign-in-sign-up/sign-in-sign-up.component';

import './home-page.styles.scss';

class HomePage extends React.Component{
  render(){
    return(
      <div className='homepage'>
        <div className='cover'>
          <span className='logo'>Black<br/>Market</span>
        </div>
        <div className='form'>
          <SignInSignUp/>
        </div>
      </div>
    )
  }
}

export default HomePage;
