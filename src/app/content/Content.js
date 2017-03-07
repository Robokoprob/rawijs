import React, { Component } from 'react';
import Loading from './loading/Loading';

import componentStyles from'./content.scss';
import globalStyles from 'global/global.scss';

class Content extends Component {

    render() {
        let content;
        if (this.props.loading) {
            content = (<Loading />);
        } else if (this.props.children) {
            content = (this.props.children);
        } else {
            content = (<div>Unknown content</div>);
        }

        return (
            <main className={componentStyles.content}>
                {content}
            </main>
        )
    }

}

export default Content;