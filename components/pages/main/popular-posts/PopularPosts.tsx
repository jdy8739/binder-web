import classNames from 'classnames/bind';

import PostSlide from '/components/mocules/post-slide/PostSlide';

import style from './PopularPosts.module.scss';

const cx = classNames.bind(style);

const PopularPosts = () => {
  return (
    <section className={cx('popular-posts-wrapper')}>
      <PostSlide />
      <PostSlide />
    </section>
  );
};

export default PopularPosts;
