

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
  return newPostList;
};


export const PostListProvider=({children})=>{
const [postList,dispatchPostList]= useReducer(postListReducer,DEFAULT_POST_LIST);


const addPost = (userId, postTitle, postBody, reactions, tags) => {
  dispatchPostList({
    type: 'ADD_POST',
    payload: {
    id: Date.now(),
    title: postTitle,
    body: postBody,
    reactions: reactions,
    userId :userId,
    tags:tags
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

const DEFAULT_POST_LIST=[
  {

    id:'1',
    title:"Going to Mumbai",
    body:"Hii Friends,I am going to Mumbai for my vacations.Hope to enjoy a lot.Peace out.",
    reactions:2,
    userId:"user-9",
    tags:["vacation",'Mumbai','Enjoying']
  },
  {

    id:'2',
    title:"pass ho gaye bhai",
    body:"4 saal ki masti ke baad pass ho gaye bhai.Hard to believe.",
    reactions:15,
    userId:"user-12",
    tags:['Graduating','unbelievable']
  }
];



export default PostList;

