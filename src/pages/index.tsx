import Layout from '@theme/Layout';
import React from 'react';
import HomeCatalogue from '../components/homeCatalogue';
import Translate from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout>
      <div
        className="w-full h-[260px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/home_header.png)' }}
      >
        <div className="space-y-4 py-12">,
          <div className="text-4xl font-medium text-center">
            <Translate id="">帮助文档</Translate>
          </div>
          <div className="text-base font-normal text-center text-gray-500">
            <Translate id="">coScene 提供了全面的产品功能，帮助你快速实践 SceneOps</Translate>
          </div>
        </div>
      </div>
      <div className="container py-8">
        <HomeCatalogue />
      </div>
    </Layout>
  );
}
