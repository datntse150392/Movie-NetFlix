import Content from "../pages/Content";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import News from "../pages/News";
// Public routes
const publicRoutes = [
  {
    path: "/",
    component: Content,
    layout: "defaultLayout",
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/film/newFilm/",
    component: News,
    layout: "filmLayout",
  },
  {
    path: "/film/newFilm/:id",
    component: News,
    layout: "filmLayout",
  },
  {
    path: "/film/homePage/",
    component: HomePage,
    layout: "filmLayout",
  },
  {
    path: "/film/homePage/:id",
    component: HomePage,
    layout: "filmLayout",
  },
];
// Phải đăng nhập mới vào được, còn không sẽ lái vào trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
