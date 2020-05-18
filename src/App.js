import React from "react";
import "./App.css";
import { news } from "./data";
class App extends React.Component {
  constructor() {
    super();
    this.refObj = {};
  }
  handleClick = (noEle) => {
    this.refObj[noEle].scrollIntoView();
  };
  render() {
    const { content } = news;
    return (
      <div className="Container">
        <div className="title">
          <strong>{news.title}</strong>
        </div>

        <div className="table-of-content">
          <strong>Table of content</strong>
          {content &&
            content.map((para, i) => {
              return (
                <ClickableHeading
                  handleClick={this.handleClick}
                  heading={para.heading}
                  index={i}
                />
              );
            })}
        </div>

        {content &&
          content.map((para, i) => {
            return (
              <Parapraph
                heading={para.heading}
                detail={para.detail}
                refObj={this.refObj}
                index={i}
              />
            );
          })}
      </div>
    );
  }
}
const ClickableHeading = (props) => {
  const onClick = () => {
    props.handleClick(props.index);
  };
  return <div onClick={onClick}>{props.heading}</div>;
};
const Parapraph = (props) => {
  return (
    <div
      className="paragraph"
      ref={(ref) => {
        props.refObj[props.index] = ref;
      }}
    >
      <strong>{props.heading}</strong>
      <br />
      {props.detail}
    </div>
  );
};
export default App;
