import ThreadItem, { ThreadItemShape } from "./ThreadItem";
import PropTypes from "prop-types";

function ThreadList({threads, upVote, downVote, neutralizeVote}) {
  return (
    <div className="flex flex-col justify-center gap-y-4">
      {
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            upVote={upVote}
            downVote={downVote}
            neutralizeVote={neutralizeVote}
          />
        ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(ThreadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralizeVote: PropTypes.func.isRequired,
};

export default ThreadList;