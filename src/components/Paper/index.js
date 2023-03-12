import React from 'react';
import classNames from 'classnames';
import s from './Paper.module.scss';

import paper from '../../images/icon-paper.svg';
import { Context } from '../../context';
export const Paper = () => {
  const { selectedChip, chooseChip } = React.useContext(Context);

  return (
    <div
      className={classNames(s.paper, 'chip', {
        [s.active]: chooseChip,
        active: chooseChip,
      })}
      onClick={() => selectedChip('paper')}>
      <div className={s.paper_body + ' ' + 'chip-body'}>
        <img src={paper} alt="" />
      </div>
    </div>
  );
};
