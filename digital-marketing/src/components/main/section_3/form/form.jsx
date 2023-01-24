import React from 'react';
import styles from './form.module.css';

// Components
import Title from '../../../common/title';
import TextFill from '../../../common/text_fill';
import SmallInput from './small_input/small_input';
import BigInput from './big_input/big_input';
import TextArea from './textarea/textarea';
import Btn from '../../../common/btn';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.inputHandler = this.inputHandler.bind(this);
        this.btnAction = this.btnAction.bind(this);

        this.state = {
            name: '',
            email: '',
            subject: '',
            mainText: ''
        }
    }

    inputHandler(e) {
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    btnAction(e) {
        e.preventDefault();
        this.props.getData(this.state)
    }

    render() { 
        const cls = this.props.class ? this.props.class : ''

        return (
            <form className={styles.form + ' ' + cls}
                onSubmit={this.btnAction}
            >
                <Title
                    class={styles.title}
                    reg={3}
                    text='Get in touch of the world'
                />
                <TextFill
                    class={styles.text}
                    text='Your work is going to fill a large part of your life, and the only way
                    to be truly satisfied.'
                />
                <div className={styles.inputBox}>
                    <SmallInput
                        type='text'
                        placeholder='Enter your name'
                        name='name'
                        inputHandler={this.inputHandler}
                    />
                    <SmallInput
                        type='email'
                        placeholder='Enter email'
                        name='email'
                        inputHandler={this.inputHandler}
                    />
                </div>
                <BigInput
                    type='text'
                    placeholder='Enter your subject'
                    name='subject'
                    inputHandler={this.inputHandler}
                />
                <TextArea
                    class={cls}
                    placeholder='Enter your subject'
                    id=''
                    rows={8}
                    name='mainText'
                    inputHandler={this.inputHandler}
                />
                <Btn
                    color='blue'
                    type='submit'
                    name='SENT MESSAGE'
                    class={styles.btn}
                    // handlerFunc={this.btnAction}
                />
            </form>
        );
    }
}
 
export default Form;