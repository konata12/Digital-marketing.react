import React from 'react';
import './item.css'
import styles from './item.module.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const img = this.props.imgSrc

        return (
            <div className={styles.item} onClick={this.props.clickHandler}>
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