import Features from "./components/Features";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="">
      <Navbar />
      <Profile />
      <div className="ml-8">
        <Features />
      </div>
      <div className="p-2 text-blue-500 inline-block mt-4 rounded-tr-md font-semibold text-lg border-t-2 border-r-2">
        134 Posts
      </div>
      <div className="w-[73%] bg-gray-400 border-b-2 ml-[100px]"></div>
      <PostCard/>
    </div>
  );
}

export default App;
