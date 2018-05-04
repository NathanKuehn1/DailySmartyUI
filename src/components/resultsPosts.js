import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResultsPosts extends Component {
    render() {
        return (
            <ul className='results-posts'>
                <div className='results-posts__wrapper'>
                    <ul className='results-posts__posts'>

                    </ul>
                </div>
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return { state }
}

export default connect(mapStateToProps)(ResultsPosts);