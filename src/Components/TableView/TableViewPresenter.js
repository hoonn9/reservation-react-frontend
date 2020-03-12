import React from "react";
import styled from "styled-components";
import EventView from "../EventView";

const Container = styled.div`
  position: relative;
  margin-top: 30px;
  overflow: hidden;
`;
const TableWapper = styled.ul`
  width: auto;
  margin-left: -10px;
  margin-right: -10px;
  display: block;
`;
const TableColumn = styled.li`
  width: ${props => `${props.width}%`};
  padding: 0 1rem;
  float: left;
  margin-bottom: 40px;
  word-break: break-word;
`;

export default ({ rowWidth, viewState, dataState }) => {
  console.log(rowWidth);
  return (
    <Container>
      <TableWapper>
        {viewState === "event" ? (
          dataState.map((event, i) => {
            return (
              <TableColumn width={rowWidth} key={i}>
                <EventView
                  id={event.id}
                  title={event.title}
                  subTitle={event.subTitle}
                  period={event.period}
                  content={event.content}
                  thumbnail={event.thumbnail}
                />
              </TableColumn>
            );
          })
        ) : (
          <></>
        )}
      </TableWapper>
    </Container>
  );
};
