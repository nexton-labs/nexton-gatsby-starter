import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const HeaderLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: ${props => props.theme.colors.primary};

  ${props => props.selected && `color:  ${props.theme.colors.secondary}`};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
  transition: 0.4s;

  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
`;

export default HeaderLink;
