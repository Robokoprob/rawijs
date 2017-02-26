import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionSettings from 'material-ui/svg-icons/action/settings';


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
            <AppBar title={this.state.title}
                    showMenuIconButton={true}
                    iconElementRight={
                    <IconButton>
                        { this.state.homePage ? <ActionSettings/> : <ActionDone /> }
                    </IconButton>
                    }
                    onLeftIconButtonTouchTap={() => {this.props.store.dispatch({type: 'OPEN_DRAWER', open:true})}}
            >

            </AppBar>
        )
    }
}

export default Header;