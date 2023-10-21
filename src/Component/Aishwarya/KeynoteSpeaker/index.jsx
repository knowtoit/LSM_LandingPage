import React from 'react'
import { Fragment } from 'react';
import BlogCard from './BlogCard';
import BlogCardHeader from './BlogCardHeader';
import KeynoteSpeaker from './KeynoteSpeaker';
import KeynoteHeader from './KeynoteHeader'


const Blogs = () => {
  return (
    <div>
        <KeynoteHeader/>
        <Fragment>
            <KeynoteSpeaker/>
        </Fragment>
    </div>
  )
}

export default Blogs