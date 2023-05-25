import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';
import blog5 from '../assets/images/blog5.jpg';
import blog6 from '../assets/images/blog6.jpg';

const blogData = [
    {
      id: 1,
      image: blog1,
      time: '15 Nov 2016',
      title: 'Coffee Lovers',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      image: blog2,
      time: '10 Nov 2016',
      title: 'Tips for UI Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      image: blog3,
      time: '07 Nov 2016',
      title: 'Beautiful Day',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
      link: 'https://www.twitter.com'
    }
]

export default function AppBlog() {
    return(
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Latest from Blog</h2>
                    <div className="subtitle">get our latest news from blog</div>
                </div>
                <Row>
                    {
                        blogData.map(blog => {
                            return(
                                <Col sm={4} key={blog.id}>
                                    <div className="holder">
                                        <Card>
                                            <time dateTime="">{blog.time}</time>
                                            <Card.Img variant="top" src={blog.image} />
                                                <Card.Body>
                                                    <Card.Title>{blog.title}</Card.Title>
                                                    <Card.Text>
                                                        {blog.description}
                                                    </Card.Text>
                                                    <a href='#' className='btn btn-primary'>Read More <i className='fas fa-chevron-right'></i></a>
                                                </Card.Body>
                                            </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }
                 
                </Row>
            </Container>
        </section>
    )
}