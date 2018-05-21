// @flow
import React, { PureComponent, createRef } from 'react';
import balanceText from 'balance-text';

type Props = {
  children: string,
  wrapper: string,
  className: string,
};

class BalancedText extends PureComponent<Props, *> {
  static defaultProps = {
    wrapper: 'p',
    className: '',
  };

  ref = createRef();

  componentDidMount() {
    window.addEventListener('resize', this.updateRef);
  }

  componentDidUpdate() {
    this.updateRef();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRef);
  }

  updateRef = () => {
    if (this.ref.current) balanceText(this.ref.current);
  };

  render() {
    const { wrapper: Wrapper, className, children } = this.props;
    return (
      <Wrapper
        className={className}
        style={{ textWrap: 'balance' }}
        ref={this.ref}
      >
        {children}
      </Wrapper>
    );
  }
}

export { BalancedText as default };
