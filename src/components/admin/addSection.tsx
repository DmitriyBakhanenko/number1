import React, { useEffect, useState } from 'react';
import './section.scss';
import { useSelector } from 'react-redux';
import { selectAdminMode } from '../../redux/admin/admin.selector';
import CustomButton from '../custom-button/custom-button';
import {
  addItemToCollection,
  uploadImage,
} from '../../firebase/firebase.utils';

const AddSection = () => {
  const [image, setImage] = useState(
    'https://firebasestorage.googleapis.com/v0/b/eshop-number1.appspot.com/o/images%2Fsections%2FMIBG5bZnNI3Nw0wT-croppedOGU87-jpg?alt=media&token=72be2aa2-824f-4285-bdc8-ba474a49bd90'
  );
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('TEST');
  const [url, setUrl] = useState('');
  const [path, setPath] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [status, setStatus] = useState(null);

  const admin = useSelector(selectAdminMode);

  useEffect(() => {
    if (url) {
      addItemToCollection('sections', {
        imageUrl: url,
        linkUrl: `shop/${path}`,
        title: title,
      });
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
  }, [url, path, title]);

  const uploadHandler = (e: any) => {
    setFile(e.target.files[0]);

    let reader: any = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const onUploadSubmit = () => {
    uploadImage('images/sections/', file, setStatus, setPercentage, setUrl);
  };

  return (
    <React.Fragment>
      {admin ? (
        <React.Fragment>
          <div className='menu container admin'>
            <div className='collection-item'>
              <img className='image' src={image} alt='card pic' />
              <div className='content-text'>{title}</div>
            </div>
          </div>
          <input
            className='upload_btn'
            type='file'
            name='sectionImg'
            onChange={uploadHandler}
          />
          <p className='title_label'>Название раздела</p>
          <div className='input_title_cont'>
            <input
              type='input'
              onChange={(e) => setTitle(e.target.value)}
              className='input_title'
            />
          </div>
          <p className='title_label'>Url англ</p>
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
            <CustomButton className='control_btn' type='button'>
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
