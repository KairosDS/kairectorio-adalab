import React from 'react';
import './Footer.scss';

class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
        <p className="main__footer--masinfo">Si necesitas contactar con los Heads de la capacidad puedes escribir a 
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gestion.desarrollo@kairosds.com"> gestion.desarrollo@kairosds.com
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;