import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '../../images/avatar.jpg';
import Button from '../../components/Button';

import './styles/index.less';

const DynamicButton = lazy(() => import('../../components/Button'));

const App = ({ count, onAdd, onMinus }) => {
  return (
    <div className='p-index'>
      <div className='counter'>
        <p>{`${count} 鸭饮酒醉`}</p>
        <div>
          <Button onClick={onAdd}> +1 </Button>
          <Suspense fallback={<div> loading... </div>}>
            <DynamicButton onClick={onMinus}> -1 </DynamicButton>
          </Suspense>
        </div>
      </div>
      <img className='duck-pic' src={Avatar} alt='1' />
    </div>
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onMinus: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => {
      dispatch({ type: 'ADD_ASYNC' });
    },
    onMinus: () => {
      dispatch({ type: 'MINUS_ASYNC' });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
