import React from 'react';
import styles from './styles.module.css';

import DataEngine from '@site/static/img/data-engine.jpg';
import SearchEngine from '@site/static/img/search-engine.jpg';
import WorkflowEngine from '@site/static/img/workflow-engine.jpg';

type FeatureItem = {
  title: string;
  featureIcon: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '场景数据管理引擎 ',
    featureIcon: DataEngine,
    description: <>收集、持久化、管理、流式处理，满足一切需要。您操作场景数据的瑞士军刀。</>,
  },
  {
    title: '大规模工作流引擎',
    featureIcon: WorkflowEngine,
    description: <>不费吹灰之力调度大规模工作流，所有必要的数据都已为您提前做好准备。</>,
  },
  {
    title: '语义搜索发现引擎',
    featureIcon: SearchEngine,
    description: <>在 EB 级别的数据发现就像吃饭喝水一样自然。需要一些特定场景？您只需要吩咐一声小刻同学。</>,
  },
];

function Feature({ title, featureIcon, description }: FeatureItem) {
  return (
    <div className="col col--4">
      <div className="text-center mb-2">
        <img style={{ height: '200px' }} src={featureIcon} role="img" />
      </div>
      <div className="text-center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
