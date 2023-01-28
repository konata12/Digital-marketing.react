import React from 'react';
import styles from './left.module.css';

// Img
import main from '../../../img/people_in_triangles.png';
import triangle from '../../../img/section-2_grey.png';

class Left extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={styles.left}>
                <div className={styles.imgBox}>
                    <img
                        className={styles.mainImg}
                        src={main}
                        alt="people in triangles"
                    />
                    <img
                        className={styles.triangleImg}
                        src={triangle}
                        alt="triangle"
                    />
                </div>
            </div>
        );
    }
}

export default Left;