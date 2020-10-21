import Head from 'next/head';
// import { useState } from 'react'
// import { useQuery } from '@apollo/client';

import Layout from '../Components/Layout'
import '../styles/styles.css'
import AliceCarousel from '../Components/Homepage/AliceCarousel';
import Cards from '../Components/Homepage/CardSection';
import FeaturedProducts from '../Components/Homepage/FeaturedProducts';
import InteractionSection from '../Components/Homepage/InteractionSection';
import NewRelease from '../Components/Homepage/NewRelease';
import EmailSection from '../Components/Homepage/EmailSection';
import About180 from '../Components/Homepage/About180';
import CustomerSupport from '../Components/Homepage/CustomerSupport';
import LastPoint from '../Components/Homepage/LastPoint';




// const handleDragStart = (e) => e.preventDefault();
export default function Home() {

  return (
    <div >
      <Head>
        <title>180Smoke-ECigarrattes and Vapes Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AliceCarousel />
          <Cards />
          <FeaturedProducts />
          <InteractionSection />
          <NewRelease />
          <EmailSection />
          <About180 />
          <CustomerSupport />
          <LastPoint />
        </div>
      </Layout>
    </div>
  )
}
