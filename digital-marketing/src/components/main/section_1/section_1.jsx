import React from 'react';


// Components
import Container from '../../common/container';
import Title from '../../common/title';
import TextFill from '../../common/text_fill';
import Employee from './employee';
import Btn from '../../common/btn';

// Img
import employee from '../../img/samantha.png';
import star from '../../img/star.png';

class Section1 extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() {
        const cls = 'section_1'

        return (
            <section>
                <Container>
                    <div className={cls + '_left'}>
                        <Title
                            reg={1}
                            text='Digital Marketing. Creative Design.'
                        />
                        <TextFill
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
                        />
                    </div>
                </Container>
            </section>
        );
    }
}
 
export default Section1;