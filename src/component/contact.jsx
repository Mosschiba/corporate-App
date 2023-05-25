import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



export default function AppContact() {
    return(
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact us</h2>
                    <div className="subtitle">get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                        <Form.Control type='text' placeholder="Enter your full Name" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type='email' placeholder="Enter your email" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type='tel' placeholder="Enter your contact number" required  />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your message" required />
                        </Col>
                    </Row>
                    <div className="btn-holder">
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className="google-map">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57744.85959880085!2d55.2700698641527!3d25.235115379161513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43399f217b61%3A0x5fd70f3402712a8b!2sBur%20Dubai%20-%20Dubai!5e0!3m2!1sen!2sae!4v1684956215038!5m2!1sen!2sae" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            corporate@email.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            0000 000 00 00
                        </li>
                        <li>
                        <i className='fas fa-map-marker-alt'></i>
                            BurDubai, Dubai
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}