import React from 'react';
import styles from './section_1.module.css';

// Components
import Container from '../../common/container';
import Title from '../../common/title';
import TextFill from '../../common/text_fill';
import Employee from './employee/employee';
import Btn from '../../common/btn';

// Img
import employee from '../../img/samantha.png';
import star from '../../img/star.png';
import bgGirl from '../../img/home_img.png';
import triangle from '../../img/section_1_triangle.png';

class Section1 extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this)
    }

    start(e) {
        e.preventDefault()
        window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
        '_blank'
        );
    }

    render() {

        return (
            <section className={styles.section1}>
                <Container class={styles.container} >
                    <div className={styles.left}>
                        <Title
                            class={styles.title}
                            reg={1}
                            text='Digital Marketing. Creative Design.'
                        />
                        <TextFill
                            class={styles.textFill}
                            text='"Your work is going to fill a large part of your life, 
                            and the only way to be truly satisfied is to do what 
                            you believe is great work. And the only way to do 
                            great work is to love what you do."'
                        />
                        <Employee
                            employee={employee}
                            employeeName='Samantha Norton'
                            star={star}
                            starAlt='star'
                        />
                        <Btn
                            color='yellow'
                            name='Get started now'
                            handlerFunc={this.start}
                        />
                    </div>

                    <div className={styles.bg}>
                        <img
                            className={styles.bgImg}
                            src={bgGirl}
                            alt="big girl"
                        />
                        <img className={styles.triangle} src={triangle} />
                    </div>
                </Container>
            </section>
        );
    }
}
 
export default Section1;