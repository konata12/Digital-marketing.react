import React from 'react';
import styles from './progress_bar.module.css';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const color = this.props.color
        const percent = this.props.percent

        return (
            <div className={styles.mainBar}>
                <div className={styles.progressBar + ' ' + styles[color]}
                style={{
                    left: (percent - 100) + '%'
                }}></div>
            </div>
        );
    }
}
 
export default ProgressBar;