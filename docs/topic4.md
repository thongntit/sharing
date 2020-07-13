---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fffss
backgroundImage: url('https://marp.app/assets/hero-background.jpg')
---

# **React Fiber**

---

# Why ?

- Why people said that React is fast ?
- How React works under the hood ?

  - What is React Fiber ?
  - What is React Reconciliation ?

---

# Reconciliation

- is the process through which React calculate if it is necessary to update the DOM.
- Completely rewrite in React 16. Seperate with renderer.

---

# Reconciliation

## ![bg 80%](https://images.viblo.asia/f49b9f76-a561-4f85-bddb-86ef3b8af42f.png)

---

# Reconciliation

1. Two elements of different types
2. Two elements of same types

---

# Reconciliation

## ![bg 50%](https://images.viblo.asia/cad49b73-0ee0-45b0-aeec-1b2a36f5bee3.png)

---

# Reconciliation

## ![bg 80%](https://imgs.developpaper.com/imgs/3822224183-5c6c0c41aae6f_articlex.png)

---

# Fiber

- Assign priority to different type of work
- Pause work and come back later
- Abort work if no longer need
- Reuse previously completed work

=> React Suppense, concurrent mode

---

# Fiber

![bg 60%](https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/event-queue-diagram.png?w=730&ssl=1)

---

# Reference

[Digging deeper inside the Reconciliation algorithm of react](https://medium.com/@coolram2104/digging-deeper-inside-the-reconciliation-algorithm-of-react-f0d428ba4ae9)
[React document](https://reactjs.org/docs/reconciliation.html)
[A deep dive into React Fiber internals](https://blog.logrocket.com/deep-dive-into-react-fiber-internals/)
