export const navOptions = [
  {
    id: 1,
    displayText: "News",
    subItems: [],
    path: "/news",
  },
  {
    id: 2,
    displayText: "Fixture",
    subItems: [
      {
        id: 1,
        displayText: "Current Season",
        path: "",
      },
    ],
    path: "/fixture",
  },
  {
    id: 3,
    displayText: "Team",
    subItems: [
      {
        id: 1,
        displayText: "First Team",
        path: "/team/first",
      },
      {
        id: 2,
        displayText: "U-19",
        path: "/team/u19",
      },
    ],
    path: "/team",
  },
  {
    id: 4,
    displayText: "Shop",
    subItems: [
      {
        id: 1,
        displayText: "Kits",
        path: "/shop/kits",
      },
      {
        id: 2,
        displayText: "Merchandasing ",
        path: "/shop/merchandasing",
      },
    ],
    path: "/shop",
  },
  {
    id: 5,
    displayText: "Club",
    subItems: [
      {
        id: 1,
        displayText: "History",
        path: "/club/history",
      },
      {
        id: 2,
        displayText: "Membership",
        path: "/club/membership",
      },
    ],
    path: "/club",
  },
];
