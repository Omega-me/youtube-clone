import React from 'react';
import './SidebarElement.css';

const SidebarElement = ({ Icon, text, active }) => {
  return (
    <>
      {active ? (
        <div className='sidebarElement active'>
          {Icon}
          <h5 className='sidebarElement--responsive'>{text}</h5>
        </div>
      ) : (
        <div className='sidebarElement'>
          {Icon}
          <h5 className='sidebarElement--responsive'>{text}</h5>
        </div>
      )}
    </>
  );
};

export default SidebarElement;
