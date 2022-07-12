import React from 'react';
import BlogPost from './BlogPost';
import data from '../data';

export default function BlogList() {
    const blogPosts = data.map(post => <BlogPost {...post} />)
    
    return (
        <main>
            <div className='blog-list'>
                {blogPosts}
                <div className='button--older-posts'>
                    <button>Older Posts →</button>
                </div>
            </div>
        </main>
    )
}