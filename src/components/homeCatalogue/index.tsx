import React from 'react';

interface DocSlugProps {
  title: string;
  slug: string;
}

const catalogue = [
  {
    header: { title: '可视化' },
    docs: [
      { title: '关于数据可视化', slug: '/viz/about-viz' },
      { title: '可视化前的准备', slug: '/viz/prep-before-viz' },
    ],
  },
  {
    header: { title: '可视化' },
    docs: [
      { title: '关于数据可视化', slug: '/viz/about-viz' },
      { title: '可视化前的准备', slug: '/viz/prep-before-viz' },
    ],
  },
];

function Card({ catalogue }: { catalogue: { header: { title: string }; docs: DocSlugProps[] } }) {
  return (
    <div className='mb-2'>
      <div className="mb-1 text-lg font-medium text-gray-900">{catalogue.header.title}</div>
      {catalogue.docs.map((doc, index) => {
        return (
          <div key={index}>
            <a className="text-base font-normal text-blue-600 hover:text-blue-500" href={doc.slug}>
              {doc.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default function HomeCatalogue() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {catalogue.map((item, index) => (
        <Card key={index} catalogue={item} />
      ))}
    </div>
  );
}
