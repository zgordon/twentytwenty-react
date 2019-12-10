const { useState } = wp.element;

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const POSTS_QUERY = gql`
  {
    posts {
      nodes {
        id
        title(format: RENDERED)
        votes
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  const posts = data.posts.nodes;

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error :(</p>;

  // const [posts, setPosts] = useState([]);

  // const posts = [...data.posts.nodes];

  // const sortedPosts = data.posts.nodes
  //   .sort((a, b) => a.votes < b.votes)
  //   .map(({ id, title, votes }) => (
  //     <li key={id}>
  //       <button>&#8679;</button>
  //       {votes}
  //       <button>&#8681;</button>
  //       <h3>{title}</h3>
  //     </li>
  //   ));
  // return <ul>{sortedPosts}</ul>;

  return posts.map(({ postId, title }) => <h3 key={postId}>{title}</h3>);
  // return <ul>{sortedPosts}</ul>;
};

export default Posts;
