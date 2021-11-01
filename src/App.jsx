import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { AuthContext as authContext } from "./context/authContext";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ListPage from "./pages/list";
import "./normalize.css";
import "./App.css";

function App() {
  const { loading } = useContext(authContext);

  return (
    <>
      {loading ? (
        <main>
          <CircleLoader />
        </main>
      ) : (
        <MainLayout>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/list" component={ListPage} />
          </Switch>
        </MainLayout>
      )}
    </>
  );
}

export default App;
