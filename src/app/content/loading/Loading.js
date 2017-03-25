import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import componentStyles from'./loading.scss';
import globalStyles from 'global/global.scss';

class Loading extends React.Component {
    render() {
        return this.props.loading ?
            <div className={componentStyles.loadingOverlay}><div className={componentStyles.loading}>Loading...</div></div> :
            <div id="loading-placeholder"></div>
    }
}

function mapStateToProps(state, ownProps = {}) {
    let showLoading = Object.keys(state.loading).length > 0;
    console.log("Showloading: " + showLoading);
    return {
        loading: showLoading
    }
}

export default connect(mapStateToProps)(Loading);;