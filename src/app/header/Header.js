import React from 'react';
import { debug } from 'global/constants';
import componentStyles from'./header.scss';
import globalStyles from 'global/global.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Rawijs",
            homePage: true,
        }
    }

    render() {
        return (
            <header className={componentStyles.header}>
                <h1><button type="button" className={componentStyles.button}>Rawijs</button></h1>
            </header>
        )
    }
}

export default Header;