import React from 'react';
import {NavLink, Link} from 'react-router-dom';

import {Label} from 'react-bootstrap';

import {RESOLUTIONS} from '../../data/constants/componentConstants';

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lastScroll: null,
            // pageHeight: 0
        };

        this.mainNav = null;
        this.userNav = null;
        this.adminNav = null;
    }

    componentDidMount() {
        this.mainNav = document.getElementById('main-menu');
        this.userNav = document.getElementById('user-nav');
        this.adminNav = document.getElementById('admin-nav');
        window.addEventListener('scroll', this.handleScroll, {passive: true});
        this.handleScroll();
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll = () => {

        if (window.innerWidth > RESOLUTIONS.bootstrapXS) {

            if (document.getElementsByTagName('html')[0].offsetHeight - window.innerHeight < 150) {
                this.mainNav.classList.remove('small');
                this.mainNav.classList.remove('navbar-fixed-top');
                return;
            }

            if (document.documentElement.scrollTop > 600) {
                this.mainNav.classList.add('small');
                this.mainNav.classList.add('navbar-fixed-top')
            } else {
                this.mainNav.classList.remove('small');
                this.mainNav.classList.remove('navbar-fixed-top')
            }
        }


        if (window.innerWidth <= RESOLUTIONS.bootstrapXS) {
            this.mainNav.classList.add('navbar-fixed-top')
        }

        this.setState({lastScroll: document.documentElement.scrollTop});
    };

    logout = (e) => {
        sessionStorage.clear();
    };

    hideMenu = () => {
        if (this.userNav) this.userNav.classList.remove('in');
        if (this.adminNav) this.adminNav.classList.remove('in');
    };

    render() {

        let isAdmin = sessionStorage.getItem('role') === 'admin';
        let isLoggedInUser = sessionStorage.getItem('p_token');
        let productsCount = 0;

        if (sessionStorage.getItem('products') !== null) {
            productsCount = JSON.parse(sessionStorage.getItem('products')).length;
        }

        if (isAdmin) {
            return (
                <nav className="navbar navbar-default admin" id="main-menu">
					<span className="navbar-brand admin">
						<span>Plant it</span>
					</span>

                    <button type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#admin-nav"
                            aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>

                    <div id="admin-nav" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right" onClick={this.hideMenu}>

                            <NavLink to="/order/list" activeClassName="active" className='nav-link'>
                                Поръчки
                            </NavLink>

                            <NavLink to="/product/list" activeClassName="active" className='nav-link'>
                                Продукти
                            </NavLink>

                            <NavLink to="/promos/list" activeClassName="active" className='nav-link'>
                                Промоции
                            </NavLink>

                            <NavLink to="/news/list" activeClassName="active" className='nav-link'>
                                Блог
                            </NavLink>

                            {/*<NavLink to="/partners/list" activeClassName="active" className='nav-link'>*/}
                            {/*Партньори*/}
                            {/*</NavLink>*/}

                            {/*<NavLink to="/videos/list" activeClassName="active" className='nav-link'>*/}
                            {/*Видео*/}
                            {/*</NavLink>*/}

                            <NavLink to="/home-content" activeClassName="active" className='nav-link'>
                                Съдържание
                            </NavLink>

                            <NavLink to="/settings" activeClassName="active" className='nav-link'>
                                Настройки
                            </NavLink>

                            <NavLink to="/home"
                                     id="logout-btn"
                                     activeClassName="active"
                                     className='btn btn-default btn-xs'
                                     onClick={this.logout}>Изход
                            </NavLink>

                        </ul>
                    </div>
                </nav>);
        }

        return (
            <nav className="navbar navbar-default" id="main-menu">

                <div className="navbar-brand">
                    <Link to="/home">Plant It</Link>
                </div>

                <button type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#user-nav"
                        aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>


                <div id="user-nav" className="collapse navbar-collapse">

                    <ul className="nav navbar-nav navbar-right" onClick={this.hideMenu}>

                        <NavLink to="/home" activeClassName="active" className='nav-link'>
                            Начало
                        </NavLink>

                        <NavLink to="/products" activeClassName="active" className='nav-link'>
                            Продукти
                        </NavLink>

                        <NavLink to="/news/list" activeClassName="active" className='nav-link'>
                            Блог
                        </NavLink>

                        {/* <NavLink to="/videos" activeClassName="active" className='nav-link'>
                         Видео
                         </NavLink> */}
                        {/*
                         <NavLink to="/partners" activeClassName="active" className='nav-link'>
                         Партньори
                         </NavLink> */}

                        <NavLink to="/contact" activeClassName="active" className='nav-link'>
                            Контакт
                        </NavLink>

                        {isLoggedInUser &&
                        <NavLink to="/" className="btn btn-default"
                                 onClick={this.logout}>Изход
                        </NavLink>
                        }

                        <NavLink to="/cart" activeClassName="active" className='nav-link cart hidden-xs'>
                            <i className="fa fa-cart-arrow-down" aria-hidden="true"/>
                            {productsCount !== 0 &&
                            <Label bsStyle="danger">{' ' + productsCount}</Label>
                            }
                        </NavLink>

                        {/* <div className="social-media-icons visible-xs">
                         <a className="icon" target="_blank" rel="noopener noreferrer"
                         href="https://www.facebook.com/moiteochila/">
                         <i className="fa fa-facebook-official" aria-hidden="true"/>
                         </a>
                         </div> */}
                    </ul>
                </div>

                <div className="cart-xs">
                    <NavLink to="/cart" activeClassName="active" className='nav-link cart visible-xs'>
                        <i className="fa fa-cart-arrow-down" aria-hidden="true"/>
                        {productsCount !== 0 &&
                        <Label bsStyle="danger">{' ' + productsCount}</Label>
                        }
                    </NavLink>
                </div>

            </nav>
        );
    }
}

export default Header;

