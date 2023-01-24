import React from 'react';
import styles from './textarea.module.css';


class TextArea extends React.Component {
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
            <textarea className={styles.text + ' ' + cls}
                placeholder={this.props.placeholder}
                onChange={this.changeHandler}
                name={this.props.name}
                id={this.props.id}
                rows={this.props.rows}>
            </textarea>
        );
    }
}
 
export default TextArea;