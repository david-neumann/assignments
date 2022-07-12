import React from 'react';

export default function BlogPost(props) {
    return (
        <section className='blog-post'>
            <a href=''>
                <h2 className='blog-post--title'>{props.title}</h2>
                <h4 className='blog-post--subtitle'>{props.subTitle}</h4>
            </a>
            <p className='blog-post--meta'>
                Posted by <a href='' className='blog-post--meta-author'>{props.author}</a> on {props.date}
            </p>
        </section>
    )
}