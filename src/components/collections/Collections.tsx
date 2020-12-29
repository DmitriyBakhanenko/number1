import React, { useState, useEffect } from 'react';
import './Collections.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from '../../components/with-spinner/with-spinner.styles';
import {
  selectDirectory,
  selectIsDirectoryLoaded,
} from '../../redux/directory/directory.selectors';

const Collection = () => {
  const isLoaded = useSelector(selectIsDirectoryLoaded);
  const [currentStatus, setCurrentStatus] = useState(isLoaded);

  useEffect(() => {
    setCurrentStatus(isLoaded);
  }, [isLoaded]);

  const { directory } = useSelector(selectDirectory);
  console.log(directory);
  return (
    <React.Fragment>
      {currentStatus ? (
        <div className='menu container'>
          {directory.map((section: any) => (
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
      ) : (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      )}
    </React.Fragment>
  );
};

export default Collection;
