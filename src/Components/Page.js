import { SEE_BOARD } from "./Board/BoardQueries";
import { useQuery } from "@apollo/react-hooks";

export default ({ boardId, type, first, last, skip }) => {
  try {
    const page = useQuery(SEE_BOARD, {
      variables: {
        boardId,
        type: type,
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
