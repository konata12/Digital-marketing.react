import React from 'react';
import styles from './nav_link.module.css';

class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <li className={styles.link}>
                <a href={this.props.link}>
                    {this.props.name}
                </a>
            </li>
        );
    }
}
 
export default NavLink;