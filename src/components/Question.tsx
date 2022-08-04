import React, { useState } from 'react';
import { BsCircle } from 'react-icons/bs';
import { MdCancel, MdCheck } from 'react-icons/md';

const Question = ({
  question,
  index,
  addCorrectAnswer,
  removeInCorrectAnswer,
}: any) => {
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);

  const handleSelection = (option: any) => {
    setCurrentSelection(option.id);
    if (option.isCorrect) {
      addCorrectAnswer(question);
    }
    if (!option.isCorrect) {
      removeInCorrectAnswer(question);
    }
  };

  return (
    <div className="w-full sm:p-4 px-4 mb-6">
      <h1 className="text-left font-medium text-xl mb-2 text-gray-900">
        {index + 1}. {question.title}
      </h1>
      <div>
        {question.options.map((option: any) => (
          <>
            <div
              className="p-2 w-full cursor-pointer"
              onClick={() => handleSelection(option)}
            >
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                {currentSelection === option.id && (
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                )}
                {currentSelection !== option.id && (
                  <BsCircle size={22} className="text-indigo-500 mr-3" />
                )}
                <span className="title-font font-medium">{option.title}</span>
                {currentSelection === option.id && !option.isCorrect && (
                  <MdCancel size={22} className="text-red-500 ml-3" />
                )}
                {currentSelection === option.id && option.isCorrect && (
                  <MdCheck size={22} className="text-green-500 ml-3" />
                )}
              </div>
            </div>
            {currentSelection === option.id && !option.isCorrect && (
              <>
                <p className="p-2 text-left text-base">{option.explanation}</p>
                <p className="p-2 text-left mt-4">
                  Reference:{' '}
                  <a href={option.link} className="text-blue-600">
                    {option.link}
                  </a>
                </p>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Question;
