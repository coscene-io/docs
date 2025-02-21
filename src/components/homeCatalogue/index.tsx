import React from 'react';
import { CATALOGUE } from './catalogue';

interface DocSlugProps {
  title: string;
  slug: string;
}

function Card({ catalogue }: { catalogue: { header: { title: string }; docs: DocSlugProps[] } }) {
  return (
    <div className="mb-2">
      <div className="mb-1 text-lg font-medium text-gray-900">{catalogue.header.title}</div>
      {catalogue.docs.map((doc, index) => {
        return (
          <div key={index}>
            <a className="text-sm font-normal text-blue-600 hover:text-blue-500" href={doc.slug}>
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
      {CATALOGUE.map((item, index) => (
        <Card key={index} catalogue={item} />
      ))}
    </div>
  );
}
