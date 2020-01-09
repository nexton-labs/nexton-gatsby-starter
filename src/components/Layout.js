import React, { Fragment, useEffect } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { ScrollingProvider } from 'react-scroll-section';
import theme from '../../theme';
import Helmet from './Helmet';

import { Flex, Box } from 'rebass';
import StaticHeader from './StaticHeader';
import Footer from './Footer';

import '../../assets/fonts/fonts.css';
import '../../assets/style.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: Gilroy, sans-serif;
    font-display: swap;
    overflow-x: hidden;
  }
`;

const loadScript = src => {
  const tag = document.createElement('script');
  tag.src = src;
  tag.defer = true;

  document.getElementsByTagName('body')[0].appendChild(tag);
};

const Layout = ({ children, selected }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ScrollingProvider>
          <Helmet />
          <Flex
            justifyContent="space-between"
            flexDirection="column"
            minHeight={'100vh'}
            height="100vh"
          >
            <Box>
              <StaticHeader selected={selected} />
            </Box>
            <Box>{children}</Box>
            <Box>
              <Footer />
            </Box>
          </Flex>
        </ScrollingProvider>
      </ThemeProvider>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
