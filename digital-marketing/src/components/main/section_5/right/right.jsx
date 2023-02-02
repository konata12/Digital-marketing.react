import React from 'react';
import styles from './right.module.css';

// Components
import Form from './form/form';

// Img
import form from '../../../img/ticket.jpg';

class Right extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.right}>
                <div className={styles.formBox}>
                    <div className={styles.formImgBox}>
                        <img
                            className={styles.img}
                            src={form}
                            alt="people working"
                        />
                    </div>

                    <div className={styles.formTextBox}>
                        <Form
                            class={styles.form}
                            btnHandler={this.getFormData}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Right;