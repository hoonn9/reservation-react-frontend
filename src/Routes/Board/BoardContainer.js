import React from "react";
import BoardPresenter from "./BoardPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEE_BOARD } from "./BoardQueries";

export default () => {
  const { data, loading } = useQuery(SEE_BOARD, {
    variables: {
      type: "free"
    }
  });
  console.log(data);
  return loading ? <div>loading</div> : <BoardPresenter data={data} />;
};
