// @flow
import styled, { css, keyframes } from 'styled-components';
import type { ComponentType } from 'react';
import { color } from '../../styles';

const AppContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  border-top: 2px solid ${color.text};
  background-color: ${color.background};
`;

const slideSectionIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
    visibility: visible;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideSectionOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  99% {
    transform: translateX(-100%);
  }


  100% {
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
  }
`;

const SectionContainer: ComponentType<{ active: boolean }> = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;

  transform: translateX(100%);
  animation-duration: 0.5s;
  animation-fill-mode: both;

  ${p =>
    !p.active &&
    css`
      animation-name: ${slideSectionOut};
    `};

  ${p =>
    p.active &&
    css`
      animation-name: ${slideSectionIn};
    `};
`;

export { AppContainer, SectionContainer };
