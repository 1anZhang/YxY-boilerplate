import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '../avatar.jpg';
import Button from '../components/Button';
import { add, minus } from '../actions';
import '../style.less';

const DynamicButton = lazy(() => import('../components/Button'));

const App = ({ count, onAdd, onMinus }) => {
  return (
    <div className='app'>
      <img src={Avatar} alt='1' />
      <p>
        We are a most promising species, Mr.Spock, as predators go.Did you know that ? I frequently
        have my doubts.I dont.Not any more.And maybe in a thousand years or so, we will be able to
        prove it.
      </p>
      <p> -Captain Kirk </p>
      <p>{`当前计数器：${count}`}</p>
      <Button onClick={onAdd}> ➕ </Button>
      <Suspense fallback={<div> loading... </div>}>
        <DynamicButton onClick={onMinus}> ➖ </DynamicButton>
      </Suspense>
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
      dispatch(add());
    },
    onMinus: () => {
      dispatch(minus());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
