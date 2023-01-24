import React from 'react';
import styles from './right.module.css';

// Components
import Form from '../../../main/section_3/form/form';

// Img
import form from '../../../img/form_people.jpg';

class Right extends React.Component {
    constructor(props) {
        super(props);
        this.getFormData = this.getFormData.bind(this)
    }

    getFormData(value) {
        this.props.getData(value)
    }

    render() {
        const cls = this.props.class ? this.props.class : ''

        return (
            <div className={styles.right + ' ' + cls}>
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
                            getData={this.getFormData}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Right;