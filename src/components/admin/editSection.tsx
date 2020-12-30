import React, { useState, useEffect } from 'react';
import './section.scss';
import { useSelector } from 'react-redux';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from '../../components/with-spinner/with-spinner.styles';
import {
  selectDirectorySection,
  selectIsDirectoryLoaded,
} from '../../redux/directory/directory.selectors';
import { selectAdminMode } from '../../redux/admin/admin.selector';
//import CustomButton from '../custom-button/custom-button';
import { useRouteMatch } from 'react-router-dom';

const EditSection = () => {
  const isLoaded = useSelector(selectIsDirectoryLoaded);
  const [currentStatus, setCurrentStatus] = useState(isLoaded);

  const directory = useSelector(selectDirectorySection);
  const admin = useSelector(selectAdminMode);
  const match: any = useRouteMatch();

  useEffect(() => {
    setCurrentStatus(isLoaded);
  }, [isLoaded]);

  if (!match.params && !directory) return null;
  const itemToChange = directory.filter(
    (section: any) => section.id === match?.params?.itemId
  );

  return (
    <React.Fragment>
      {currentStatus && admin && match.params ? (
        <div className='menu container admin'>
          {itemToChange.map((section: any) => (
            <div key={section.id} className='collection-item'>
              <div className='image'>
                <img src={section.imageUrl} alt='card pic' />
              </div>
              <div className='content-text'>
                <div className='header-text'>{section.title}</div>
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

export default EditSection;
