const initialState = {
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
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
