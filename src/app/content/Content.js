import React, { Component } from 'react';
import Loading from './loading/Loading';

import componentStyles from'./content.scss';
import globalStyles from 'global/global.scss';

class Content extends Component {

    render() {
        let content;
        if (this.props.children) {
            content = (this.props.children);
        } else {
            content = (<div>Unknown content</div>);
        }

        return (
            <main className={componentStyles.content}>
                <Loading />
                {content}
            </main>
        )
    }

}

export default Content;