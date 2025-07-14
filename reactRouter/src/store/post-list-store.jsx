

import {createContext, useReducer} from 'react';



const PostList=createContext({
  postList:[],
  addPost: ()=>{},
  deletePost: ()=> {}
});



const postListReducer=(currPostList,action)=>{
  let newPostList=currPostList;
  if(action.type==='DELETE_POST'){
  newPostList=currPostList.filter(post=> post.id !== action.payload.postId);
  // agar cond false hai to delete otherwise nothing

//   filter() is an array method that returns a new array containing only the elements that satisfy the given condition.
// It does not modify the original array.
// For each post in currPostList, include it in the new array only if its id is not equal to the postId you want to delete.
  }
  else if (action.type === 'ADD_POST') {
  newPostList=[action.payload, ...currPostList];
  // the spread operator ... is used to unpack all elements of currPostList and insert them into a new array, with action.payload added at the front.
}
else if (action.type === 'ADD_INITIAL_POSTS') {
newPostList=action.payload.posts;
}
  return newPostList;
};


export const PostListProvider=({children})=>{
const [postList,dispatchPostList]= useReducer(postListReducer,[]);






const addPost = (post) => {
  dispatchPostList({
    type: 'ADD_POST',
    payload: post
  });
};


const addInitialPosts = (posts) => {
  dispatchPostList({
    type: 'ADD_INITIAL_POSTS',
    payload: {
    posts
     }
  });
};


const deletePost=(postId)=>{
  dispatchPostList({
    type:'DELETE_POST',
    payload:{
      postId
    }
  })
};




return (
<PostList.Provider 
value={
 { 
  postList,
  addPost,
  deletePost
}
  }>
{children}
</PostList.Provider>
)
};



export default PostList;

