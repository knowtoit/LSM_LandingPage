// ** React Imports
import { Link } from 'react-router-dom'
import { Fragment, useState, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardHeader } from 'reactstrap'

// ** Styles
import '@styles/base/pages/page-knowledge-base.scss'

const KnowledgeBase = () => {

  const Content = ({ item }) => (
    <>
      <Card style={{alignItems:"center"}}>
    <CardHeader><b style={{fontWeight:"bold",fontSize:"25px",alignItems:"center"}}>Life Changing Process</b>
</CardHeader>
<CardBody style={{fontSize:"18px",display:"flex",alignItems:"center",color:"orange"}}>Your guide to finding the personal and professional improvement programs to fit your needs.

</CardBody>
       
      </Card>
    <Col className='kb-search-content'  md='4' sm='6'>
      <Card>
        <Link >
          <CardImg src="http://127.0.0.1:3001/src/assets/images/illustration/sales.svg" alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>Mentorship</h4>
            <p className='text-body mt-1 mb-0'>There is perhaps no better demonstration of the folly of image of our tiny world.
</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
    <Col className='kb-search-content'  md='4' sm='6'>
      <Card>
        <Link >
          <CardImg src="http://127.0.0.1:3001/src/assets/images/illustration/marketing.svg" alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>Motivate</h4>
            <p className='text-body mt-1 mb-0'>There is perhaps no better demonstration of the folly of image of our tiny world.
</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
    <Col className='kb-search-content'  md='4' sm='6'>
      <Card>
        <Link >
          <CardImg src="http://127.0.0.1:3001/src/assets/images/illustration/api.svg" alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>Explore</h4>
            <p className='text-body mt-1 mb-0'>There is perhaps no better demonstration of the folly of image of our tiny world.
</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
    <Col className='kb-search-content'  md='4' sm='6'>
      <Card>
        <Link >
          <CardImg src="http://127.0.0.1:3001/src/assets/images/illustration/personalization.svg" alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>Explore</h4>
            <p className='text-body mt-1 mb-0'>There is perhaps no better demonstration of the folly of image of our tiny world.
</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
    <Col className='kb-search-content'  md='4' sm='6'>
      <Card>
        <Link >
          <CardImg src="http://127.0.0.1:3001/src/assets/images/illustration/email.svg" alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>Explore</h4>
            <p className='text-body mt-1 mb-0'>There is perhaps no better demonstration of the folly of image of our tiny world.
</p>
          </CardBody>
        </Link>
      </Card>
    </Col>
    <Col className='kb-search-content'  md='4' sm='6'>
      <Card>
        <Link >
          <CardImg src="http://127.0.0.1:3001/src/assets/images/illustration/demand.svg" alt='knowledge-base-image' top />
          <CardBody className='text-center'>
            <h4>Support
</h4>
            <p className='text-body mt-1 mb-0'>There is perhaps no better demonstration of the folly of image of our tiny world.
</p>
          </CardBody>
        </Link>
      </Card>
    </Col>

    </>
  )

  const renderContent = () => {
    return <Content/>
  }

  return (
    <Fragment>
             <div id='knowledge-base-content'>
          <Row className='kb-search-content-info match-height'>{renderContent()}</Row>
        </div>
    </Fragment>
  )
}

export default KnowledgeBase
