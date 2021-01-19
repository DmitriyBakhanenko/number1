import React, { useRef } from 'react';

const Bot = () => {
  const botRef: any = useRef();
  const showBot = () => {
    console.log('sdsd');
  };

  return (
    <div ref={botRef} onClick={showBot} className='bot_contact_icon'></div>
  );
};

export default Bot;
