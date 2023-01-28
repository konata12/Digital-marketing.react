import React from 'react';
import styles from './section_3.module.css';

// Components
import Container from '../../common/container';
import Left from './left/left';
import Right from './right/right';
import Form from './form/form';
import Title from '../../common/title';

// Img
import form from '../../img/form_people.jpg';

class Section3 extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this)
        this.state = {
            data: ''
        }
    }

    getData(value) {
        this.setState({
            data: value
        })
    }
    
    render() {
        
        return (
            <section className={styles.section}>
                <Title
                    class={styles.title}
                    reg={2}
                    text='more about us'
                />
                <Container class={styles.container}>
                    <Left />
                    <Right
                        getData={this.getData}
                    />
                </Container>
            </section>
        );
    }
}
 
export default Section3;