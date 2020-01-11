import React from 'react';
import ReactHelmet from 'react-helmet';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const title = `Gatsby Starter`;
const description = `A Gatsby Starter to bootstrap your project`;

const Helmet = ({ theme = {} }) => (
  <ReactHelmet htmlAttributes={{ lang: 'en' }}>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="shortcut icon" href="/favicon-32.png" />
    <meta name="theme-color" content={theme.background} />
    <meta name="image" content="/favicon-32.png" />
    <meta itemProp="name" content={title} />
    <meta itemProp="description" content={description} />
    <meta itemProp="image" content="/favicon-32.png" />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content="/favicon-android-192.png" />
    <meta name="og:site_name" content={title} />
    <meta name="og:locale" content="en_US" />
    <meta name="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/favicon-android-192.png" />
    <meta name="twitter:image:src" content="/favicon-android-192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon-apple.png" />
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    />
  </ReactHelmet>
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);
