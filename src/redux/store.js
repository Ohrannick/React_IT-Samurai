import dialogReducer from "./dialog-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "===Hi Dimych, how are you? ",
          source:
            "https://i.pinimg.com/originals/db/43/46/db43463d7a017a65017e20aee86679c5.jpg",
          likesCount: 220,
        },
        {
          id: 2,
          message: "===Thanks Dimon, I am fine! ",
          source:
            "https://bipbap.ru/wp-content/uploads/2018/03/01-700x1050-640x960.jpg",
          likesCount: 229,
        },
      ],
      newPostText: "IT-kamasutra",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Dimych",
          img: "https://bipbap.ru/wp-content/uploads/2017/07/2-2.png",
        },
        {
          id: 2,
          name: "Andrey",
          img: "http://pristor.ru/wp-content/uploads/2017/04/%D0%9A%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B8-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%B2-%D0%92%D0%9A-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-15.jpg",
        },
        {
          id: 3,
          name: "Sveta",
          img: "http://hypeava.ru/uploads/posts/2019-07/1563002947_1.jpg",
        },
        {
          id: 4,
          name: "Sasha",
          img: "https://i.pinimg.com/736x/ec/47/62/ec47624e43faa7ebb8b5042b5158ab13.jpg",
        },
        {
          id: 5,
          name: "Victor",
          img: "https://www.meme-arsenal.com/memes/0978206358a772255b494b839659c3fa.jpg",
        },
        {
          id: 6,
          name: "Valera",
          img: "https://i.pinimg.com/564x/56/82/e0/5682e05a59322c680881659646be63f0.jpg",
        },
      ],
      messages: [
        { id: 1, message: "=Hi!!!" },
        { id: 2, message: "=How is your it-kamasutra!!!" },
        { id: 3, message: "-Yooo" },
        { id: 4, message: "-Yoo" },
        { id: 5, message: "-Yo" },
      ],
      newMessageText: "My new mess",
    },

    navbarPage: {
      friends: [
        {
          id: 3,
          name: "Sveta",
          img: "http://hypeava.ru/uploads/posts/2019-07/1563002947_1.jpg",
        },
        {
          id: 4,
          name: "Sasha",
          img: "https://i.pinimg.com/736x/ec/47/62/ec47624e43faa7ebb8b5042b5158ab13.jpg",
        },
        {
          id: 5,
          name: "Victor",
          img: "https://www.meme-arsenal.com/memes/0978206358a772255b494b839659c3fa.jpg",
        },
      ],
    },
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
