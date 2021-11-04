const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
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
      return { ...state, users: action.users };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount / 50,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default usersReducer;
