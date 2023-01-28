import React from 'react';
import styles from './question.module.css';

// Components
import List from './list/list';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
        this.listElementHandler = this.listElementHandler.bind(this)
        this.state = {
            listVisible: false
        }
    }

    clickHandler() {
        this.setState({
            listVisible: !this.state.listVisible
        })
    }

    listElementHandler(url) {
        window.open(url,
        '_blank'
        );
    }

    render() {
        let question
        if(this.props.isLast) {
            question = <div className={this.state.listVisible ? styles.questionListVisebleTop : styles.question}>
                <List
                    isLast={this.props.isLast}
                    list={this.props.list}
                    visible={this.state.listVisible}
                    listElemHandler={this.listElementHandler}
                />
                <div className={styles.visible}>
                    <p className={styles.title}>
                        {this.props.text}
                    </p>
                    <input
                        className={styles.img}
                        type="image"
                        src={this.props.img}
                        onClick={this.clickHandler}
                    />
                </div>
            </div>
        } else {
            question = <div className={this.state.listVisible ? styles.questionListVisebleBot : styles.question}>
                <div className={styles.visible}>
                    <p className={styles.title}>
                        {this.props.text}
                    </p>
                    <input
                        className={styles.img}
                        type="image"
                        src={this.props.img}
                        onClick={this.clickHandler}
                    />
                </div>
                <List
                    isLast={this.props.isLast}
                    list={this.props.list}
                    visible={this.state.listVisible}
                    listElemHandler={this.listElementHandler}
                />
            </div>
        }

        return (
            <>
                {question}
            </>
        );
    }
}

export default Question;