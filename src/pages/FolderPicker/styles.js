// @flow
import styled from 'styled-components';
import { font, color, lineHeight } from '../../styles';
import BalancedText from '../../components/BalancedText';

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  border-top: 2px solid ${color.text};
  padding: 2rem 1rem;
  background-color: ${color.background};
`;

const Header = styled.header``;

const Title = styled.h1`
  margin: 0;
  font-family: ${font.family};
  font-size: ${font.size.title};
  font-weight: ${font.weight.semiBold};
  line-height: ${lineHeight.title};
  color: ${color.text};
`;

const Description = styled(BalancedText)`
  width: 100%;
  font-family: ${font.family};
  font-size: ${font.size.body};
  font-weight: ${font.weight.normal};
  line-height: ${lineHeight.body};
  color: ${color.text};
`;

const FolderList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: ${font.family};
  font-size: ${font.size.body};
  font-weight: ${font.weight.semiBold};
  line-height: ${lineHeight.body};
  color: ${color.text};
`;

const FolderListItem = styled.li`
  display: flex;
`;

const FolderButton = styled.button`
  flex: 1;
  margin: 0;
  border: none;
  padding: 0.5rem 0;
  font-family: ${font.family};
  font-size: 1em;
  font-weight: ${font.weight.semiBold};
  text-align: left;
  color: ${color.text};
  background: transparent;
  user-select: none;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '|>';
    display: inline-block;
    margin-right: 0.5em;
  }

  &:hover::before,
  &:focus::before {
    transform: translateX(30%);
  }
`;

export {
  Container,
  Header,
  Title,
  Description,
  FolderList,
  FolderListItem,
  FolderButton,
};
