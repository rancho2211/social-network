import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import state, {addPost,} from "../../redux/state";


const MyPosts = (props) => {


    let newPostElement = React.createRef();


    let onPostChange = () => {
    }
    let addPost = () => {
        let text = newPostElement.current.value;

        props.addPost(text);
        newPostElement.current.value = ""
    }

    //let postsElement = postData.map(postData => <Post message={postData.message} likeCount={postData.likesCount}/>);
    return (
        <div className={classes.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}> add post</button>
                    <div>
                        {state.profilePage.posts.map(item => <Post message={item.message}
                                                                   likeCount={item.likesCount}/>).reverse()}

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyPosts;