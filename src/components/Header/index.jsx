import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.less';
import LogoImg from '../../images/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className='content'>
        <div className='logo'>
          <Link to='/'>
            <img src={LogoImg} alt='' />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/one'>第一页</Link>
            </li>
            <li>
              <Link to='/two'>第二页</Link>
            </li>
            <li>
              <Link to='/three'>第三页</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
