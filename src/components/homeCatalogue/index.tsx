import React from 'react';
import { CATALOGUE } from './catalogue';
import Link from '@docusaurus/Link';

interface DocSlugProps {
  title: string;
  docLink: string;
  link?: string;
}

function Card({ catalogue }: { catalogue: { header: { title: string }; docs: DocSlugProps[] } }) {
  return (
    <div className="mb-2">
      <div className="mb-1 text-lg font-medium text-gray-900">{catalogue.header.title}</div>
      {catalogue.docs.map((doc, index) => {
        if (doc.link) {
          return (
            <div key={index} className="truncate">
              <a
                target="_blank"
                className="text-sm font-normal text-blue-600 hover:text-blue-500 active:text-blue-700"
                title={doc.title}
                href={doc.link}
              >
                {doc.title}
              </a>
            </div>
          );
        }

        if (doc.docLink) {
          return (
            <div key={index} className="truncate">
              <Link
                className="text-sm font-normal text-blue-600 hover:text-blue-500 active:text-blue-700"
                title={doc.title}
                to={`/docs${doc.docLink}`}
              >
                {doc.title}
              </Link>
            </div>
          );
        }

        return (
          <div key={index} className="truncate">
            {doc.title}
          </div>
        );
      })}
    </div>
  );
}

export default function HomeCatalogue() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {CATALOGUE.map((item, index) => (
        <Card key={index} catalogue={item} />
      ))}
    </div>
  );
}
