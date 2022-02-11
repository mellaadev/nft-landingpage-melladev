import React from 'react'
import Layout from './components/Layout';
import Hero from './components/Hero';
import Upsell from './components/Upsell';
import Brands from './components/Brands';
import Auction from './components/Auction';
import Release from './components/Release';

function App() {
  return (
    <Layout>
      <Hero />
      <Upsell />
      <Brands />
      <Auction />
      <Release />
    </Layout>
  );
}

export default App;
