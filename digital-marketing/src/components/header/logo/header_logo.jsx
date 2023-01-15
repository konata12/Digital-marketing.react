import React from 'react';
import styles from './header_logo.module.css';

class HeaderLogo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.logo}>
                <img src={this.props.sourse} alt={this.props.altName} />
            </div>
        )
    }
}

export default HeaderLogo;