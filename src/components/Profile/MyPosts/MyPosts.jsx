import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
 /*   let dialogs = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Viktor'},
        {id: 3, name: 'Olimjon'},
        {id: 4, name: 'Tanya'},
        {id: 5, name: 'Dilsuz'},
        {id: 6, name: 'Nastya'}

    ]*/
    let postData = [
        {id: 1, message: 'Hello how are you doing', likesCount: 15},
        {id: 2, message: 'Share our network', likesCount: 27}
    ]
    let postsElement = postData.map(postData => <Post message={postData.message} likeCount={postData.likesCount}/>);


    return (
        <div className={classes.postsBlock}>
            <h4> My Posts</h4>
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button> Share</button>
                    <button>Reset</button>
                    <div>
                        {postsElement}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyPosts;