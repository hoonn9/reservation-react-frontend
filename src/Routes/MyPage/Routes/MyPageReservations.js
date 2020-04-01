import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { CHECK_USER_RESERVATIONS } from "../MyPageQueries";
import { globalText } from "../../../GlobalText";
import Title from "../../../Components/Title";
import ReservationRow from "../../../Components/ReservationRow";
import { getUri } from "../../../Utils";
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
  border-bottom: 1px ${props => props.theme.liteGreyColor} solid;
`;
const InfoRowLabel = styled.th`
  width: 30%;
  text-align: center;
  vertical-align: middle;
`;
const InfoRowContent = styled.td`
  width: 100%;
`;
const InfoRowButton = styled.button`
  padding: 8px 16px;
`;

const InputContainer = styled.div``;
const InputWrapper = styled.div`
  padding: 16px 0px;
`;
const MobileInputWrapper = styled.div`
  padding: 8px 0px;
`;
const InputLabel = styled.label`
  display: inline-block;
  width: 30%;
  font-weight: 500;
`;
const MobileInputLabel = styled.label`
  display: block;
  font-weight: 500;
  padding: 16px 0px;
`;
const AlertText = styled.div`
  font-weight: 500;
  color: ${props => props.theme.redColor};
  text-align: end;
`;
const InputInner = styled.div`
  position: relative;
  display: inline-block;
  width: 70%;
`;
const MobileInputInner = styled.div`
  position: relative;
  display: block;
`;

export default ({ platform }) => {
  const { data, loading, error } = useQuery(CHECK_USER_RESERVATIONS, {
    fetchPolicy: "cache-and-network"
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
                            typeName={e.type.typeName}
                            thumbnail={
                              e.type.files.length > 0
                                ? getUri() + e.type.files[0].url
                                : null
                            }
                            subTypeName={e.subType.subTypeName}
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
                            typeName={e.type.typeName}
                            thumbnail={
                              e.type.files.length > 0
                                ? getUri() + e.type.files[0].url
                                : null
                            }
                            subTypeName={e.subType.subTypeName}
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
