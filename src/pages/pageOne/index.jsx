import React from 'react';
import ParallaxView from 'components/ParallaxView';

import './styles/index.less';

const PageOne = () => {
  return (
    <div className='p-one'>
      <section className='content'>
        <ParallaxView />
      </section>
    </div>
  );
};

export default PageOne;
