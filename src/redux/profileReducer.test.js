import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";


// 1. test data
let initialState = {
   posts: [
      { id: 1, message: "How are you", LikeCount: 10 },
      { id: 1, message: "I'm happy", LikeCount: 15 },
   ],
};

test('new post should be added', () => {
   let action = addPostActionCreator("Mishotik test")

   // 2. action
   let newState = profileReducer(initialState, action);

   // expectations
   expect(newState.posts.length).toBe(3);
});

test('text should be Mishotik test', () => {
   let action = addPostActionCreator("Mishotik test")

   // 2. action
   let newState = profileReducer(initialState, action);

   // expectations
   expect(newState.posts[3].message).toBe("Mishotik test");
});

test('new post should be deleted', () => {

   let action = deletePost(1);
   // 2. action
   let newState = profileReducer(initialState, action);

   // expectations
   expect(newState.posts.length).toBe(1);



});
