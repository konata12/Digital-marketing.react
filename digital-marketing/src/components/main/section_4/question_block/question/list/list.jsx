import React from 'react';
import styles from './list.module.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.listElemHandler = this.listElemHandler.bind(this)
    }

    listElemHandler(url) {
        this.props.listElemHandler(url)
    }

    render() {
        const textArr = this.props.list
        const list = textArr.map((li, i) => {
            return <li key={i}  
            className={styles.listElem}
            onClick={() => {this.listElemHandler(li.url)}}>
                {li.text}
            </li>
        })
        
        let cls
        if (this.props.visible) {
            this.props.isLast ?  cls = (styles.visible + ' ' + styles.visibleTop) : cls = (styles.visible + ' ' + styles.visibleBot)
        } else {
            cls = styles.notVisible
        }

        return (
            <div className={cls}>
                <ul className={styles.list}>
                    {list}
                </ul>
            </div>
        );
    }
}
 
export default List;