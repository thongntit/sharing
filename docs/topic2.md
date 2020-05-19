# Topic 2: REF

* Ref string
* React.createRef
* Ref callback
* useRef


## Ref string

Không xài nữa

## React.createRef

```javascript
    constructor(){
        this.topRef = React.createRef();
    }
    ...
    render() {
        return (
        <div className="title" ref={this.topRef}>
          <strong>{news.title}</strong>
        </div>
        )
    }
```

## Ref callback

```javascript
    constructor(){
        this.topRef = React.createRef();
    }
    ...
    render() {
        return (
            ...
            <div
            className="paragraph"
            ref={(ref) => {
                props.refObj[props.index] = ref;
            }}
            >
        )
    }
```

## useRef

```javascript
const topRef = React.useRef(null);
```
