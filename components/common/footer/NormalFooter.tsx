import classNames from 'classnames/bind';

import { Blof, Facebook, Instagram } from '/assets/svg';

import styles from './NormalFooter.module.scss';

const cx = classNames.bind(styles);

const NormalFooter = () => {
  return (
    <footer className={cx('footer')}>
      <div>
        <ul>
          <li>바인더 소개</li>
          <li>개인정보처리방침</li>
          <li>바인더 소개</li>
          <li>바인더 소개</li>
        </ul>
        <ul>
          <li>이메일</li>
          <li>bioindu.kor@gmail.com</li>
        </ul>
        <ul>
          <li>책임자</li>
          <li>심지운</li>
        </ul>
        <div>COPYRIGHT &copy; Bindu ALL RIGHT RESERVED.</div>
      </div>
      <div className={cx('svg-icons')}>
        <button type="button">
          <Blof />
        </button>
        <button type="button">
          <Facebook />
        </button>
        <button type="button">
          <Instagram />
        </button>
      </div>
    </footer>
  );
};

export default NormalFooter;
