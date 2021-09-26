const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: new Date(),
        message: state.newPostText,
        source: "https://image.flaticon.com/icons/png/512/921/921000.png",
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
