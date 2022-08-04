export const questions = [
  {
    id: 0,
    title: 'What is redux?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'Router',
        isCorrect: false,
        explanation:
          'Redux is not a router. React Router is an example of router.',
        link: 'https://www.geeksforgeeks.org/reactjs-router',
      },
      {
        id: 1,
        title: 'Global State Management',
        isCorrect: true,
        explanation:
          'Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environments and are easy to test.',
        link: 'https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/',
      },
    ],
  },
  {
    id: 1,
    title: 'What is React?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'Framework',
        isCorrect: false,
        explanation:
          'React is not a framework. React is a library to build UIs',
        link: 'https://www.geeksforgeeks.org/reactjs-router',
      },
      {
        id: 1,
        title: 'Library',
        isCorrect: true,
        explanation:
          'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
        link: 'https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/',
      },
    ],
  },
  {
    id: 2,
    title: 'What are props in React?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'Props are inputs to a React component. ',
        isCorrect: true,
        explanation:
          'We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.',
        link: 'https://www.freecodecamp.org/news/how-to-use-props-in-react/#:~:text=What%20are%20props%20in%20React,your%20app%20to%20be%20dynamic.',
      },
      {
        id: 1,
        title: 'UI styling library',
        isCorrect: false,
        explanation:
          'Props and UI library are different. UI styling library gives tools to design UI. We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.',
        link: 'https://www.freecodecamp.org/news/how-to-use-props-in-react/#:~:text=What%20are%20props%20in%20React,your%20app%20to%20be%20dynamic.',
      },
      {
        id: 2,
        title: 'State management tool',
        isCorrect: false,
        explanation: 'Props are not used to manage states',
        link: 'https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/',
      },
    ],
  },
  {
    id: 3,
    title: 'What are React Hooks?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'Functions for fast rendering.',
        isCorrect: false,
        explanation:
          'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.',
        link: 'https://reactjs.org/docs/hooks-overview.html#',
      },
      {
        id: 1,
        title:
          'Let you use state and other React features without writing a class.',
        isCorrect: true,
        explanation:
          'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.',
        link: 'https://reactjs.org/docs/hooks-overview.html#',
      },
      {
        id: 2,
        title: 'For doing phishing.',
        isCorrect: false,
        explanation: 'Hooks in react are not phishing attempts.',
        link: 'https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/',
      },
    ],
  },
  {
    id: 4,
    title: 'What is JSX?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'YML file interface',
        isCorrect: false,
        explanation:
          'A YML file is a text document that contains data formatted using YAML, so not related to JSX',
        link: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        id: 1,
        title: 'Json implementation of html',
        isCorrect: false,
        explanation: 'JSON is javascript Object notation',
        link: 'https://reactjs.org/docs/introducing-jsx.html',
      },
      {
        id: 2,
        title: 'JavaScript XML',
        isCorrect: true,
        explanation: 'it is a syntax extension to JavaScript',
        link: 'https://reactjs.org/docs/introducing-jsx.html',
      },
    ],
  },
  {
    id: 5,
    title: 'What do you understand by Virtual DOM?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'Virtual Reality apps in react',
        isCorrect: false,
        explanation: 'Virtual reality is entirely different concept',
        link: 'https://www.geeksforgeeks.org/reactjs-virtual-dom/',
      },
      {
        id: 1,
        title:
          'A Virtual DOM is a lightweight JavaScript object which is an in-memory representation of real DOM',
        isCorrect: true,
        explanation:
          'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
        link: 'https://www.geeksforgeeks.org/reactjs-virtual-dom/',
      },
      {
        id: 2,
        title: 'Local Storage capabilities in react.',
        isCorrect: false,
        explanation:
          'Local storage is used to store key values in the browser like tokens',
        link: 'https://www.geeksforgeeks.org/reactjs-virtual-dom/',
      },
    ],
  },
  {
    id: 6,
    title: 'What is an event in React?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'The rerenders of the component is an event',
        isCorrect: false,
        explanation: 'Rerenders in react happen due to state changes',
        link: 'https://www.javatpoint.com/react-events',
      },
      {
        id: 1,
        title:
          'An event is an action which triggers as a result of the user action or system generated event',
        isCorrect: true,
        explanation:
          'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes',
        link: 'https://www.javatpoint.com/react-events',
      },
      {
        id: 2,
        title: 'Events are user generated logs found in the cache',
        isCorrect: false,
        explanation: 'Logs can be seen in console tab in browser',
        link: 'https://www.javatpoint.com/react-events',
      },
    ],
  },
  {
    id: 7,
    title: 'What is Babel?',
    difficulty: 8,
    options: [
      {
        id: 0,
        title: 'JavaScript compiler',
        isCorrect: true,
        explanation:
          'React is not a framework. React is a library to build UIs',
        link: 'https://www.geeksforgeeks.org/reactjs-router',
      },
      {
        id: 1,
        title: 'JavaScript interpreter',
        isCorrect: false,
        explanation: 'Babel is not an interpreter',
        link: 'https://babeljs.io/',
      },
      {
        id: 2,
        title: 'JavaScript transpiler',
        isCorrect: false,
        explanation: 'Babel is not an transpiler',
        link: 'https://babeljs.io/',
      },
      {
        id: 3,
        title: 'None of the above',
        isCorrect: false,
        explanation: 'Babel is a JavaScript compiler.',
        link: 'https://babeljs.io/',
      },
    ],
  },
  {
    id: 8,
    title: 'A state in React.js is also known as?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'The internal storage of the component',
        isCorrect: true,
        explanation: 'State is internal storage of component',
        link: 'https://www.w3schools.com/react/react_state.asp',
      },
      {
        id: 1,
        title: 'External storage of the component',
        isCorrect: false,
        explanation: 'State is not external storage',
        link: 'https://www.w3schools.com/react/react_state.asp',
      },
      {
        id: 2,
        title: 'Permanent storage',
        isCorrect: false,
        explanation: 'State is permanent storage',
        link: 'https://www.w3schools.com/react/react_state.asp',
      },
      {
        id: 3,
        title: 'All of the above',
        isCorrect: false,
        explanation: 'State is internal storage',
        link: 'https://www.w3schools.com/react/react_state.asp',
      },
    ],
  },
  {
    id: 9,
    title: 'Why is ref used?',
    difficulty: 1,
    options: [
      {
        id: 0,
        title: 'to bind the function',
        isCorrect: false,
        explanation: 'to bind the function bind() is used',
        link: 'https://www.javatpoint.com/react-refs',
      },
      {
        id: 1,
        title: 'to call a function',
        isCorrect: false,
        explanation: 'Function is called using function() syntax',
        link: 'https://www.javatpoint.com/react-refs',
      },
      {
        id: 2,
        title: 'to directly access the DOM node',
        isCorrect: true,
        explanation: 'Yes',
        link: 'https://www.javatpoint.com/react-refs',
      },
      {
        id: 3,
        title: 'to refer to another JS file',
        isCorrect: false,
        explanation: 'Refs are use to access dom node',
        link: 'https://www.javatpoint.com/react-refs',
      },
    ],
  },
];
