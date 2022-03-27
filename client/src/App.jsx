import { Header, Welcome, Footer, Transactions } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#141414]">
        <Header />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
