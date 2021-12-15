import React, { Suspense, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "src/routes";
import PageLoading from "src/components/PageLoading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RenderRoutes data={routes} />
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              render={(props) => (
                <Fragment>
                  <Component {...props} />
                </Fragment>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}
