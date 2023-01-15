import React from 'react';
import styles from './header_nav.module.css';

// Components
import NavLink from './nav_link';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const nav = [
            {name: 'home', link: '#'},
            {name: 'about', link: '#'},
            {name: 'pricing', link: '#'},
            {name: 'blog', link: '#'},
            {name: 'faq', link: '#'},
            {name: 'contact', link: '#'}
        ];
        const renderedNav = nav.map((link) => {
            return <NavLink
                key={link.name}
                name={link.name}
                link={link.link}
            />
        })

        return (
            <ul className={styles.nav}>
                {renderedNav}
            </ul>
        );
    }
}
 
export default Navigation;