import Content from "../pages/Content";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import MovieFilm from "../pages/MovieFilm";
import Trailer from "../pages/Trailer";
// Public routes
const publicRoutes = [
  {
    path: "/",
    component: Content,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
  {
    path: "/trailer/:id",
    component: Trailer,
  },
  {
    path: "/movieFilm/:id",
    component: MovieFilm,
    layout: null,
  },
];
// Phải đăng nhập mới vào được, còn không sẽ lái vào trang login
const privateRoutes = [];

export { publicRoutes, privateRoutes };
