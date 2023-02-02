import React from 'react';
import styles from './section_6.module.css';

// Components
import Container from '../../common/container';
import Carousel from './carousel/carousel';

const carouselData = [
    {
        text: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse varius enim in
        eros elementum tristique. `,
        imgSrc: 'img/martin_ceo.png',
        name: 'Martin Eduard',
        role: 'CEO of Marketing',
        clickHandler: function(e) {
            e.preventDefault()
            window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
            '_blank'
            );
        }
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse varius enim in
        eros elementum tristique. `,
        imgSrc: 'img/martin_manager.png',
        name: 'Martin Eduard',
        role: 'Salesman',
        clickHandler: function(e) {
            e.preventDefault()
            window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
            '_blank'
            );
        }
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse varius enim in
        eros elementum tristique. `,
        imgSrc: 'img/martin_salesman.png',
        name: 'Martin Eduard',
        role: 'Sales Manager',
        clickHandler: function(e) {
            e.preventDefault()
            window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
            '_blank'
            );
        }
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse varius enim in
        eros elementum tristique. `,
        imgSrc: 'img/martin_ceo.png',
        name: 'Martin Eduard',
        role: 'CEO of Marketing',
        clickHandler: function(e) {
            e.preventDefault()
            window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
            '_blank'
            );
        }
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse varius enim in
        eros elementum tristique. `,
        imgSrc: 'img/martin_ceo.png',
        name: 'Martin Eduard',
        role: 'CEO of Marketing',
        clickHandler: function(e) {
            e.preventDefault()
            window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
            '_blank'
            );
        }
    },
    {
        text: `Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse varius enim in
        eros elementum tristique. `,
        imgSrc: 'img/martin_ceo.png',
        name: 'Martin Eduard',
        role: 'CEO of Marketing',
        clickHandler: function(e) {
            e.preventDefault()
            window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
            '_blank'
            );
        }
    }
]


class Section6 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <section className={styles.section}>
                <Container class={styles.container}>
                    <Carousel itemsData={carouselData} />
                </Container>
            </section>
        );
    }
}
 
export default Section6;