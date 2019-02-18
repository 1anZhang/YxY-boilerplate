import React from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import './styles/index.less';
import defaultImg from '../../images/avatar.jpg';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card3D = ({ imgSrc }) => {
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <animated.div
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: springProps.xys.interpolate(trans) }}
    >
      <img src={imgSrc} alt='' />
    </animated.div>
  );
};

Card3D.propTypes = {
  imgSrc: PropTypes.string
};

Card3D.defaultProps = {
  imgSrc: defaultImg
};

export default Card3D;
