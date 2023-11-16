import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <div className="ml-8">
        <Features />
      </div>
      
    </div>
  );
}

export default App;
