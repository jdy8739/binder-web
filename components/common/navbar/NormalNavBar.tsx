'use client';

import Link from 'next/link';
import classNames from 'classnames/bind';

import { usePathname } from 'next/navigation';

import { FILED_CONST } from '/business/const/field-const';
import { URL_CONST } from '/business/const';

import SearchInput from '/components/atoms/search-input/SearchInput';
import Dropdown from '/components/atoms/dropdown/Dropdown';
import AlarmOption from '/components/atoms/option/AlarmOption';
import LinkOption from '../../atoms/option/LinkOption';
import { Bell, Pen, Profile } from '/assets/svg';

import style from './NormalNavBar.module.scss';

const cx = classNames.bind(style);

const NormalNavBar = () => {
  const pathname = usePathname();

  const isSignedIn = true;

  return (
    <header className={cx('normal-navbar-wrapper')}>
      <div className={cx('top-bar')}>
        <div className={cx('left')}>
          <span className={cx('logo')}>
            <div>바인더</div>
            <div className={cx('logo-border')}>
              <div />
              <div />
            </div>
            <small>
              <div>
                <span>Bio</span>
                <span>-Industrial community</span>
              </div>
            </small>
          </span>
          <SearchInput className={cx('search-input')} />
        </div>
        <span className={cx('right', isSignedIn ? 'signed' : 'not-signed')}>
          <ul>
            {isSignedIn ? (
              <>
                <li>
                  <Dropdown
                    className={cx('alarm-dropdown')}
                    trigger={<Bell />}
                    optionComponent={AlarmOption}
                    optionList={[
                      {
                        value: 1,
                        label:
                          '내가 작성한 게시글에 Aaasia님이 답글을 작성했습니다.',
                        time: 423,
                      },
                      {
                        value: 2,
                        label:
                          '내가 작성한 게시글에 Aaasia님이 답글을 작성했습니다.',
                        time: 423,
                      },
                      {
                        value: 3,
                        label:
                          '내가 작성한 게시글에 Aaasia님이 답글을 작성했습니다.',
                        time: 423,
                      },
                      {
                        value: 4,
                        label:
                          '내가 작성한 게시글에 Aaasia님이 답글을 작성했습니다.',
                        time: 423,
                      },
                      {
                        value: 5,
                        label:
                          '내가 작성한 게시글에 Aaasia님이 답글을 작성했습니다.',
                        time: 423,
                        clicked: true,
                      },
                    ]}
                    header={
                      <div>
                        <span>새로운 알림</span>
                        <span>4</span>
                        <span>개</span>
                      </div>
                    }
                    footer={<Link href="/#">알림 더보기</Link>}
                    height={399}
                  />
                </li>
                <li>
                  <Dropdown
                    className={cx('user-dropdown')}
                    trigger={<Profile />}
                    optionComponent={LinkOption}
                    optionList={[
                      { value: 1, label: '나의 콘텐츠' },
                      { value: 2, label: '스크랩 보기' },
                      { value: 3, label: '개인정보 수정' },
                      { value: 4, label: '로그아웃' },
                    ]}
                    header={
                      <div className={cx('user-dropdown-header')}>
                        <div>
                          <div>
                            <div>닉네임자리</div>
                            <div>소속</div>
                          </div>
                          <div>
                            <button type="button">
                              <Pen />
                            </button>
                          </div>
                        </div>
                      </div>
                    }
                    height={332}
                  />
                </li>
                <li className={cx('right-link')}>닉네임</li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/signin" className={cx('right-link')}>
                    로그인
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className={cx('right-link')}>
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </span>
      </div>
      <nav className={cx('option-nav')}>
        <ul>
          <li>
            <Dropdown
              className={cx('field-option')}
              trigger={
                <span
                  className={cx('board-option', {
                    primary: pathname.endsWith('field'),
                  })}
                >
                  필드별
                </span>
              }
              optionComponent={LinkOption}
              optionList={FILED_CONST}
              effect="fade"
            />
          </li>
          <li>
            <Link href={URL_CONST.BOARD.DEPT}>
              <span
                className={cx('board-option', {
                  primary: pathname.endsWith('dept'),
                })}
              >
                직무 게시판
              </span>
            </Link>
          </li>
          <li>
            <Link href={URL_CONST.BOARD.ARTS}>
              <span
                className={cx('board-option', {
                  primary: pathname.endsWith('arts'),
                })}
              >
                학술 게시판
              </span>
            </Link>
          </li>
          <li>
            <Link href={URL_CONST.BOARD.JOBS}>
              <span
                className={cx('board-option', {
                  primary: pathname.endsWith('jobs'),
                })}
              >
                취업이직 게시판
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NormalNavBar;
