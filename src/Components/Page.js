import { SEE_BOARD } from "./Board/BoardQueries";
import { SEE_COMMENT } from "./Comment/CommentQueries";
import { useQuery } from "@apollo/react-hooks";
import { SEE_EVENT } from "../Routes/Event/EventQueries";

export const BoardPage = ({ boardId, postType, first, last, skip }) => {
  try {
    const page = useQuery(SEE_BOARD, {
      variables: {
        boardId,
        postType,
        first: first,
        last: last,
        skip: skip,
      },
      fetchPolicy: "cache-and-network",
    });
    return page;
  } catch (e) {
    return false;
  }
};

export const CommentPage = ({ postId, first, last, skip }) => {
  try {
    const page = useQuery(SEE_COMMENT, {
      variables: {
        postId,
        first,
        last,
        skip,
      },
      fetchPolicy: "cache-and-network",
    });
    return page;
  } catch (e) {
    return false;
  }
};

export const EventPage = ({ eventType, period, first, last, skip }) => {
  try {
    const page = useQuery(SEE_EVENT, {
      variables: {
        eventType,
        period,
        first,
        last,
        skip,
      },
      fetchPolicy: "cache-and-network",
    });
    return page;
  } catch (e) {
    return false;
  }
};
