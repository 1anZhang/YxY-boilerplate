import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from 'images/avatar.jpg';
import Button from 'components/Button';
import Card3D from 'components/Card3D';

import './styles/index';

const DynamicButton = lazy(() => import('components/Button'));

const App = ({ count, addByOne, addByOneAsync, minusByOne }) => {
  return (
    <div className='p-index'>
      <div className='pic-duck'>
        <Card3D imgSrc={Avatar} />
      </div>
      <div className='counter'>
        <p>{`${count} 鸭饮酒醉`}</p>
        <div>
          <Button onClick={addByOne}> +1 </Button>
          <Button onClick={addByOneAsync}> +1 async</Button>
          <Suspense fallback={<div> loading... </div>}>
            <DynamicButton onClick={minusByOne}> -1 </DynamicButton>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  addByOne: PropTypes.func.isRequired,
  minusByOne: PropTypes.func.isRequired,
  addByOneAsync: PropTypes.func.isRequired
};

const mapState = state => ({
  count: state.count
});

const mapDispatch = ({ count: { addBy, addByAsync } }) => ({
  addByOne: () => addBy(1),
  minusByOne: () => addBy(-1),
  addByOneAsync: () => addByAsync(1)
});

export default connect(
  mapState,
  mapDispatch
)(App);
