import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { CHECK_USER_RESERVATIONS } from "../MyPageQueries";
import { globalText } from "../../../GlobalText";
import Title from "../../../Components/Title";
import ReservationRow from "../../../Components/ReservationRow";
import ErrorAlert from "../../../Components/ErrorAlert";
import Loader from "../../../Components/Loader";
const Container = styled.div``;
const Wrapper = styled.div``;

const InfoTable = styled.table`
  width: 100%;
  margin: 0 auto;
`;

const MobileInfoTable = styled.table`
  width: 100%;
  margin: 0 auto;
  font-size: 15px;
`;

const InfoBox = styled.tbody``;
const InfoRow = styled.tr`
  width: 100%;
  border-bottom: 1px ${(props) => props.theme.liteGreyColor} solid;
`;
const InfoRowContent = styled.td`
  width: 100%;
`;

export default ({ platform }) => {
  const { data, loading, error } = useQuery(CHECK_USER_RESERVATIONS, {
    fetchPolicy: "cache-and-network",
  });
  return (
    <>
      {error ? (
        <ErrorAlert />
      ) : loading ? (
        <Loader />
      ) : (
        <Container>
          <Wrapper>
            <Title platform={platform} text={globalText.text_reserve_check} />
            {platform === "desktop" ? (
              <InfoTable>
                <InfoBox>
                  {data.userCheck.map((e, i) => {
                    return (
                      <InfoRow key={i}>
                        <InfoRowContent>
                          <ReservationRow
                            platform={platform}
                            id={e.id}
                            price={e.price}
                            roomName={e.room.name}
                            thumbnail={
                              e.room.files.length > 0
                                ? e.room.files[0].url
                                : null
                            }
                            packName={e.pack.name}
                            createdAt={e.createdAt}
                            checkIn={e.checkIn}
                            checkOut={e.checkOut}
                          />
                        </InfoRowContent>
                      </InfoRow>
                    );
                  })}
                </InfoBox>
              </InfoTable>
            ) : (
              <MobileInfoTable>
                <InfoBox>
                  {data.userCheck.map((e, i) => {
                    return (
                      <InfoRow key={i}>
                        <InfoRowContent>
                          <ReservationRow
                            platform={platform}
                            id={e.id}
                            price={e.price}
                            roomName={e.room.name}
                            thumbnail={
                              e.room.files.length > 0
                                ? e.room.files[0].url
                                : null
                            }
                            packName={e.pack.name}
                            createdAt={e.createdAt}
                            checkIn={e.checkIn}
                            checkOut={e.checkOut}
                          />
                        </InfoRowContent>
                      </InfoRow>
                    );
                  })}
                </InfoBox>
              </MobileInfoTable>
            )}
          </Wrapper>
        </Container>
      )}
    </>
  );
};
