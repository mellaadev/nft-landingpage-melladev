import React from 'react'
import Layout from './components/Layout';
import Hero from './components/Hero';
import Upsell from './components/Upsell';
import Brands from './components/Brands';
import Auction from './components/Auction';

function App() {
  return (
    <Layout>
      <Hero />
      <Upsell />
      <Brands />
      <Auction />
    </Layout>
  );
}

export default App;
