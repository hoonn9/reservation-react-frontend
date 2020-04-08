import React from "react";
import styled from "styled-components";
import { globalText } from "../GlobalText";
import { dateDetailConverter, numberWithCommas } from "../Utils";

const Container = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: ${(props) => (props.platform === "desktop" ? "75%" : "100%")};
  table-layout: fixed;
  margin: 0 auto;
  margin-bottom: 32px;
`;
const TableBody = styled.tbody`
  border: 1px ${(props) => props.theme.superLiteGreyColor} solid;
  background-color: ${(props) => props.theme.whiteColor};
`;
const TableHeader = styled.thead``;
const TableRow = styled.tr`
  border-bottom: 1px ${(props) => props.theme.superLiteGreyColor} solid;
`;
const TableTitleLabel = styled.th`
  font-size: ${(props) => (props.platform === "desktop" ? "26px" : "21px")};
  padding: 16px 0px;
  width: 50%;
  text-align: start;
`;
const TableLabel = styled.th`
  padding: 16px;
  width: 50%;
`;
const TableContent = styled.td`
  padding: 16px;
  width: 50%;
`;

export default ({
  platform,
  data: {
    noUser,
    guest,
    type,
    subType,
    checkIn,
    checkOut,
    count,
    adult,
    child,
    needs,
    price,
  },
}) => {
  return (
    <Container>
      <Table platform={platform}>
        <TableHeader>
          <TableRow>
            <TableTitleLabel platform={platform} colSpan="2">
              {globalText.text_reserve_user_info}
            </TableTitleLabel>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableLabel>{globalText.text_name}</TableLabel>
            <TableContent>{noUser.username}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_bio}</TableLabel>
            <TableContent>{noUser.bio}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_phone_num}</TableLabel>
            <TableContent>{noUser.phoneNum}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_email}</TableLabel>
            <TableContent>{noUser.email}</TableContent>
          </TableRow>
        </TableBody>
      </Table>
      <Table platform={platform}>
        <TableHeader>
          <TableRow>
            <TableTitleLabel platform={platform} colSpan="2">
              {globalText.text_guest_user_info}
            </TableTitleLabel>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableLabel>{globalText.text_name}</TableLabel>
            <TableContent>{guest.username}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_bio}</TableLabel>
            <TableContent>{guest.bio}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_phone_num}</TableLabel>
            <TableContent>{guest.phoneNum}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_email}</TableLabel>
            <TableContent>{guest.email}</TableContent>
          </TableRow>
        </TableBody>
      </Table>
      <Table platform={platform}>
        <TableHeader>
          <TableRow>
            <TableTitleLabel platform={platform} colSpan="2">
              {globalText.text_type_info}
            </TableTitleLabel>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableLabel>{globalText.text_type}</TableLabel>
            <TableContent>{type.typeName}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>
              {`${globalText.text_type} ${globalText.text_price}`}
            </TableLabel>
            <TableContent>{`₩ ${numberWithCommas(type.price)}`}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_sub_type}</TableLabel>
            <TableContent>{subType.subTypeName}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{`${globalText.text_sub_type} ${globalText.text_info}`}</TableLabel>
            <TableContent>{subType.description}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{`${globalText.text_sub_type} ${globalText.text_price}`}</TableLabel>
            <TableContent>{`₩ ${numberWithCommas(
              subType.price
            )}`}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_total}</TableLabel>
            <TableContent>{`₩ ${numberWithCommas(price)}`}</TableContent>
          </TableRow>
        </TableBody>
      </Table>
      <Table platform={platform}>
        <TableHeader>
          <TableRow>
            <TableTitleLabel platform={platform} colSpan="2">
              {globalText.text_add_info}
            </TableTitleLabel>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableLabel>{globalText.text_check_in}</TableLabel>
            <TableContent>{dateDetailConverter(checkIn)}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_check_out}</TableLabel>
            <TableContent>{dateDetailConverter(checkOut)}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{`${globalText.text_type} ${globalText.text_number}`}</TableLabel>
            <TableContent>{`${count}${globalText.text_count}`}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_adult}</TableLabel>
            <TableContent>{`${adult}${globalText.text_persons}`}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_child}</TableLabel>
            <TableContent>{`${child}${globalText.text_persons}`}</TableContent>
          </TableRow>
          <TableRow>
            <TableLabel>{globalText.text_option_request}</TableLabel>
            <TableContent>{needs}</TableContent>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};
