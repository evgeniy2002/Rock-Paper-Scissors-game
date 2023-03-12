import React from 'react';
import { Context } from '../context';

import popup_rules from '../images/image-rules.svg';
import close from '../images/icon-close.svg';

export const RulesPopup = () => {
  const { setPopup, popup } = React.useContext(Context);
  return (
    <div className={popup ? 'rules-wrapper active' : 'rules-wrapper'}>
      <div className="rules-popup">
        <div className="rules-popup__header">
          <h1>Rules</h1>
          <img src={close} alt="" onClick={() => setPopup(false)} />
        </div>
        <img src={popup_rules} alt="" />
      </div>
    </div>
  );
};
