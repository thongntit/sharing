import React from "react";
import "./topic1.css";
export default class Topic1 extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };
  render() {
    return (
      <div className="container">
        <div className="topic1">
          <div className="title">Topic 1: Handling Multiple Inputs</div>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <InputWithLog
              placeholder="Email / Tên đăng nhập"
              value={this.state.email}
              type="text"
              name="email"
              onChange={this.handleChange}
            />
            <InputWithLog
              placeholder="Mật khẩu"
              value={this.state.password}
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
const InputWithLog = React.memo((props) => {
  console.log(props.name, "is re-render");
  const handlers = (event) => {
    props.onChange(props.name, event.target.value);
  };
  return <input {...props} onChange={handlers} />;
});
