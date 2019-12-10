const { useState } = wp.element;

import Posts from "./components/posts";

const Votes = () => {
  const [votes, setVotes] = useState(0);
  const addVote = () => {
    setVotes(votes + 1);
  };
  return (
    <div>
      <Posts />
      <h2>{votes} Votes</h2>
      <p>
        <button onClick={addVote}>Vote!</button>
      </p>
    </div>
  );
};

export default Posts;
