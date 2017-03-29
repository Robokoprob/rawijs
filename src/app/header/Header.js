import React from 'react';
import { debug } from 'global/constants';
import componentStyles, { active } from'./header.scss';
import { Link, IndexLink  } from 'react-router';
import globalStyles from 'global/global.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showNav: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            showNav: !prevState.showNav
        }));
    }

    render() {
        let showNavBar = this.state.showNav ? '' : componentStyles.closed;
        let showNavOverlay = this.state.showNav ? componentStyles.navOverlay : '';
        return (
            <div>
                <div className={showNavOverlay} onClick={this.handleClick}></div>
                <header>
                    <div className={componentStyles.navWrapper}>
                        <IndexLink to="/" className={componentStyles.navLogo} activeClassName={active}>Homepage</IndexLink>
                        <button onClick={this.handleClick} className={componentStyles.navHamburger}>☰</button>

                    </div>
                    <nav className={componentStyles.navBar + ' ' + showNavBar}>
                        <IndexLink  to="/" onClick={this.handleClick} className={componentStyles.navItem} activeClassName={active}>Homepage</IndexLink >
                        <Link to="/articles" onClick={this.handleClick} className={componentStyles.navItem} activeClassName={active}>Articles</Link>
                        <Link to="/map" onClick={this.handleClick} className={componentStyles.navItem} activeClassName={active}>Map</Link>
                        <Link to="/nogiets" onClick={this.handleClick} className={componentStyles.navItem} activeClassName={active}>Nog iets</Link>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Header;