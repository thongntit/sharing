import React from "react";
import "./App.css";
import { news } from "./data";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
    this.topRef = React.createRef();
  }
  componentDidMount() {
    const scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true,
      });
    } else {
      this.setState({
        isVisible: false,
      });
    }
  }
  backtoTop = () => {
    this.topRef.current.scrollIntoView();
  };
  render() {
    const { content } = news;
    return (
      <div className="Container">
        <BackToTopBtn
          isVisible={this.state.isVisible}
          backtoTop={this.backtoTop}
        />
        <div className="title" ref={this.topRef}>
          <strong>{news.title}</strong>
        </div>

        {content &&
          content.map((para, i) => {
            return (
              <Parapraph
                heading={para.heading}
                detail={para.detail}
                index={i}
              />
            );
          })}
      </div>
    );
  }
}
const Parapraph = (props) => {
  return (
    <div className="paragraph">
      <strong>{props.heading}</strong>
      <br />
      {props.detail}
    </div>
  );
};
const BackToTopBtn = (props) => {
  return props.isVisible ? (
    <button className="scroll-to-top-btn" onClick={props.backtoTop}>
      ⬆
    </button>
  ) : null;
};
export default App;
