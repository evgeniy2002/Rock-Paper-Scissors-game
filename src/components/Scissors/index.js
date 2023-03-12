import React from 'react';

import { Context } from '../../context';

import s from './Scissors.module.scss';

import scissors from '../../images/icon-scissors.svg';
import classNames from 'classnames';

export const Scissors = () => {
  const { selectedChip, chooseChip } = React.useContext(Context);

  return (
    <div
      className={classNames(s.scissors, 'chip', {
        [s.active]: chooseChip,
        active: chooseChip,
      })}
      onClick={() => selectedChip('scissors')}>
      <div className={s.scissors_body + ' ' + 'chip-body'}>
        <img src={scissors} alt="" />
      </div>
    </div>
  );
};
