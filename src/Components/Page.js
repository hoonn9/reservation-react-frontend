import { SEE_BOARD } from "../Routes/Board/BoardQueries";
import { useQuery } from "react-apollo-hooks";

export default ({ type, first, last, skip }) => {
  try {
    const page = useQuery(SEE_BOARD, {
      variables: {
        type: type,
        first: first,
        last: last,
        skip: skip
      }
    });
    return page;
  } catch (e) {
    console.log(e);
    return false;
  }
};
