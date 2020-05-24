import React from "react";
import "./topic1.css";
export default class Topic1 extends React.Component {
  state = {
    email: "",
    password: "",
  };
  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
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
            <input
              placeholder="Email / Tên đăng nhập"
              value={this.state.email}
              type="text"
              onChange={this.handleChangeEmail}
            />
            <input
              placeholder="Mật khẩu"
              value={this.state.password}
              type="password"
              onChange={this.handleChangePassword}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}
