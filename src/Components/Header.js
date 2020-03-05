import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GlobalText from "../GlobalText";
import { useMutation, useQuery } from "react-apollo-hooks";
import { LOG_OUT } from "../SharedQueries";
import DesktopHeader from "./Header/DesktopHeader";
import MobileHeader from "./Header/MoblieHeader";
import { gql } from "apollo-boost";
const ME = gql`
  query {
    me {
      username
    }
  }
`;

export default ({ isLoggedIn, platform }) => {
  let { pathname } = useLocation();
  const globalText = GlobalText();
  const [logoutMutation] = useMutation(LOG_OUT);
  const [hide, setHide] = useState(false);
  const [moblieTrigger, setMoblieTrigger] = useState(false);

  const [userName, setUserName] = useState("");
  const mobileOnClick = () => setMoblieTrigger(!moblieTrigger);

  const { data, loading, error } = useQuery(ME);

  useEffect(() => {
    const handleScroll = () => {
      const { pageYOffset } = window;
      if (pathname === "/") {
        if (pageYOffset === 0) {
          setHide(true);
        } else {
          setHide(false);
        }
      } else {
        setHide(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setUserName(data.me.username);
      }
      if (error) {
        setUserName(globalText.text_member);
      }
    }
  }, [loading, error, data, globalText]);

  const categoryArray = [
    {
      text: globalText.text_reserve,
      to: {
        pathname: "/reservation",
        state: undefined
      }
    },
    {
      text: globalText.text_infomation,
      to: {
        pathname: "/about",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_event,
      to: {
        pathname: "/event",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_free_board,
      to: {
        pathname: "/board/ck74d5iiz001b0734kmyiwdb7",
        state: {
          id: "ck74d5iiz001b0734kmyiwdb7"
        }
      }
    },
    {
      text: globalText.text_notice,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_center,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    },
    {
      text: globalText.text_roadmap,
      to: {
        pathname: "/",
        state: {
          id: ""
        }
      }
    }
  ];

  return (
    <>
      {platform === "desktop" ? (
        <DesktopHeader
          hide={hide}
          categoryArray={categoryArray}
          logoutMutation={logoutMutation}
          globalText={globalText}
          isLoggedIn={isLoggedIn}
        />
      ) : (
        <MobileHeader
          hide={hide}
          categoryArray={categoryArray}
          logoutMutation={logoutMutation}
          globalText={globalText}
          isLoggedIn={isLoggedIn}
          moblieTrigger={moblieTrigger}
          mobileOnClick={mobileOnClick}
          userName={userName}
        />
      )}
    </>
  );
};
