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