import {rerenderEntireTree} from "../../render";


let state = {
    profilePage: {
        posts:
            [
                {id: 1, message: 'Hello how are you doing', likesCount: 15},
                {id: 2, message: 'Share our network', likesCount: 27}
            ],

    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Viktor'},
            {id: 3, name: 'Olimjon'},
            {id: 4, name: 'Tanya'},
            {id: 5, name: 'Dilsuz'},
            {id: 6, name: 'Nastya'}

        ],
        messages: [
            {id: 1, message: 'Hey Wassup'},
            {id: 2, message: 'Hey How are you'},
            {id: 3, message: 'Check my status'},
            {id: 4, message: 'Did you do  home work'},
            {id: 5, message: 'Lets Hangout'},
            {id: 6, message: 'Send me your picture '}

        ]
    },
sidebar: {  }
}
  export  let addPost = (postMessage) =>{

    let newPost = {
        id: state.profilePage.posts.length,
        message: postMessage,
        likesCount: 0
    };
state.profilePage.posts.push(newPost);
rerenderEntireTree (state) ;
 }

export default state;