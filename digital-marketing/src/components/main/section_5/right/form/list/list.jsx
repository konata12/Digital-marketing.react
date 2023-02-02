import React from 'react';
import styles from './list.module.css';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listInfo = this.props.listInfo
        let lenght = 0
        listInfo.forEach(() => {
            lenght++
        })
        const list = listInfo.map((name, i) => {
            const isLast = (lenght - 1) === i
            let cls = ''
            if(!isLast) {
                cls = styles.top
            }
            return <li key={name}
            className={styles.listElem + ' ' + cls}
            >
                {name}
            </li>
        })

        return (
            <ul className={styles.list}>
                {list}
            </ul>
        );
    }
}
 
export default List;