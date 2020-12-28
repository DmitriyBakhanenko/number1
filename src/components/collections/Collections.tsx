import React from 'react';
import './Collections.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';

const Collection = () => {
  const sections = useSelector(selectDirectorySection);

  return (
    <div className='menu container'>
      {sections.map((section: any) => (
        <div key={section.id} className='collection-item'>
          <Link className='image' to={section.linkUrl}>
            <img src={section.imageUrl} alt='card pic' />
          </Link>
          <div className='content-text'>
            <Link className='header-text' to={section.linkUrl}>
              {section.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
