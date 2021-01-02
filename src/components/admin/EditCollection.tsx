import React, { useState, useEffect, useRef } from 'react';
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
import CustomButton from '../custom-button/custom-button';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { deleteImage, uploadImage } from '../../firebase/firebase.utils';
import { updateItemInCollection } from '../../firebase/firebase.utils';
import AdminInput from './AdminInput';

const EditSectionOrCollection = () => {
  const isLoaded = useSelector(selectIsDirectoryLoaded);
  const directory = useSelector(selectDirectorySection);
  const admin = useSelector(selectAdminMode);
  const match: any = useRouteMatch();
  const history = useHistory();

  const [currentStatus, setCurrentStatus] = useState(isLoaded);
  const [file, setFile] = useState({});
  const [title, setTitle] = useState('TEST');
  const [imageUrl, setImageUrl] = useState('');
  const [path, setPath] = useState('');
  const [percentage, setPercentage] = useState('');
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');
  const [childRef, setChildRef]: any = useState();

  const sectionDataToStateRef: any = useRef();
  const updateItemRef: any = useRef();

  const sectionDataToState = () => {
    directory
      .filter((section: any) => section.id === match.params.sectionId)
      .forEach((item: any) => {
        setImageUrl(item.imageUrl);
        setPath(item.linkUrl);
        setId(item.id);
        setTitle(item.title);
        if (item.childRef && setChildRef) setChildRef(item.childRef);
      });
  };

  const updateItem = () => {
    let link: string = path;
    if (!path.includes('shop/')) link = `shop/${path}`;
    if (childRef === undefined) {
      updateItemInCollection('sections', id, {
        title: title,
        linkUrl: link,
      });
    } else {
      updateItemInCollection('sections', id, {
        imageUrl,
        linkUrl: link,
        title,
        childRef: childRef.fullPath,
      });
    }

    setTimeout(() => {
      window.location.replace('/');
    }, 500);
  };
  sectionDataToStateRef.current = sectionDataToState;
  updateItemRef.current = updateItem;

  useEffect(() => {
    setCurrentStatus(isLoaded);
  }, [isLoaded]);

  useEffect(() => {
    if (status === 'Загрузка завершена успешно' || status === 'Сохранено')
      updateItemRef.current();
  }, [status]);

  useEffect(() => {
    if (directory) sectionDataToStateRef.current();
  }, [directory]);

  const uploadHandler = (e: any) => {
    setFile(e.target.files[0]);

    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = () => {
    if (file && childRef) {
      deleteImage(childRef);
      uploadImage(
        'images/sections/',
        file,
        setStatus,
        setPercentage,
        setImageUrl,
        setChildRef
      );
    } else {
      setStatus('Сохранено');
    }
  };

  if (!admin) return <h1>Режим админа не включен</h1>;

  return (
    <React.Fragment>
      {currentStatus && admin ? (
        <React.Fragment>
          <div className='admin_preview_container'>
            <div className='collection-item'>
              <div className='image'>
                <img src={imageUrl} alt='card pic' />
              </div>
              <div className='content-text'>
                <div className='header-text'>{title}</div>
              </div>
            </div>
          </div>
          <input
            className='upload_btn'
            type='file'
            name='sectionImg'
            onChange={uploadHandler}
          />
          <AdminInput inputLabel inputValue setInput />
          <p className='title_label'>Название раздела</p>
          <div className='input_title_cont'>
            <input
              type='input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='input_title'
            />
          </div>
          <p className='title_label'>Url англ</p>
          <div className='input_title_cont'>
            <input
              type='input'
              value={path}
              onChange={(e) => setPath(e.target.value)}
              className='input_title'
            />
          </div>
          <div className='control_btn_container'>
            <CustomButton
              onClick={onSubmit}
              className='control_btn'
              type='button'
              apply
            >
              Обновить
            </CustomButton>
            <CustomButton
              onClick={() => history.push('/')}
              className='control_btn'
              type='button'
            >
              Вернуться
            </CustomButton>
          </div>
          {status && percentage ? (
            <div className='upload_status'>
              <p className='status'>{status}</p>
              {percentage !== '100' ? (
                <p className='percentage'>{percentage}%</p>
              ) : null}
            </div>
          ) : null}
        </React.Fragment>
      ) : (
        <SpinnerOverlay>
          <p>Загрузка</p>
          <SpinnerContainer />
        </SpinnerOverlay>
      )}
    </React.Fragment>
  );
};

export default EditSectionOrCollection;
