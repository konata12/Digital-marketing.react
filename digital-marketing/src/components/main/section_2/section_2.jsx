import React from 'react';
import styles from './section_2.module.css';

// Components
import Container from '../../common/container';
import Title from '../../common/title';
import TextFill from '../../common/text_fill';
import BlueText from '../../common/blue_text';

// Img
import main from '../../img/section-2_girl.png';
import grey from '../../img/section-2_grey.png';
import orange from '../../img/section-2_orange.png';

class Section2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className={styles.section}>
                <Container class={styles.container} >
                    <BlueText
                        class={styles.blueText}
                        text='Event Technology'
                    />
                    <Title
                        class={styles.title}
                        reg={2}
                        text='The solution that
                        your business can rely on'
                    />
                    <TextFill
                        class={styles.textFill}
                        text='Your work is going to fill a large part
                        of your life, and the only way to be truly
                        satisfied is to do what you believe is great work.
                        And the only way to do great work is to love what you do.'
                    />
                    <div className={styles.imgBox}>
                        <img
                            className={styles.girl}
                            src={main}
                            alt="girl"
                        />
                        <img
                            className={styles.grey}
                            src={grey}
                            alt="triangle"
                        />
                        <img
                            className={styles.orange}
                            src={orange}
                            alt="triangle"
                        />
                    </div>
                </Container>
            </section>
        );
    }
}
 
export default Section2;