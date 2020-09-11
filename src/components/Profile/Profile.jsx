import React from 'react';
import MyPosts from './MyPosts/MyPosts' ;
import classes from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    let posts = [
        {id: 1, message: 'Hey Wassup'},
        {id: 2, message: 'Hey How are you'},
        {id: 3, message: 'Check my status'},
        {id: 4, message: 'Did you do  home work'},
        {id: 5, message: 'Lets Hangout'},
        {id: 6, message: 'Send me your picture '}

    ]

    return (
        <div>

            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}
            newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}


export default Profile;