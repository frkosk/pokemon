import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
        <div className="loader--holder">
            <div className={"loader " + (this.props.loaderStyle ? this.props.loaderStyle : '')}>
                <div className="loader__figure"></div>
                <small className="loader__label">Loading...</small>
            </div>
        </div>
    );
  }
}

export default Loader;