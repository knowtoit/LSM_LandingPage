// ** React Imports
import { Fragment } from 'react';
import "./style.css";
import CardTitles from './Testimonials/CardTitles';
import Testimonials from './Testimonials';
import Blogs from './Blogs';
import KeynoteSpeaker from "./KeynoteSpeaker/KeynoteSpeaker"



// ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs'

const LastSection = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs title='Basic Cards' data={[{ title: 'Cards' }, { title: 'Basic Cards' }]} /> */}
      <Testimonials />
      <Blogs/>
      <KeynoteSpeaker />
    </Fragment>
  )
}

export default LastSection 
