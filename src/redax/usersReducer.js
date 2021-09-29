const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = "SET_USERS";

let initialState = {
   users: [
   //    {
   //       id: 1, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
   //       followed: true, fullName: "Oksana", status: "I'm good", location: { city: "Minsk", country: "Belarus" }
   //    },
   //    {
   //       id: 2, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
   //       followed: false, fullName: "Misha", status: "all the best", location: { city: "Minsk", country: "Belarus" }
   //    },
   //    {
   //       id: 3, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
   //       followed: true, fullName: "Uliana", status: "I'm a queen", location: { city: "Minsk", country: "Belarus" }
   //    },
   ]
};
const usersReducer = (state = initialState, action) => {
   //   debugger;
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            // users: { ...state.users }//то же
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            })
         };


      case UN_FOLLOW:
         return {
            ...state,
            // users: { ...state.users }//то же
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            })
         };

      case SET_USERS:
         return { ...state, users: [...state.users, ...action.users] };


      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export default usersReducer;