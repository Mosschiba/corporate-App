import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import imgHero1 from '../assets/images/img-hero1.jpg';
import imgHero2 from '../assets/images/img-hero2.jpg';
import imgHero3 from '../assets/images/img-hero3.jpg';

var heroData = [
  {
    id: 1,
    image: imgHero1,
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: imgHero2,
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: imgHero3,
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
];

export default function HeroApp(){
    
  return (
        <section id='home' className='hero-block'>
            <Carousel>
                {
                heroData.map(hero => {
                  return(
                    <Carousel.Item key={hero.id}>
                    <img
                        className="d-block w-100"
                        src={hero.image}
                        alt={"slide" + hero.id}
                    />
                    <Carousel.Caption>
                        <h3>{hero.title}</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <a href={hero.link} className='btn btn-primary'>Learn More<i className="fas fa-chevron-right"></i></a>
                    </Carousel.Caption>
                    </Carousel.Item>
                        )
                    })
                }
            </Carousel>
                                                  
                
                
  </section>
  )
}

