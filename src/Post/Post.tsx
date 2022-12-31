import React from 'react';
import s from './SCSS/Post.module.scss'
import photo from './IMAGES/pexels-specna-arms-889709.jpg'

export const Post = () => {
    return (
        <div className={s.main}>
            <div className={s.main_wrapper}>
                <div ><img src={photo} className={s.main_photo} alt="photo"/></div>
            </div>
        </div>
    );
};

