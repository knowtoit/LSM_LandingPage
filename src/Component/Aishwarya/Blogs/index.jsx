import React from 'react'
import { Fragment } from 'react';
import BlogCard from './BlogCard';
import BlogCardHeader from './BlogCardHeader';


const Blogs = () => {
  return (
    <div>
        <BlogCardHeader/>
        <Fragment>
            <BlogCard/>
        </Fragment>
    </div>
  )
}

export default Blogs