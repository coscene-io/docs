import Layout from '@theme/Layout';
import React from 'react';
import HomeCatalogue from '../components/homeCatalogue';

export default function Home() {
  return (
    <Layout>
      <div className="container py-8">
        <HomeCatalogue />
      </div>
    </Layout>
  );
}
