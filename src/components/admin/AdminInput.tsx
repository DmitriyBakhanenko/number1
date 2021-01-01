import React from 'react';

const AdminInput = ({ inputLabel, inputValue, setInput }: any) => {
  return (
    <React.Fragment>
      <p className='title_label'>{inputLabel}</p>
      <div className='input_admin_cont'>
        <input
          type='input'
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
          className='input_amin'
        />
      </div>
    </React.Fragment>
  );
};

export default AdminInput;
