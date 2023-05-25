import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

export default function AppAbout(){
    const html = 80;
    const responsive = 95;  
    const photoshop = 80;  
    return (
        <section id='about' className='block about-block'>
            <Container fluid >
                <div className='title-holder'>
                    <h2>About us</h2>
                    <div className='subtilte'>Learn More about us</div>
                </div>
                <Row>
                    <Col sm={6}><Image src={img1}/></Col>
                    <Col sm={6}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quod blanditiis voluptate odit accusamus alias quam deleniti eius suscipit consequuntur vero earum quo, incidunt similique nesciunt dolorum, inventore nihil quae.
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius deleniti sit incidunt, a quaerat dolore mollitia soluta architecto dolorum odit tempora commodi at ab culpa minus laudantium voluptate magnam provident.</p>

                    <div className="progress-block">
                        <h4>HTML / CSS / JAVASCRIPT</h4>
                        <ProgressBar now={html} label={`${html}%`}/></div>
                    <div className="progress-block">
                        <h4>RESPONSIVE</h4>
                        <ProgressBar now={responsive} label={`${responsive}%`}/>
                    </div>
                    <div className="progress-block">
                        <h4>PHOTOSHOP</h4>
                        <ProgressBar now={photoshop} label={`${photoshop}%`}/>
                    </div>
                    
                    </Col>
                </Row>
            </Container>
        </section>
    )
}