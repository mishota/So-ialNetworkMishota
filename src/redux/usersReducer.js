const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
   users: [
      // {
      //    id: 1, userPhoto: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
      //    followed: true, name: "Oksana", status: "I'm good", location: { city: "Minsk", country: "Belarus" }
      // },
      //    {
      //       id: 2, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
      //       followed: false, fullName: "Misha", status: "all the best", location: { city: "Minsk", country: "Belarus" }
      //    },
      //    {
      //       id: 3, photoUrl: "https://favim.com/orig/201105/26/anime-boy-cute-kagamine-len-vocaloid-Favim.com-55957.jpg",
      //       followed: true, fullName: "Uliana", status: "I'm a queen", location: { city: "Minsk", country: "Belarus" }
      //    },
   ],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false,


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
         return { ...state, users: action.users };


      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage };

      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.count };

      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }


      default:
         return state;
   }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (users) => {
   debugger; return (
      { type: SET_USERS, users }
   )
}
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;