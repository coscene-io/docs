import Layout from '@theme/Layout';
import React from 'react';
import HomeCatalogue from '../components/homeCatalogue';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const backgroundImage = useBaseUrl('/assets/images/home_header.png');

  return (
    <Layout>
      <div
        className="w-full h-[260px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="space-y-4 py-20 px-10">
          <div className="text-4xl font-medium text-center">
            <Translate id="home.header.title">帮助文档</Translate>
          </div>
          <div className="text-base font-normal text-center text-gray-500">
            <Translate id="home.header.description">coScene 提供了全面的产品功能，帮助你快速实践 SceneOps</Translate>
          </div>
        </div>
      </div>
      <div className="container py-10">
        <HomeCatalogue />
      </div>
    </Layout>
  );
}
