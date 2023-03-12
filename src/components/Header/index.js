import React from 'react';
import { Context } from '../../context';

import s from './Header.module.scss';

export const Header = () => {
  const { score } = React.useContext(Context);

  return (
    <header className={s.header}>
      <div className={s.header_row}>
        <ul className={s.header_row__title}>
          <li>Rock</li>
          <li>Paper</li>
          <li>Scissors</li>
        </ul>
        <div className={s.header_row__scrore}>
          <p>Score</p>
          <span>{score}</span>
        </div>
      </div>
    </header>
  );
};
