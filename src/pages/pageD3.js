import React from "react";
import PropTypes from "prop-types";

import BarChart1 from "../d3/BarChart1";

class PageD3 extends React.Component {
  state = {
    datas: [1, 2, 3],
    maxDataValue: 5
  };

  addData = () => {
    const datas = this.state.datas;
    const v = Math.random();
    datas.push(v * this.state.maxDataValue);
    this.setState({ datas });
  };

  removeData = () => {
    const datas = this.state.datas;
    datas.shift();
    this.setState({ datas });
  };

  addRemoveData = () => {
    this.addData();
    this.removeData();
  };

  clearData = () => {
    const datas = [];
    this.setState({ datas });
  };

  render() {
    return (
      <div>
        <BarChart1
          data={this.state.datas}
          maxDataValue={this.state.maxDataValue}
          size={[window.innerWidth - window.innerWidth / 10, 250]}
        />
      </div>
    );
  }
}

PageD3.propTypes = {
  //classes: PropTypes.object.isRequired
};

export default PageD3;
