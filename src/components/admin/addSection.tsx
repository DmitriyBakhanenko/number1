import React, { useEffect, useRef, useState } from 'react';
import './section.scss';
import { useSelector } from 'react-redux';
import { selectAdminMode } from '../../redux/admin/admin.selector';
import CustomButton from '../custom-button/custom-button';
import {
  addItemToCollection,
  uploadImage,
} from '../../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';

const AddSection = () => {
  const [imageUrl, setImageUrl]: any = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('TEST');
  const [path, setPath] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [status, setStatus] = useState(null);
  const [childRef, setChildRef]: any = useState(null);

  const admin = useSelector(selectAdminMode);
  const history = useHistory();

  const addItem = () => {
    let link: string = path;
    if (!path.includes('shop/')) link = `shop/${path}`;
    addItemToCollection('sections', {
      imageUrl,
      linkUrl: link,
      title,
      childRef: childRef.fullPath,
    });
    addItemToCollection('collections', {
      routeName: path,
      title,
    });
  };

  const addItemRef: any = useRef();
  addItemRef.current = addItem;

  useEffect(() => {
    if (childRef) {
      addItemRef.current();
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
  }, [childRef]);

  const uploadHandler = (e: any) => {
    setFile(e.target.files[0]);

    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onUploadSubmit = () => {
    uploadImage(
      'images/sections/',
      file,
      setStatus,
      setPercentage,
      setImageUrl,
      setChildRef
    );
  };

  if (!admin) return <h1>Режим админа не включен</h1>;

  return (
    <React.Fragment>
      {admin ? (
        <React.Fragment>
          <div className='menu container admin'>
            <div className='collection-item'>
              <img className='image' src={imageUrl} alt='' />
              <div className='content-text'>{title}</div>
            </div>
          </div>
          <input
            className='upload_btn'
            type='file'
            name='sectionImg'
            onChange={uploadHandler}
          />
          <p className='title_label'>Указать название раздела</p>
          <div className='input_title_cont'>
            <input
              type='input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='input_title'
            />
          </div>
          <p className='title_label'>Указать путь англ</p>
          <div className='input_title_cont'>
            <input
              type='input'
              onChange={(e) => setPath(e.target.value)}
              className='input_title'
            />
          </div>
          <div className='control_btn_container'>
            <CustomButton
              onClick={onUploadSubmit}
              className='control_btn'
              type='button'
              apply
            >
              Применить
            </CustomButton>
            <CustomButton
              onClick={() => history.push('/')}
              className='control_btn'
              type='button'
            >
              Отмена
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
      ) : null}
    </React.Fragment>
  );
};

export default AddSection;
