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
        return (
            <header className={componentStyles.header}>
                <h1><button type="button" className={componentStyles.title} onClick={this.handleClick}>CSA</button></h1>
                {this.state.showNav &&
                <nav>
                    <IndexLink  to="/" onClick={this.handleClick} activeClassName={active}>Homepage</IndexLink >
                    <Link to="/articles" onClick={this.handleClick} activeClassName={active}>Articles</Link>
                    <Link to="/nogiets" onClick={this.handleClick} activeClassName={active}>Nog iets</Link>
                </nav>
                }
            </header>
        )
    }
}

export default Header;