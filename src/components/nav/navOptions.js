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
        path: "/team/firstTeam",
      },
      {
        id: 2,
        displayText: "U-19",
        path: "/team/u19",
      },
    ],
    path: "/team/firstTeam",
  },
  {
    id: 4,
    displayText: "Store",
    subItems: [
      {
        id: 1,
        displayText: "Kits",
        path: "/store/kits",
      },
      {
        id: 2,
        displayText: "Merchandasing ",
        path: "/store/merchandasing",
      },
    ],
    path: "/store",
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
