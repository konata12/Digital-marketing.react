import React from 'react';
import './section_3.css'

// Components
import Container from '../../common/container';
import Left from '../../main/section_3/left/left';
import Form from '../../main/section_3/form/form';
import Title from '../../common/title';

// Img
import form from '../../img/form_people.jpg';

class Section3 extends React.Component {
    constructor(props) {
        super(props);
        this.getFormData = this.getFormData.bind(this)
        this.state = {
            form: ''
        }
    }

    getFormData(value) {
        this.setState({
            form: value
        })
        alert(this.state.form)
        console.dir(this.state.form)
    }
    
    render() {
        const cls = ' section_3'

        return (
            <section className={cls}>
                <Title
                    class={cls}
                    reg={2}
                    text='more about us'
                />
                <Container class={cls}>
                    <Left
                        class={cls}
                    />
                    <div className={'right' + cls}>
                        <div className={'form_box' + cls}>
                            <div className={'form_img' + cls}>
                                <img src={form} alt="people working" />
                            </div>

                            <div className={'form' + cls}>
                                <Form
                                    class={cls}
                                    getData={this.getFormData}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}
 
export default Section3;