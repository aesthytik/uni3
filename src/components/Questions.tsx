import Question from './Question';

const questions = [
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
];

const Questions = () => {
  return (
    <div className="flow-root w-full">
      <div className="text-lg text-black text-left mb-8">Questions</div>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {questions.map((question: any, index: number) => (
          <Question question={question} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Questions;
