import { Post } from '@/post';

import SiteLogo from '../atoms/SiteLogo';

type Prop = {
  posts: Post[];
};

// TODO: keyをIDに
// TODO: figureの設定

const PostList = ({ posts }: Prop) => (
  <ul>
    {posts.map((post) => (
      <li
        className="card lg:card-side shadow-md hover:bg-blue-200 active:bg-blue-400"
        key={post.title}
      >
        <div className="flex items-center justify-center min-w-min max-w-none lg:max-w-xs">
          <figure>
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                alt="投稿を見る"
                className="max-w-xs lg:max-w-none"
              />
            ) : (
              <div className="ml-0 lg:ml-3">
                <SiteLogo />
              </div>
            )}
          </figure>
        </div>
        <div className="card-body items-start break-all">
          <h3 className="card-title">{post.title}</h3>
          <p className="line-clamp-2">{post.abstract}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default PostList;
