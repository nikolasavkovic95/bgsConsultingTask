import React from 'react';

const CreditCardIcon = ({ view }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" fill="none" viewBox="0 0 37 24">
      <g fill={view === 'creditCard' ? '#ffff' : '#505050'} clipPath="url(#clip0_704_150)">
        <path d="M0 20.308A3.703 3.703 0 003.692 24h29.539a3.703 3.703 0 003.692-3.692V10.84H0v9.467zm5.361-3.83h13.082v2.216H5.361V16.48zM33.23 0H3.693A3.703 3.703 0 000 3.692v1.98h36.923v-1.98A3.703 3.703 0 0033.231 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_704_150">
          <path fill="#fff" d="M0 0H36.923V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CreditCardIcon;
