import React, { useEffect, useCallback } from "react";
import InfomationPresenter from "./InfomationPresenter";
import GlobalText from "../../GlobalText";
import Map from "../../Components/Map";

const addMarker = (map, link) => {
  const marker = new window.google.maps.Marker({
    map,
    position: link.coords,
    label: ``,
    title: link.title
  });

  marker.addListener(`click`, () => {
    window.location.href = link.url;
  });
};

export default () => {
  const globalText = GlobalText();
  const link = {
    coords: { lat: 37.5326, lng: 127.0246122 }, // required: latitude & longitude at which to display the marker
    title: `Life, the Universe and Everything`, // optional
    url: `https://wikipedia.org/wiki/Life,_the_Universe_and_Everything` // optional
  };

  const mapProps = {
    options: {
      center: { lat: 37.5326, lng: 127.024612 },
      zoom: 15
    },
    onMount: addMarker,
    onMountProps: link
  };

  const MemoMap = useCallback(<Map {...mapProps} />, []);

  useEffect(() => {}, []);
  return (
    <div className="body-content">
      <InfomationPresenter MemoMap={MemoMap} globalText={globalText} />
    </div>
  );
};
