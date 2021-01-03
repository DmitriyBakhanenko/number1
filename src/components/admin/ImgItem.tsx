import React from 'react';

const ImgItem = ({
  id,
  imageUrl,
  handleImgChange,
}: {
  id: number;
  imageUrl: [any];
  handleImgChange: () => void;
}) => {
  return (
    <React.Fragment>
      <img
        id={`${id}`}
        src={imageUrl || imageUrl[id] ? imageUrl[id] : null}
        onClick={handleImgChange}
        className='admin_img_prew'
        alt=''
      ></img>
    </React.Fragment>
  );
};

export default ImgItem;
