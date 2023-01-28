import React from 'react';
import styles from './right.module.css';

// Components
import Title from '../../../common/title';
import TextFill from '../../../common/text_fill';
import QuestionBlock from '../question_block/question_block';

class Right extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.right}>
                <Title
                    class={styles.title}
                    reg={2}
                    text='See why we are trusted
                    the world over'
                />
                <TextFill
                    class={styles.text}
                    text='The first rule of any technology used in a business is that automation
                    applied to an efficient operation will magnify the efficiency.'
                />
                <QuestionBlock
                    info={this.props.questions}
                />
            </div>
        );
    }
}

export default Right;