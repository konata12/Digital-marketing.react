import React from 'react';
import styles from './stat_bar.module.css';

// Components
import ProgressBar from './progress_bar/progress_bar';

class StatBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isLast = this.props.isLast
        let cls
        isLast ? cls = ' ' : cls = styles.marginBot

        return (
            <div className={styles.statBar + ' ' + cls}>
                <div className={styles.textBox}>
                    <p className={styles.name}>{this.props.name}</p>
                    <p className={styles.percent}>{this.props.percent}%</p>
                </div>
                <ProgressBar
                    color={this.props.color}
                    percent={this.props.percent}
                />
            </div>
        );
    }
}
 
export default StatBar;