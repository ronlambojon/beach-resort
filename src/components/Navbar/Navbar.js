import React from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';

import logo from '../../images/logo.svg';

class Navbar extends React.Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    const { isOpen } = this.state;

    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <Link to='/'>
                <img src={logo} alt='Beach Resort'/>
              </Link>
              <button className='nav-btn' 
                type='button'
                onClick={this.handleToggle}
              >
                <FaAlignRight className='nav-icon'/>
              </button>
            </div>
            <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/rooms'>Rooms</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;