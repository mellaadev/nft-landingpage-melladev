import React from 'react'
import Layout from './components/Layout';
import Hero from './components/Hero';
import Upsell from './components/Upsell';
import Brands from './components/Brands';
import Auction from './components/Auction';
import Release from './components/Release';
import CardOther from './components/CardOther';
import LastNFT from './components/LastNFT';

function App() {
  return (
    <Layout>
      <Hero />
      <Upsell />
      <Brands />
      <Auction />
      <Release />
      <CardOther />
      <LastNFT />
    </Layout>
  );
}

export default App;
