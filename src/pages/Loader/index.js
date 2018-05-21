// @flow
import React, { PureComponent } from 'react';
import { SectionContainer } from '../../components/Container';

type Props = {
  active: boolean,
};

type State = {
  showLoader: boolean,
};

class Loader extends PureComponent<Props, State> {
  state = {
    showLoader: false,
  };

  timeoutID: ?TimeoutID = null;

  componentDidMount() {
    this.startTimeout();
  }

  componentWillUnmount() {
    this.stopTimeout(true);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.active !== this.props.active) {
      if (this.props.active) {
        this.startTimeout();
      } else {
        this.stopTimeout();
      }
    }
  }

  startTimeout = () => {
    this.stopTimeout();
    this.timeoutID = setTimeout(
      () => this.setState(() => ({ showLoader: true })),
      500,
    );
  };

  stopTimeout = (skipSetState: boolean = false) => {
    if (this.timeoutID) {
      if (!skipSetState) this.setState(() => ({ showLoader: false }));
      clearTimeout(this.timeoutID);
    }
  };

  render() {
    const { active } = this.props;
    const { showLoader } = this.state;
    return (
      <SectionContainer active={active}>
        <p
          style={{
            opacity: showLoader ? 1 : 0,
            visibility: showLoader ? 'visible' : 'hidden',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          Loading
        </p>
      </SectionContainer>
    );
  }
}

export { Loader as default };
