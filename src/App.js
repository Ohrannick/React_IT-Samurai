import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "./copmonents/Dialogs/Dialogs";
import Friends from "./copmonents/Friends/Friends";
import Game from "./copmonents/Game/Game";
import Header from "./copmonents/Header/Header";
import Music from "./copmonents/Music/Music";
import Navbar from "./copmonents/Navbar/Navbar";
import News from "./copmonents/News/News";
import Profile from "./copmonents/Profile/Profile";
import Setting from "./copmonents/Setting/Setting";
import UsersContainer from "./copmonents/Users/UsersContainer";
import "./index.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/setting" render={() => <Setting />} />
        <Route path="/game" component={Game} />
        <Route path="/friends" render={() => <Friends />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
