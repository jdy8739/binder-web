import classNames from 'classnames/bind';

import style from './Option.module.scss';

const cx = classNames.bind(style);

interface BaseOption {
  value: number | string;
  label: number | string;
  [key: string]: number | string;
}

interface OptionProps {
  className?: string;
  option: BaseOption;
}

const Option = ({ className, option }: OptionProps) => {
  return (
    <div className={cx('wrapper', { visited: option.visited }, className)}>
      <span>{option.label}</span>
      {option.sub && <span>{option.sub}</span>}
    </div>
  );
};

Option.displayName = 'Option';

export default Option;
export type { BaseOption };