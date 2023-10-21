// ** Reactstrap Imports
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'

// ** Images
import img1 from '@src/assets/images/slider/04.jpg'


const CardTitles = (cols) => {
    const colsProps = cols ? cols : { md: 4, xs: 12 }
  return (
    <Row className='match-height' style={{justifyContent:"center"}}>
      <Col lg='3' md='6'>
        <Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle tag='h4'>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button color='primary' outline>
              Go Somewhere
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg='3' md='6'>
        <Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle tag='h4'>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button color='primary' outline>
              Go Somewhere
            </Button>
          </CardBody>
        </Card>
      </Col>
      <Col lg='3' md='6'>
        <Card>
          <CardImg top src={img1} alt='Card cap' />
          <CardBody>
            <CardTitle tag='h4'>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button color='primary' outline>
              Go Somewhere
            </Button>
          </CardBody>
        </Card>
      </Col>
      
    </Row>
  )
}

export default CardTitles
