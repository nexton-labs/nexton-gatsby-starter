import React from 'react';
import Layout from '../components/Layout';
import { Flex, Box, Image } from 'rebass';

const IndexPage = () => (
  <Layout>
    <Flex alignItems="center" flexDirection="column" my={[5, 6]} mx={[5, 6]}>
      <h1>404</h1>
    </Flex>
  </Layout>
);

export default IndexPage;
