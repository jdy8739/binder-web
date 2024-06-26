'use client';

import classNames from 'classnames/bind';

import style from './Radio.module.scss';

const cx = classNames.bind(style);

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
}

const Radio = ({ className, ...props }: RadioProps) => {
  return <input {...props} className={cx(className, 'radio')} type="radio" />;
};

export default Radio;
