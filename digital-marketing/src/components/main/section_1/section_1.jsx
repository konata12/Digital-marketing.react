import React from 'react';
import './section_1.css';

// Components
import Container from '../../common/container';
import Title from '../../common/title';
import TextFill from '../../common/text_fill';
import Employee from './employee';
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
        const cls = 'section_1'

        return (
            <section className={cls}>
                <Container class={cls} >
                    <div className={cls + '_left'}>
                        <Title
                            class={cls}
                            reg={1}
                            text='Digital Marketing. Creative Design.'
                        />
                        <TextFill
                            class={cls}
                            text='"Your work is going to fill a large part of your life, 
                            and the only way to be truly satisfied is to do what 
                            you believe is great work. And the only way to do 
                            great work is to love what you do."'
                        />
                        <Employee
                            class={cls}
                            employee={employee}
                            employeeName='Samantha Norton'
                            star={star}
                            starAlt='star'
                        />
                        <Btn
                            class={cls}
                            color='yellow'
                            name='Get started now'
                            handlerFunc={this.start}
                        />
                    </div>

                    <div className={cls + '_bg'}>
                        <img
                            className={cls + '_bg_img'}
                            src={bgGirl}
                            alt="big girl"
                        />
                        <img className='triangle' src={triangle} />
                    </div>
                </Container>
            </section>
        );
    }
}
 
export default Section1;