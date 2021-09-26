import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "./copmonents/Dialogs/Dialogs";
import Friends from "./copmonents/Friends/Friends";
import Game from "./copmonents/Game/Game";
import Header from "./copmonents/Header/Header";
import Music from "./copmonents/Music/Music";
import { Navbar } from "./copmonents/Navbar/Navbar";
import News from "./copmonents/News/News";
import Profile from "./copmonents/Profile/Profile";
import Setting from "./copmonents/Setting/Setting";
import "./index.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.navbarPage} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/game" component={Game} />
          <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
