import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

// Styles
import styles from './carousel.css';
import '../../../../../node_modules/react-owl-carousel2/lib/styles.css';

// Components
import Item from './item/item';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
        this.navClickHandler = this.navClickHandler.bind(this);
        // this.navClickRepair = this.navClickRepair.bind(this);
    }

    navClickHandler(e) {
        e.preventDefault()
        window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
        '_blank'
        );
    }

    mouseMoveHandler = (e) => {
        // ELEMENTS
        const nav_carousel = document.querySelector('.owl-nav');
        const nav_prev = document.querySelector('.owl-prev');
        const nav_next = document.querySelector('.owl-next');
        const items = document.querySelectorAll('.item');

        // ARRAY FOR CURSOR
        const classes = [];

        // COORDINATES
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const nav_coordinates = nav_carousel.getBoundingClientRect();
        const nav_prev_coordinates = nav_prev.getBoundingClientRect();
        const nav_next_coordinates = nav_next.getBoundingClientRect();

        // CURSOR IN ELEMENT CHECK
        const cursor_over_nav = (nav_coordinates.left < mouseX)
        && (nav_coordinates.right > mouseX)
        && (nav_coordinates.top < mouseY)
        && (nav_coordinates.bottom > mouseY);
        const cursor_over_nav_prev = (nav_prev_coordinates.left < mouseX)
        && (nav_prev_coordinates.right > mouseX)
        && (nav_prev_coordinates.top < mouseY)
        && (nav_prev_coordinates.bottom > mouseY);
        const cursor_over_nav_next = (nav_next_coordinates.left < mouseX)
        && (nav_next_coordinates.right > mouseX)
        && (nav_next_coordinates.top < mouseY)
        && (nav_next_coordinates.bottom > mouseY);

        // EVERY ITEM CLASS CHECK
        items.forEach((item, i) => {
            const coordinates = item.getBoundingClientRect();
            const cursor_over_item = (coordinates.left < mouseX)
            && (coordinates.right > mouseX)
            && (coordinates.top < mouseY)
            && (coordinates.bottom > mouseY);

            // CURSOR AND COLOR
            if (cursor_over_item && cursor_over_nav) {
                classes[i] = 'mouseOver'
                item.classList.add('mouseOver');
            } else {
                classes[i] = ''
                item.classList.remove('mouseOver');
            }

            // NAV BUTTONS COLOR
            if (cursor_over_nav_prev || cursor_over_nav_next) {
                item.classList.remove('mouseOver');
                nav_carousel.removeEventListener('click', this.navClickHandler);
            }
        })

        // CURSOR
        if (classes.includes('mouseOver')) {
            nav_carousel.classList.add('mouseOver');
            // ADD LINK
            nav_carousel.addEventListener('click', this.navClickHandler);
            // REMOVE LINK IF OVER NAV BUTTON
            if (cursor_over_nav_prev || cursor_over_nav_next) {
                nav_carousel.removeEventListener('click', this.navClickHandler);
            }
        } else {
            nav_carousel.classList.remove('mouseOver');
            // REMOVE LINK IF MOVES OUT ITEM
            nav_carousel.removeEventListener('click', this.navClickHandler);
        }

        // REPAIRING CLICK EVENT BUG
        if (!classes.includes('mouseOver')) {
            nav_carousel.addEventListener('mousedown', () => {
                nav_carousel.addEventListener('mousemove', (e) => {
                    let mouseOver = []
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;

                    items.forEach((item, i) => {
                        const coordinates = item.getBoundingClientRect();
                        const cursor_over_item = (coordinates.left < mouseX)
                        && (coordinates.right > mouseX)
                        && (coordinates.top < mouseY)
                        && (coordinates.bottom > mouseY);
            
                        if (cursor_over_item && cursor_over_nav) {
                            mouseOver[i] = 'mouseOver'
                            item.classList.add('mouseOver');
                            console.dir(true)
                        } else {
                            mouseOver[i] = ''
                            item.classList.remove('mouseOver');
                            console.dir(false)
                        }
                    })
                    // console.dir(mouseOver)

                    if(mouseOver.includes('mouseOver')) {
                        // console.dir(true)
                        nav_carousel.addEventListener('mouseup', (e) => {
                            nav_carousel.removeEventListener('click', this.navClickHandler);
                        })
                    }
                })
                // let mouseOver = []

                // items.forEach((item, i) => {
                //     console.dir(i)
                //     const coordinates = item.getBoundingClientRect();
                //     const cursor_over_item = (coordinates.left < mouseX)
                //     && (coordinates.right > mouseX)
                //     && (coordinates.top < mouseY)
                //     && (coordinates.bottom > mouseY);
        
                //     if (cursor_over_item && cursor_over_nav) {
                //         mouseOver[i] = 'mouseOver'
                //         item.classList.add('mouseOver');
                //     } else {
                //         mouseOver[i] = ''
                //         item.classList.remove('mouseOver');
                //     }
                // })

                // if(mouseOver.includes('mouseOver')) {
                //     console.dir(true)
                //     nav_carousel.addEventListener('mouseup', (e) => {
                //         nav_carousel.removeEventListener('click', this.navClickHandler);
                //     })
                // }

                // nav_carousel.addEventListener('mouseup', (e) => {
                //     console.dir(true)
                //     let mouseOver = []
                //     items.forEach((item, i) => {
                //         console.dir(i)
                //         const coordinates = item.getBoundingClientRect();
                //         const cursor_over_item = (coordinates.left < mouseX)
                //         && (coordinates.right > mouseX)
                //         && (coordinates.top < mouseY)
                //         && (coordinates.bottom > mouseY);
            
                //         if (cursor_over_item && cursor_over_nav) {
                //             mouseOver[i] = 'mouseOver'
                //             item.classList.add('mouseOver');
                //         } else {
                //             mouseOver[i] = ''
                //             item.classList.remove('mouseOver');
                //         }
                //     })
                //     if(mouseOver.includes('mouseOver')) {
                //         nav_carousel.removeEventListener('click', this.navClickHandler);
                //     }
                // })
            })
        }
    }

    render() {

        const nextIcon = "<img src='/img/arrow_left.png' alt='prev'>"
        const prevIcon = "<img src='/img/arrow_right.png' alt='next'>"
        const options = {
            items: 3,
            margin: 20,
            nav: true,
            navText: [
                nextIcon,
                prevIcon
            ],
            dots: true,
            rewind: true,
            // autoplay: true
        };

        const itemsInfo = this.props.itemsData
        const items = itemsInfo.map((item, i) => {
            return <Item
                key={i}
                text={item.text}
                imgSrc={item.imgSrc}
                name={item.name}
                role={item.role}
                star='img/star.png'
                clickHandler={item.clickHandler}
            />
        })

        return (
            <OwlCarousel
            ref="car"
            options={options}
            onMouseMove={this.mouseMoveHandler}
            >
                {items}
            </OwlCarousel>
        );
    }
}

export default Carousel;