# GSG-React-Bootcamp-Bethlehem
React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and build complex UIs with ease. 
whe will take Some of the key features of React include:
* components
* useState
* props
* components Life cycle `useEffect`
* routing , Protect routing
* useContext

# Examples
* [Todo List in js](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Bethlehem/tree/main/Todo%20js)
* [Counter in React](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Bethlehem/tree/main/counter)
* [Todo List in React ](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Bethlehem/tree/main/todo-app)

# Reading List
##  [You don't know java script book](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Bethlehem/files/10950231/you-don-t-know-js.pdf)
##  [Understanding Functional Components Vs. Class Components in React](https://www.scaler.com/topics/react/react-functional-vs-class-components/)
##  [ES6 String template](https://www.javatpoint.com/es6-template-literals)
## [Java Script Promise basics](https://javascript.info/promise-basics)
## [async/await in javascript](https://www.freecodecamp.org/news/async-await-in-javascript/)
## [The Async Await vedio](https://www.youtube.com/watch?v=vn3tm0quoqE)

## JavaScript
    1. object
    2. Arrow function
    3. Destructure
    4. Spread
    5. Quick Todo example in javaScript
    6. Work with map , forEach ,  splice , slice
    7. Promise / async await
    8. localStorage : evenry think save as string


 #### Resources to learn javascript Es6 
1. [W3 Schools](https://www.w3schools.com/js/js_es6.asp)
2. [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
3. [ES6.io](https://es6.io/)    
4. [JavaScript.info](https://javascript.info/)
5. [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/)



## How react  work in deep details

React is a popular JavaScript library that allows developers to build complex user interfaces by breaking them down into small, reusable components. At its core, React works by using a Virtual DOM to efficiently update the UI, and by relying on a unidirectional data flow.

  ## What are the features of React
     1. JSX
     2. Components
     3. Virtual DOM
     4. High performance
     


## What is JSX
 * JSX stands for JavaScript XML.
 * JSX allows us to write HTML in React.

## In more detail, here is how React works:

* Components: In React, a UI is broken down into small, reusable components. Each component is responsible for rendering a small part of the UI, and can have its own state, props, and lifecycle methods.
* Virtual DOM: React uses a Virtual DOM to keep track of changes to the UI. The Virtual DOM is a lightweight representation of the real DOM, and it allows React to update the UI efficiently.
* JSX: React uses a syntax called JSX to describe what the UI should look like. JSX looks like HTML, but it's actually a JavaScript syntax extension that allows developers to write HTML-like code within JavaScript.
* Rendering: When a component's state or props change, React re-renders the component and updates the Virtual DOM. React then compares the old and new versions of the Virtual DOM to figure out what has changed.
* Diffing: React uses a process called "diffing" to determine which parts of the UI need to be updated. Diffing involves comparing the old and new versions of the Virtual DOM and figuring out which elements have changed.
* Reconciliation: Once React has figured out which parts of the UI need to be updated, it reconciles the changes with the real DOM. This involves updating the real DOM to match the new Virtual DOM.
* Event handling: React uses a unidirectional data flow, which means that data flows down from parent components to child components. When a user interacts with a component, React uses event handlers to update the component's state, which in turn triggers a re-rendering of the UI.
     
     
     
## what is ***Diffing*** and how work 
**Diffing** (or Reconciliation) is a process that React uses to efficiently update the DOM when the state or props of a component change. It involves comparing the previous and current version of the Virtual DOM to determine which elements have changed, and then updating only those elements in the real DOM.

**Here's how Diffing works in React:**

* When a component's state or props change, React creates a new version of the Virtual DOM that reflects the updated UI.
* React then compares the previous and current versions of the Virtual DOM to determine which elements have changed.
* React identifies the differences between the previous and current versions of the Virtual DOM using a tree-diffing algorithm. This involves comparing each element in the previous and current versions of the Virtual DOM, and determining whether the element has been added, removed, or modified.
* Once React has identified the differences between the previous and current versions of the Virtual DOM, it generates a list of changes that need to be made to the real DOM.
* React then applies these changes to the real DOM using a process called "reconciliation". This involves updating the real DOM to match the new version of the Virtual DOM.
* By using Diffing, React is able to update the DOM efficiently, and avoid making unnecessary changes. This results in faster performance and a better user experience.
* It's important to note that Diffing can be an expensive process, especially if the Virtual DOM is large or complex. To optimize performance, React uses a number of strategies to minimize the amount of Diffing that needs to be done, such as using keys to identify which elements have changed, and batch updating changes to the DOM.

     ![183660810_160523102670424_6727267614249317342_n](https://user-images.githubusercontent.com/7718220/224822351-d0fa1877-081b-4265-808a-5950b74036e2.jpg)


##  Roles in Write React 
     1. The Component Must Start with Uppercase
     2. The Component Return Just One Root <div> ... </div>
     



 ## Differentiate between Real DOM and Virtual DOM.


| Real Dom    | Virtual Dom     |
| ------------| -------------   |
|It updates slow.     |  It updates faster.          | 
|Can directly update HTML. | Can’t directly update HTML.        |
|Creates a new DOM if element updates.|   Updates the JSX if element updates.    |
|DOM manipulation is very expensive| DOM manipulation is very easy.     |
|Too much of memory wastage| No memory wastage.     |


  
## what is the State
**`useState`** is a hook in React that allows you to add state to functional components. State is an object that represents the current status of the component and can be changed by the component itself or its children. With the useState hook, you can create state variables, and React will automatically re-render your component when the state changes.

```
const[count , setCount] = useState(0)
```
**count** : is the value contains cumulative count
**setCount** : is the function using React to update the count value 

[Example to useState](https://github.com/YakoobHammouri/GSG-React-Bootcamp-Bethlehem/tree/main/counter)

 ## what is the Props
 In React, **"props"** (short for "properties") are a mechanism for passing data and functionality from a parent component to its child components. A component can receive props as an argument to its function or class constructor.

**Props** are read-only, meaning that a component cannot modify its own props. Instead, **props** are used to configure a component's behavior and appearance based on the data passed in from its parent.
