import React from 'react';
import styles from './left.module.css';

// Components
import Title from '../../../common/title';
import TextFill from '../../../common/text_fill';
import EfficientyProfit from '../efficienty_profits/efficienty_profit';
import Btn from '../../../common/btn';

// Img
import customerSupport from '../../../img/support.png';
import email from '../../../img/email.png';

class Left extends React.Component {
    constructor(props) {
        super(props);
        this.action = this.action.bind(this)
    }

    action(e) {
        e.preventDefault()
        window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
        '_blank'
        );
    }

    render() {
        const cls = this.props.class ? this.props.class : ''

        return (
            <div className={styles.left + ' ' + cls}>
                <Title
                    class={styles.title}
                    reg={2}
                    text='Experience design and
                    intelligent marketing for
                    growing brands'
                />
                <TextFill
                    class={styles.textFill}
                    text='The first rule of any technology used in a business is that automation
                    applied to an efficient operation will magnify the efficiency.'
                />
                <div className={'df ' + styles.df}>
                    <EfficientyProfit
                        img={customerSupport}
                        alt='Customer support'
                        title='Customer Support'
                        text='Make every detail perfect &
                        limit the number of details.'
                    />
                    <EfficientyProfit
                        img={email}
                        alt='Email'
                        title='Email marketing'
                        text='Make every detail perfect &
                        limit the number of details.'
                    />
                </div>
                <Btn
                    class={styles.btn}
                    color={'blue'}
                    name={'Read more'}
                    handlerFunc={this.action}
                />
            </div>
        );
    }
}
 
export default Left;