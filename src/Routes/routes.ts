import { HOME_PATH, NEWS_PATH, WISH_LIST_PATH } from "../key/constants";
import Home from "../pages/Home";
import News from "../pages/News";
import WishList from "../pages/WishList";

// public private route
export const route = [
  {
    id: "home",
    name: "Home",
    path: HOME_PATH,
    element: Home,
    isPrivate: false,
  },
  {
    id: "news",
    name: "News",
    path: NEWS_PATH,
    element: News,
    isPrivate: false,
  },
  {
    id: "wish_list",
    name: "Wish List",
    path: WISH_LIST_PATH,
    element: WishList,
    isPrivate: true,
  }
]