import React from 'react';
import styles from './section_5.module.css';

// Components
import Container from '../../common/container';
import Left from './left/left';
import Right from './right/right';

class Section5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className={styles.section}>
                <Container class={styles.container}>
                    <Left />
                    <Right />
                </Container>
            </section>
        );
    }
}
 
export default Section5;