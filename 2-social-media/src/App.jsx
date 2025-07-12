import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";
import { PostListProvider } from "./store/post-list-store";


function App() {
  const [selectedTab, setSelectedTb] = useState("Home");

  return (
    <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setSelectedTb={setSelectedTb} />
      <div className="content">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost></CreatePost>}

        <Footer></Footer>
      </div>
    </div>

    </PostListProvider>
  );
}

export default App;
