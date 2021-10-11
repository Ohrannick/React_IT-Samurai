const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    // {
    //   id: 3,
    //   followed: false,
    //   fullname: "Sveta",
    //   img: "http://hypeava.ru/uploads/posts/2019-07/1563002947_1.jpg",
    //   status: "I'm a Hugo Boss",
    //   location: {
    //     city: "Moskow",
    //     country: "Russia",
    //   },
    // },
    // {
    //   id: 4,
    //   name: "Sasha",
    //   followed: true,
    //   img: "https://i.pinimg.com/736x/ec/47/62/ec47624e43faa7ebb8b5042b5158ab13.jpg",
    //   status: "I'm a Boss",
    //   location: {
    //     city: "Minsk",
    //     country: "Belarus",
    //   },
    // },
    // {
    //   id: 5,
    //   followed: false,
    //   name: "Victor",
    //   img: "https://www.meme-arsenal.com/memes/0978206358a772255b494b839659c3fa.jpg",
    //   status: "I'm a little Boss",
    //   location: {
    //     city: "Kiev",
    //     country: "Ukrain",
    //   },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        // users: [...state.users] идентичная запись через .map
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        // users: [...state.users] идентичная запись через .map
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
