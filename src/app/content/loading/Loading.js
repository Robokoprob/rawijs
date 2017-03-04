import React from 'react';
import componentStyles from'./loading.scss';
import globalStyles from 'global/global.scss';

class Loading extends React.Component {
    render() {
        if (this.props.loading) {
            return <div>Loading...</div>
        } else {
            return null;
        }
    }
}

export default Loading;