import Content from "../pages/Content";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import MovieFilm from "../pages/MovieFilm";
import News from "../pages/News";
import Trailer from "../pages/Trailer";
// Public routes
const publicRoutes = [
  {
    path: "/",
    component: Content,
  },
  {
    path: "/film/detail/:id",
    component: Detail,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/film/trailer/:id",
    component: Trailer,
  },
  {
    path: "/film/movieFilm/:id",
    component: MovieFilm,
    layout: null,
  },
  {
    path: "/film/newFilm/",
    component: News,
  },
];
// Phải đăng nhập mới vào được, còn không sẽ lái vào trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
