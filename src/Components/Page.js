import { SEE_BOARD } from "../Routes/Board/BoardQueries";
import { useQuery } from "react-apollo-hooks";

export default ({ type, first, last, skip }) => {
  return useQuery(SEE_BOARD, {
    variables: {
      type: type,
      first: first,
      last: last,
      skip: skip
    }
  });
};
