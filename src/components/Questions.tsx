import { uniq } from 'lodash';
import { useState } from 'react';
import Question from './Question';
import ProgressBar from '@ramonak/react-progress-bar';
import { questions } from '../utils/data';

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
      <div className="flex flex-col w-full bg-white">
        <div className="h-8 rounded overflow-hidden">
          <ProgressBar completed={newWidth} />
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12"></div>
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
