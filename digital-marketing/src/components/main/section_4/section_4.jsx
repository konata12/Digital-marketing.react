import React from 'react';
import styles from './section_4.module.css';

// Components
import Container from '../../common/container';
import Left from './left/left';
import Right from './right/right';

class Section4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const questions = [
            {
                text: 'Do you provide customer support?',
                list: [
                    {
                        text: '1111111111111',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '2222222222222',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '3333333333333',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '4444444444444',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                ]
            },
            {
                text: 'How much traffic can the hosting handle?',
                list: [
                    {
                        text: '1111111111',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '2222222222',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '3333333333',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '4444444444',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                ]
            },
            {
                text: 'Do you have any questions for us?',
                list: [
                    {
                        text: '1111111',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '2222222',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '3333333',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '4444444',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                ]
            },
            {
                text: 'What is your return policy?',
                list: [
                    {
                        text: '1111',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '2222',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '3333',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                    {
                        text: '4444',
                        url: 'https://www.youtube.com/watch?v=WT0QPagRgZc&list=RDFpIPXf7Lf98&index=8'
                    },
                ]
            }
        ]

        return (
            <section className={styles.section}>
                <Container class={styles.container}>
                    <Left />
                    <Right
                        questions={questions}
                    />
                </Container>
            </section>
        );
    }
}

export default Section4;