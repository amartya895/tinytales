import Features from "./components/Features";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Profile from "./components/Profile";
import profileInfo from "./utils/data.json";

function App() {
  const info = profileInfo.users[0];

  return (
    <div className="">
      <Navbar />
      <Profile
        name={info.name}
        follower={info.followers}
        following={info.following}
        position={info.position}
        instaid={info.instagram_id}
      />
      <div className="ml-8">
        <Features
          star={info.star}
          like={info.like}
          view={info.views}
          heart={info.heart}
        />
      </div>
      <div className="p-2 text-blue-500 inline-block mt-4 rounded-tr-md font-semibold text-lg border-t-2 border-r-2">
        {info.postcount} Posts
      </div>
      <div className="w-[74%] bg-gray-400 border-b-2 ml-[100px]"></div>
      {info.posts.map((post,index) => {
        return (
          <PostCard
          key={index}
            title={post.title}
            desc={post.description}
            typedesc={post.typeDesc}
            time={post.post_time}
            readtime={post.post_read_time}
            view={post.post_view}
            name={info.name.toLowerCase().split(' ').join("")}
          />
        );
      })}
    </div>
  );
}

export default App;
