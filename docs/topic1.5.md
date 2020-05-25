# Regular function vs Arrow Function in Class

## Tại sao phải gọi .bind(this) ?
## Tại sao bị lỗI *cannot read property 'setState' of undifined* ?


### Syntax 
> this

### Value

```
A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
```


```javascript
const company = {
    address: "17 BHTQ",
    getAddress() {
        return this.address
    }
}
company.getAddress()
/// => 17 BHTQ
```
> Khi 1 func đưỢc gọi như là 1 method của obj thì *this* trỏ tới obj đó

```javascript
const newCompany = {
    address: "71 BHTQ"
}
newCompany.getAddress = company.getAddress
newCompany.getAddress()
/// => 71 BHTQ
```

- fake onChange func
```javascript
'use strict'
const company = {
    state: {
        address: "17 BHTQ",
    },
    getAddress() {
        return this.state.address
    }
}
const onChange = company.getAddress
onChange()
/// ?
```
- Arrow func
> In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:

```javascript
class Student {
  constructor(name){
    this.name = name
  }
  show = () => {
    console.log(this)
  }
}
const thong = new Student('thong')
thong.show()
```

```javascript
class Student {
  constructor(name){
    this.name = name
    this.show = () => {
      console.log(this)
    }
  }
}
const thong = new Student('thong')
thong.show()
```

- Xoắn não time

```javascript
const layer1 = {
  name : "layer1",
  log1() {
    const layer2 = {
      name : "layer2",
      log2 () {
        console.log(this.name)
      }
    }
    layer2.log2()
  }
}
layer1.log1()
/// ?
```
- Perfomance

![](https://miro.medium.com/max/1400/1*kX8PygxLxltb4qRFW5efIw.png)