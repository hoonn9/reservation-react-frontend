import { globalText } from "../GlobalText";

export const categoryArray = [
  {
    text: globalText.text_reserve,
    to: {
      pathname: "/reservation",
      state: undefined,
    },
  },
  {
    text: globalText.text_infomation,
    to: {
      pathname: "/about",
      state: {
        id: "",
      },
    },
  },
  {
    text: globalText.text_event,
    to: {
      pathname: "/event",
      state: {
        id: "",
      },
    },
  },
  {
    text: globalText.text_free_board,
    to: {
      pathname: "/board/ck74d5iiz001b0734kmyiwdb7",
      state: {
        id: "ck74d5iiz001b0734kmyiwdb7",
      },
    },
  },
  {
    text: globalText.text_notice,
    to: {
      pathname: "/notice",
      state: {
        id: "ck7u4vv4t00bu0797n1hkw0mg",
      },
    },
  },
  {
    text: globalText.text_center,
    to: {
      pathname: "/center",
      state: undefined,
    },
  },
  {
    text: globalText.text_roadmap,
    to: {
      pathname: "/infomation",
      state: {
        id: "",
      },
    },
  },
];
