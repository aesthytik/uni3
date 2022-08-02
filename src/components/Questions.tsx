import { uniq } from 'lodash';
import { useState } from 'react';
import Question from './Question';
import ProgressBar from '@ramonak/react-progress-bar';

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
];

const Questions = () => {
  // const [progress, setProgress] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState<any[]>([]);

  const addCorrectAnswer = (answer: any) => {
    setCorrectAnswers(uniq(correctAnswers.concat(answer)));
  };

  const removeInCorrectAnswer = (answer: any) => {
    const filteredAnswers = correctAnswers.filter(
      (item) => item.id !== answer.id,
    );
    setCorrectAnswers([...filteredAnswers]);
  };

  const newWidth = (correctAnswers.length / questions.length) * 100;

  return (
    <div className="flow-root w-full">
      <div className="flex flex-col">
        <div className="h-8 rounded overflow-hidden">
          <ProgressBar completed={newWidth} />
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <p className="leading-relaxed text-base sm:pl-10 pl-0">Progress</p>
        </div>
      </div>
      <div className="text-lg text-black text-left mb-8">Questions</div>
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {questions.map((question: any, index: number) => (
          <Question
            question={question}
            index={index}
            setCorrectAnswers={setCorrectAnswers}
            addCorrectAnswer={addCorrectAnswer}
            removeInCorrectAnswer={removeInCorrectAnswer}
          />
        ))}
      </ul>
    </div>
  );
};

export default Questions;
