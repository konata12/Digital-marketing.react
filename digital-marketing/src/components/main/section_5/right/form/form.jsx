import React from 'react';
import styles from './form.module.css';

// Components
import Title from '../../../../common/title';
import Btn from '../../../../common/btn';
import List from './list/list';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listInfo = [
            'Meet and Greet with Speakers',
            'Video Facilities',
            'Speaker Facilities',
            'Questions & Answers',
            'Questions',
            'Dedicated account manager'
        ]

        return (
            <>
                <Title class={styles.title}
                    reg={2}
                    text='$45.00'
                />
                <p className={styles.text}>
                    Per month
                </p>
                <List
                    listInfo={listInfo}
                />
                <Btn color='blue'
                    name='Get Ticket'
                    class={styles.btn}
                />
            </>
        );
    }
}
 
export default Form;