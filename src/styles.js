// @flow
import { injectGlobal } from 'styled-components';
import { normalize, rgba, modularScale } from 'polished';

const font = {
  family: '"Work Sans", sans-serif',
  size: {
    title: modularScale(5),
    body: modularScale(1),
  },
  weight: {
    normal: 400,
    semiBold: 600,
  },
};

const lineHeight = {
  title: 1,
  body: 1.5,
};

const color = {
  background: rgba(252, 240, 239, 1),
  text: rgba(228, 73, 59, 1),
};

const globalStyles = () => {
  // eslint-disable-next-line
  injectGlobal`
    ${normalize()};

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    body {
      width: 320px;
      height: 568px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
    }
  `;
};

export { font, color, lineHeight, globalStyles };
