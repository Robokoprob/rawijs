import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeLoading } from 'redux/actions'

import componentStyles from'./loading.scss';
import globalStyles from 'global/global.scss';

class Loading extends React.Component {
    render() {
        return this.props.loading ?
            (<div className={componentStyles.loadingOverlay}>

                <div className={componentStyles.loading}>
                    <span className={componentStyles.closingCross} onClick={ () => this.props.closeLoading() }>x</span>
                    <span>Loading...</span></div>
            </div>) :
            (<div id="loading-placeholder"></div>)
    }
}

function mapStateToProps(state, ownProps = {}) {
    let showLoading = Object.keys(state.loading).length > 0;
    console.log("Showloading: " + showLoading);
    return {
        loading: showLoading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeLoading: closeLoading
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);;