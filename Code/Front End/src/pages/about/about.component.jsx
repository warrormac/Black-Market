import React from 'react';
import SidePanel from '../../components/side-panel/side-panel.component';

import UserHeader from '../../components/user-header/user-header.component';

import './about.styles.scss';

const About = () => {
    return(
      <div className='about'>
        <UserHeader/>
        <div className="main-content">
            <SidePanel/>
            <div className="about-content">
              <h1>¡Internet se hizo para compartir!</h1>
              <p>Somos un portal web que comercializa productos digitales a un costo accesible. Nosotros como empresa tenemos autorización de los autores para comercializar sus obras. Puedes encontrar lo que más te hace feliz. Happy downloading :)</p>
            </div>
        </div>
      </div>
    )
}

export default About;
