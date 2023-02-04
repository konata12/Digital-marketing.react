import React from 'react';
import './item.css'
import styles from './item.module.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        // this.mouseOverHandler = this.mouseOverHandler.bind(this)
        // this.mouseOutHandler = this.mouseOutHandler.bind(this)
        // this.mouseMoveHandler = this.mouseMoveHandler.bind(this)
        this.state = {
            mouseOver: false,
            mouseMove: false,
        }
    }

    // mouseOverHandler(e) {
    //     const nav_carousel = document.querySelector('.owl-nav')
    //     const item = e.target

    //     nav_carousel.addEventListener('mouseover', e => {
    //         const mouseX = e.clientX
    //         const mouseY = e.clientY
    //         const coordinates = item.getBoundingClientRect()

    //         if ((coordinates.left < mouseX) && (coordinates.right > mouseX) && (coordinates.top < mouseY) &&  (coordinates.bottom > mouseY)) {
    //             this.setState({
    //                 mouseOver: true
    //             })
    //         }
    //     })
    // }
    // mouseOutHandler(e) {
    //     const nav_carousel = document.querySelector('.owl-nav')
    //     const item = e.target

    //     nav_carousel.addEventListener('mouseout', e => {
    //         const mouseX = e.clientX
    //         const mouseY = e.clientY
    //         const coordinates = item.getBoundingClientRect()

    //         if ((coordinates.left > mouseX) && (coordinates.right < mouseX) && (coordinates.top > mouseY) &&  (coordinates.bottom < mouseY)) {
    //             this.setState({
    //                 mouseOver: false
    //             })
    //         }
    //     })
    // }
    // mouseMoveHandler(e) {
    //     const nav_carousel = document.querySelector('.owl-nav')
    //     const item = e.target
    //     // OVER
    //     nav_carousel.addEventListener('mouseover', e => {
    //         const mouseX = e.clientX
    //         const mouseY = e.clientY
    //         const coordinates = item.getBoundingClientRect()

    //         if ((coordinates.left < mouseX) && (coordinates.right > mouseX) && (coordinates.top < mouseY) &&  (coordinates.bottom > mouseY)) {
    //             this.setState({
    //                 mouseOver: true
    //             })
    //         }
    //     })
    //     // OUT
    //     nav_carousel.addEventListener('mouseoot', e => {
    //         const mouseX = e.clientX
    //         const mouseY = e.clientY
    //         const coordinates = item.getBoundingClientRect()

    //         if ((coordinates.left > mouseX) && (coordinates.right < mouseX) && (coordinates.top > mouseY) &&  (coordinates.bottom < mouseY)) {
    //             this.setState({
    //                 mouseOver: false
    //             })
    //         }
    //     })
    //     // MOVE
    //     nav_carousel.addEventListener('mousemove', e => {
    //         const mouseX = e.clientX
    //         const mouseY = e.clientY
    //         const coordinates = item.getBoundingClientRect()

    //         if ((coordinates.left < mouseX) && (coordinates.right > mouseX) && (coordinates.top < mouseY) &&  (coordinates.bottom > mouseY)) {
    //             this.setState({
    //                 mouseMove: true
    //             })
    //         } else {
    //             this.setState({
    //                 mouseMove: false
    //             })
    //         }
    //     })
    // }

    render() {
        const img = this.props.imgSrc
        let cls = this.state.mouseOver ? styles.mouseOver : ''

        return (
            <div className={styles.item + ' item' + ' ' + cls}
            onClick={this.props.clickHandler}
            onMouseOver={this.mouseOverHandler}
            onMouseOut={this.mouseOutHandler}
            onMouseMove={this.mouseMoveHandler}
            >
                <p className={styles.text}>{this.props.text}</p>
                <div className={styles.imgBox}> 
                    <img className={styles.img + ' worker'} src={img} alt="" />
                </div>
                <p className={styles.name}>{this.props.name}</p>
                <p className={styles.role}>{this.props.role}</p>
                <div className={styles.stars}>
                    <img className='star' src={this.props.star} alt={this.props.starAlt} />
                    <img className='star' src={this.props.star} alt={this.props.starAlt} />
                    <img className='star' src={this.props.star} alt={this.props.starAlt} />
                    <img className='star' src={this.props.star} alt={this.props.starAlt} />
                    <img className='star' src={this.props.star} alt={this.props.starAlt} />
                </div>
            </div>
        );
    }
}
 
export default Item;