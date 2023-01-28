import React from 'react';
import styles from './question_block.module.css';

// Components
import Question from './question/question';

// Img
import plus from '../../../img/plus.png';

class QuestionBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const info = this.props.info
        let lenght = 0
        info.forEach(() => {
            lenght++
        })
        const questions = info.map((question, i) => {
            return <Question
                key={i}
                text={question.text}
                img={plus}
                list={question.list}
                isLast={(lenght - 1) === i}
            />
        })

        return (
            <div className={styles.box}>
                {questions}
            </div>
        );
    }
}
 
export default QuestionBlock;