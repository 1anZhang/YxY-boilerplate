import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Index from '../pages/index';
import pageOne from '../pages/pageOne';
import pageTwo from '../pages/pageTwo';
import pageThree from '../pages/pageThree';

import './styles/normalize.less';
import './styles/style.less';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/one' component={pageOne} />
          <Route exact path='/two' component={pageTwo} />
          <Route exact path='/three' component={pageThree} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
