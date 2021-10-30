import "./normalize.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListWrapper from "./components/ListWrapper";

function App() {
  return (
    <>
      <Header appName="ShoppiZilla" className="header" />
      <main>
        <ListWrapper />
      </main>
      <Footer companyName="Buschbär &amp; Litty Inc" />
    </>
  );
}

export default App;
