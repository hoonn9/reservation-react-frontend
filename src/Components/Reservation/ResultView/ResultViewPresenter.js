import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Popup from "reactjs-popup";
import CloseIcon from "@material-ui/icons/Close";
import { getUri } from "../../../Utils";
import TouchSlideView from "../../TouchSlideView";

const Wrapper = styled.div`
  width: 100%;
`;
const ContentWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 350px;
  clear: both;
`;
const GalleryWrapper = styled.div`
  width: 720px;
  height: 100%;
  background-color: transparent;
`;
const GalleryButtonWrapper = styled.div`
  text-align: end;
`;
const StyledPopup = styled(Popup)`
  &-content {
    background-color: transparent !important;
    border: 0 !important;
  }
`;
const GalleryButton = styled.button`
  width: 32px;
  height: 48px;
  background-color: transparent;
  z-index: 50;
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  float: left;
  width: 30%;
  height: 100%;
  padding: 16px 0px;
  overflow: hidden;
  cursor: pointer;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
const InfoWrapper = styled.div`
  position: relative;
  float: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding: 32px;
`;
const InfoCenter = styled.div`
  display: block;
`;
const NameText = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 600;
  padding: 16px 0;
`;
const PriceText = styled.div`
  display: block;
  font-size: 21px;
  font-weight: 500;
  color: ${props => props.theme.blueColor};
  padding: 16px 0;
`;
const MoreButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 16px;
  vertical-align: middle;
  cursor: pointer;
`;
const MoreButton = styled.button`
  font-size: 18px;
  height: 2rem;
  float: left;
  background-color: transparent;
`;
const MoreWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 32px 0px;
  background-color: ${props => props.theme.superLiteGreyColor};
`;

const MoreInfoWrapper = styled.div`
  position: relative;
  float: left;
  width: 80%;
  height: 100%;
  padding: 32px;
  border: solid 1px ${props => props.theme.blackColor};
`;
const MoreNameText = styled.div`
  display: block;
  font-size: 24px;
  font-weight: 500;
  padding: 16px 0;
`;
const MoreDecText = styled.div`
  display: block;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 0;
`;
const MorePriceText = styled.div`
  display: block;
  font-size: 21px;
  font-weight: 500;
  color: ${props => props.theme.blueColor};
  padding: 16px 0;
`;
const SelectButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  top: 0px;
  width: 20%;
  right: 0px;
  justify-content: center;
  align-items: center;
`;
const SelectButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  background-color: ${props => props.theme.redColor};
  color: ${props => props.theme.whiteColor};
  cursor: pointer;
`;
export default ({
  type,
  globalText,
  moreOnClick,
  toggle,
  setSelectType,
  setSelectSubType,
  galleryToggle,
  setGalleryToggle,
  slideViewArray
}) => {
  return (
    <>
      <StyledPopup
        open={galleryToggle}
        modal
        closeOnDocumentClick
        onClose={() => setGalleryToggle(false)}
      >
        <GalleryWrapper>
          <GalleryButtonWrapper>
            <GalleryButton
              onClick={() => {
                setGalleryToggle(false);
              }}
            >
              <CloseIcon
                style={{ color: "#FDFDFD", width: "32px", height: "32px" }}
              />
            </GalleryButton>
          </GalleryButtonWrapper>
          <TouchSlideView data={slideViewArray} type="popup" />
        </GalleryWrapper>
      </StyledPopup>
      <Wrapper>
        <ContentWrapper>
          <ThumbnailWrapper
            onClick={() => {
              setGalleryToggle(true);
            }}
          >
            <Thumbnail src={getUri() + `images/About/${type.id}/1.jpg`} />
          </ThumbnailWrapper>
          <InfoWrapper>
            <InfoCenter>
              <NameText>{type.typeName}</NameText>
              <PriceText>￦ {type.price} ~</PriceText>
            </InfoCenter>
            <MoreButtonWrapper onClick={moreOnClick}>
              <MoreButton disabled>{globalText.text_more_info}</MoreButton>
              <ExpandMoreIcon style={{ width: "2rem", height: "2rem" }} />
            </MoreButtonWrapper>
          </InfoWrapper>
        </ContentWrapper>

        {toggle ? (
          <>
            <MoreWrapper>
              <MoreInfoWrapper>
                <MoreNameText>Room Only</MoreNameText>
                <MoreDecText>Basic</MoreDecText>
                <MorePriceText>￦ {type.price}</MorePriceText>
                <SelectButtonWrapper
                  onClick={() => {
                    setSelectType({
                      id: type.id,
                      name: type.typeName,
                      price: type.price
                    });
                    setSelectSubType({ price: 0 });
                  }}
                >
                  <SelectButton>선택</SelectButton>
                </SelectButtonWrapper>
              </MoreInfoWrapper>
            </MoreWrapper>
            {type.subTypes.map((subType, i) => {
              return (
                <MoreWrapper key={i}>
                  <MoreInfoWrapper>
                    <MoreNameText>{subType.subTypeName}</MoreNameText>
                    <MoreDecText>{subType.description}</MoreDecText>
                    <MorePriceText>
                      ￦ {type.price + subType.price}
                    </MorePriceText>
                    <SelectButtonWrapper
                      onClick={() => {
                        setSelectType({
                          id: type.id,
                          name: type.typeName,
                          price: type.price
                        });
                        setSelectSubType({
                          id: subType.id,
                          name: subType.subTypeName,
                          price: subType.price
                        });
                      }}
                    >
                      <SelectButton>선택</SelectButton>
                    </SelectButtonWrapper>
                  </MoreInfoWrapper>
                </MoreWrapper>
              );
            })}
          </>
        ) : null}
      </Wrapper>
    </>
  );
};
