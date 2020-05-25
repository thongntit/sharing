# Topic 1: onChange function

## Cách bình thường

```javascript
handleChangeEmail = (event) => {
    this.setState({
        email: event.target.value
    })
}

render() {
    return (
        <input onChange={this.handleChangeEmail} />
    )
}
```
> Ưu điểm: input không bị render lại mỗi lần các components khác thay đổi

> Nhược điểm: phải định nghĩa nhiều handler func nếu có nhiều input

## Inline func

```javascript
handleChange = (type, value) => {
    this.setState({
        [type]: value
    })
}

render() {
    return (
        <input onChange={ (event) => this.handleChange("email", event.target.value)} />
    )
}
```
> Ưu điểm: Dễ sử dụng, nhanh và tiện lợi.

> Nhược điểm: inline func sẽ bị khỏi tạo lại mỗi lần re-render khiến input phải render lại

## Bind

```javascript
handleChange = (type, value) => {
    this.setState({
        [type]: value
    })
}

render() {
    return (
        <input onChange={this.handleChange(event.target.value).bind(null,"email")} />
    )
}
```
Nhược điểm: Hàm bind sẽ tạo ra 1 func mới nên cũng khiến input phải render lại.

## Currying

```javascript
handleChange = (type) => (value) => {
    this.setState({
        [type]: value
    })
}

render() {
    return (
        <input onChange={this.handleChange("email")} />
    )
}
```
> Ưu điểm: Clean code

>Nhược điểm: Khi func render được thực thi. Currying function sẽ trả về 1 inline func vào onChange nên vẫn bị render lại giống inline func.

## Name

```javascript
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

render() {
    return (
        <input name="email" onChange={this.handleChange} />
    )
}
```

> Ưu điểm: input không bị render lại mỗi lần các components khác thay đổi. Handler function có thể được reuse bởi nhiều components khác nhau

> Nhược điểm: Không phải thư viện nào cũng hỗ trợ prop name.

## Function wrapper / HOC

```javascript
const InputWithLog = React.memo((props) => {
  const handlers = (event) => {
    props.onChange(props.name, event.target.value);
  };
  return <input {...props} onChange={handlers} />;
});
```

```javascript
const withHandler = (WrappedComponent) => {
  return React.memo((props) => {
    const handlers = (event) => {
      props.onChange(props.name, event.target.value);
    };
    return <WrappedComponent {...props} onChange={handlers} />;
  });
} 
```

>Ưu điểm: Giải quyết được các components không hỗ trợ prop name.

>Nhược điểm: Code base phức tạp