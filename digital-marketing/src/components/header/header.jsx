import React from 'react';
import './header.css'

// Components
import Container from '../common/container';
import Navigation from './navigation/header_nav';
import HeaderLogo from './logo/header_logo';
import Btn from '../common/btn';
import logo from '../img/logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.purchase = this.purchase.bind(this)
    }

    purchase(e) {
        e.preventDefault()
        window.open('https://www.youtube.com/watch?v=4qDYa2aIBxw&list=LL&index=15',
        '_blank'
        );
    }

    render() {
        return (
            <header className="header">
                <Container>
                    <HeaderLogo
                        sourse={logo}
                        altName='logo'
                    />
                    <Navigation />
                    <Btn
                        color='blue'
                        name='purchase template'
                        handlerFunc={this.purchase}
                    />
                </Container>
            </header>
        )
    }
}

export default Header;