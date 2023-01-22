import React from 'react';
import styles from './small_input.module.css';


class SmallInput extends React.Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(e) {
        this.props.inputHandler(e)
    }

    render() {
        const cls = this.props.class ? this.props.class : ''
        

        return (
            <input className={styles.input + cls}
                name={this.props.name}
                type={this.props.type}
                onChange={this.changeHandler}
                placeholder={this.props.placeholder}
            />
        );
    }
}
 
export default SmallInput;