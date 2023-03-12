import React from 'react';
import { Context } from '../context';

export const RulesBtn = () => {
  const { setPopup } = React.useContext(Context);

  return (
    <div className="rules">
      <button className="btn" onClick={() => setPopup(true)}>
        <span>Rules</span>
      </button>
    </div>
  );
};
