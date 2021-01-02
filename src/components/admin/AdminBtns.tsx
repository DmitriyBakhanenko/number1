import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  deleteImage,
  deleteItemFromCollection,
} from '../../firebase/firebase.utils';
import { selectAdminMode } from '../../redux/admin/admin.selector';
import CustomButton from '../custom-button/custom-button';
import Modal from '../modal/Modal';
import './adminBtns.scss';

interface Props {
  item: any;
  editLink: string;
  fireColl: string;
  isCollection?: boolean;
  isItem?: boolean;
}

const AdminBtns = ({
  item,
  editLink,
  fireColl,
  isCollection,
  isItem,
}: Props) => {
  const admin = useSelector(selectAdminMode);
  const history = useHistory();
  const [toggleModal, setToggleModal] = useState(false);

  const onSubmit = () => {
    deleteImage(item.childRef);
    deleteItemFromCollection(fireColl, item.id);
    setInterval(() => {
      window.location.reload();
    }, 1000);
  };

  const renderModal = () => {
    if (isCollection)
      return (
        <Modal
          title={item.title}
          body='Вы уверенны, что хотите удалить коллекцию? Удаляя коллекцию, Вы удалите все позиции внутри этой коллекции.'
          submit='Удалить'
          negative
          cancel='Отмена'
          onDismiss={() => setToggleModal(!toggleModal)}
          onSubmit={onSubmit}
        />
      );
    else if (isItem)
      return (
        <Modal
          title={item.title}
          body='Вы уверенны, что хотите удалить позицию?'
          submit='Удалить'
          negative
          cancel='Отмена'
          onDismiss={() => setToggleModal(!toggleModal)}
          onSubmit={onSubmit}
        />
      );
    else return null;
  };

  return (
    <React.Fragment>
      {admin ? (
        <div className='modify_btn_container'>
          <CustomButton
            onClick={() => history.push(editLink)}
            className='modify_btn'
            type='button'
          >
            Изменить
          </CustomButton>
          <CustomButton
            onClick={() => setToggleModal(!toggleModal)}
            className='modify_btn'
            type='button'
          >
            Удалить
          </CustomButton>
          {toggleModal ? renderModal() : null}
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default AdminBtns;
