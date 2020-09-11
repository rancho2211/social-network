import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
        <div>

            <div className={classes.content}>
            <img src='https://smatu.net/wp-content/uploads/2016/04/Social-Network-Internet-Online-Society-Connecting-Social-Media-C-000069923499_Large.jpg'/>
    </div>
        <div className={ classes.descriptionBlock}>
        ava + description
            <div className={classes.animation}>
            </div>
    </div>
        </div>
)
}


export default ProfileInfo;