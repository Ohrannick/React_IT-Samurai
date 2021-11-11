import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

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
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: new Date(),
        message: state.newPostText,
        source: "https://image.flaticon.com/icons/png/512/921/921000.png",
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReducer;
