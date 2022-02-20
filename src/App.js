import React from "react";
import { Route } from "react-router-dom";
import Dialogs from "./copmonents/Dialogs/Dialogs";
import Game from "./copmonents/Game/Game";
import HeaderContainer from "./copmonents/Header/HeaderContainer";
import Login from "./copmonents/Login/Login";
import Music from "./copmonents/Music/Music";
import Navbar from "./copmonents/Navbar/Navbar";
import News from "./copmonents/News/News";
import ProfileContainer from "./copmonents/Profile/ProfileContainer";
import Setting from "./copmonents/Setting/Setting";
import UsersContainer from "./copmonents/Users/UsersContainer";
import "./index.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <Dialogs />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/setting" render={() => <Setting />} />
        <Route path="/game" component={Game} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
