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
    }

    render() {
        const options = {
            items: 3,
            margin: 20,
            nav: true,
            dots: true,
            rewind: true,
            // autoplay: true
        };

        const events = {
            onDragged: function (event) {},
            onChanged: function(event) {}
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
            <OwlCarousel ref="car" options={options} events={events}>
                {items}
            </OwlCarousel>
        );
    }
}

export default Carousel;