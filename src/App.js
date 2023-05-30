import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./components/Layout";
import { publicRoutes } from "./routes";
import { Fragment } from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
