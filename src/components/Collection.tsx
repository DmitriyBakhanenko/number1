import React from 'react';
import { sections } from './example/directory.data';
import './Collection.scss';
import { Link } from 'react-router-dom';

interface props {
  match: string;
}

const Collection = ({ match }: props) => {
  return (
    <div className='menu container'>
      {sections.map((section) => (
        <div key={section.id} className='collection-item'>
          <Link className='image' to={match + section.linkUrl}>
            <img src={section.imageUrl} alt='card pic' />
          </Link>
          <div className='content-text'>
            <Link className='header-text' to={match + section.linkUrl}>
              {section.title}
            </Link>
            <div className='meta'>
              <div>Просмотр</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
