import classNames from 'classnames';
import React from 'react';
import { Context } from '../../context';

import rock from '../../images/icon-rock.svg';

import s from './Rock.module.scss';

export const Rock = () => {
  const { selectedChip, chooseChip } = React.useContext(Context);

  return (
    <div
      className={classNames(s.rock, 'chip', {
        [s.active]: chooseChip,
        active: chooseChip,
      })}
      onClick={() => selectedChip('rock')}>
      <div className={s.rock_body + ' ' + 'chip-body'}>
        <img src={rock} alt="" />
      </div>
    </div>
  );
};
