import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './style/index.less';

class Button extends React.PureComponent {
  static defaultProps = {
    prefixCls: 'yxy-button',
    onClick: null,
    children: null
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }

  handleMouseMove = e => {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const btn = this.buttonRef.current;
    btn.style.setProperty('--x', `${x}px`);
    btn.style.setProperty('--y', `${y}px`);
  };

  render() {
    const { prefixCls, children, onClick } = this.props;
    return (
      <button
        type='button'
        className={cls(prefixCls)}
        onClick={onClick}
        onKeyDown={() => {}}
        onMouseMove={this.handleMouseMove}
        ref={this.buttonRef}
      >
        <span>{children}</span>
      </button>
    );
  }
}

export default Button;
