import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.png';
import team4 from '../assets/images/team4.jpg';
import team5 from '../assets/images/team5.jpg';
import team6 from '../assets/images/team6.jpg';
import team7 from '../assets/images/team7.jpg';
import team8 from '../assets/images/team8.jpg';



const teamsData = [
    {
      id: 1,
      image: team1,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Gabriel Hart',
      designation: 'CEO',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 2,
      image: team2,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Antony',
      designation: 'Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 3,
      image: team3,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Noujoud Baklouti',
      designation: 'UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 4,
      image: team4,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sarah Wills',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 5,
      image: team5,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Sophia Pitt',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 6,
      image: team6,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Taylor Lopez',
      designation: 'Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 7,
      image: team7,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'Ryan Giggs',
      designation: 'Content Writer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    },
    {
      id: 8,
      image: team8,
      fbLink: 'https://www.facebook.com',
      twitterLink: 'https://www.twitter.com',
      linkedinLink: 'https://www.linkedin.com',
      name: 'David Smith',
      designation: 'SEO Expert',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
    }
  ]

export default function AppTeams(){
    return(
        <section id='teams' className='block teams-block'>
            <Container fluid>
                <div className="title-holder">
                    <h2>Our Teams</h2>
                    <div className="subtitle">Some of our Experts</div>
                </div>
                <Row>
                    {
                        teamsData.map(teams =>{
                            return(
                                <Col sm={3} key={teams.id}>
                                    <div className="image">
                                    <Image src={teams.image} alt='Image'/>
                                <div className="overlay">
                                    <div className="socials">
                                        <ul>
                                            <li><a href={teams.fbLink}><i className='fab fa-facebook-f'></i></a></li>
                                            <li><a href={teams.twitterLink}><i className='fab fa-twitter'></i></a></li>
                                            <li><a href={teams.linkedinLink}><i className='fab fa-linkedin'></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="content">
                                    <h3>{teams.name}</h3>
                                    <span className='designation'>{teams.designation}</span>
                                    <p>{teams.description}</p>
                                </div>
                            </Col>
                            )
                        } )
                    }
                   
                </Row>
            </Container>
        </section>

    )
}