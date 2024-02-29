import React, { useState } from 'react';


const questions = [
  {
    question: 'How much is your net worth?',
    options: [
      { label: 'Having only liabilities (-ve net worth)', value: 1 },
      { label: 'Up to 12 times monthly expenses', value: 2 },
      { label: '13–36 times of monthly expenses', value: 3 },
      { label: '37–48 times of monthly expenses', value: 4 },
      { label: '49–60 times of the monthly expenses', value: 5 },
    ],
  },
  {
    question: 'How much do you save of your monthly income?',
    options: [
      { label: 'Upto 5%', value: 1 },
      { label: '6 - 15%', value: 2 },
      { label: '16 - 25%', value: 3 },
      { label: '26 - 50%', value: 4 },
      { label: '51 - 75%', value: 5 },
    ],
  },
  {
    question: 'How many people are dependent on your income?',
    options: [
      { label: 'No dependency', value: 1 },
      { label: '1 dependent', value: 2 },
      { label: '2 dependent', value: 3 },
      { label: '3 dependent', value: 4 },
      { label: '4 or more', value: 5 },
    ],
  },
  {
    question: 'What is the consistency of your job and your income?',
    options: [
      { label: 'High (satisfied with job not gonna lose job)', value: 5 },
      { label: 'Moderate (unsatisfied / uncertain about job)', value: 3 },
      { label: 'Low (fear of losing job)', value: 1 },
    ],
  },
  {
    question: 'What is your current age?',
    options: [],
    inputType: 'numeric',
  },
  {
    question: 'At what age are you planning to retire?',
    options: [],
    inputType: 'numeric',
  },
  {
    question: 'How long will you keep investing?',
    options: [
      { label: '1 - 2 years', value: 1 },
      { label: '3 - 5 years', value: 2 },
      { label: '5 - 7 years', value: 3 },
      { label: '7+ years', value: 4 },
    ],
  },
  {
    question: 'What is the intent of the portfolio?',
    options: [
      { label: 'Generate income for today', value: 1 },
      { label: 'Generate income for later date', value: 2 },
      { label: 'To provide for my dependents (I will not be using these funds)', value: 3 },
      { label: 'To fund a large event in the future', value: 4 },
    ],
  },
  {
    question: 'What is the primary objective of your portfolio?',
    options: [
      { label: 'To prioritize security', value: 1 },
      { label: 'To aim for steady growth and avoiding fluctuation', value: 2 },
      { label: 'To balance between growth and security and keep up with inflation', value: 3 },
      { label: 'To focus on growth potential and accept some fluctuations in returns', value: 4 },
      { label: 'To solely pursue long term growth', value: 5 },
    ],
  },
  {
    question: 'What is your level of expertise in the stock market?',
    options: [
      { label: 'No knowledge (First time investor)', value: 1 },
      { label: 'Beginner Level (Already an investor / basic knowledge)', value: 2 },
      { label: 'Intermediate Level (good understanding of market)', value: 3 },
      { label: 'Expert Level (Investing in market for more than 3 years)', value: 4 },
      { label: 'Professional Level (investing in market for more than 5 years)', value: 5 },
    ],
  },
  {
    question: 'Consider an investment of 2 lakhs, how much fall can you tolerate in one month?',
    options: [
      { label: '0 - 5% OR Rs.10,000', value: 1 },
      { label: '6 - 10% OR Rs.10,000 to 20,000', value: 2 },
      { label: '11 - 20% OR Rs.20,000 to 40,000', value: 3 },
      { label: '21 - 30% OR Rs.40,000 to 60,000', value: 4 },
      { label: 'More than 30% or Rs.60,000', value: 5 },
    ],
  },
  {
    question: 'What is the maximum amount of time for which you can tolerate loss?',
    options: [
      { label: 'Less than 3 months', value: 1 },
      { label: 'Between 4 months to 1 year', value: 2 },
      { label: 'Between 1 - 2 years', value: 3 },
      { label: 'Between 2 - 3 years', value: 4 },
      { label: 'Between 3 - 5 years', value: 5 },
    ],
  },
];


const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalScore, setTotalScore] = useState(0);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [workDur,setWorkDurAdded] = useState(false);



  const handleOptionChange = (optionIndex) => {
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      newAnswers[currentQuestion] = optionIndex;
      return newAnswers;
    });
  };

  const handleNumericInput = (event) => {
    const numericValue = parseInt(event.target.value, 10);
    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      newAnswers[currentQuestion] = numericValue;
      return newAnswers;
    });
  };

  const calculateTotalScore = () => {
    let calculatedScore = 0;
    questions.forEach((question, questionIndex) => {
      const selectedOptionIndex = answers[questionIndex];
      if (
        selectedOptionIndex !== undefined &&
        question.options &&
        question.options[selectedOptionIndex]
      ) {
        calculatedScore += question.options[selectedOptionIndex].value;
      }
    });


    const currentAge = answers[4]; 
    const retirementAge = answers[5]; 

    if (currentAge !== undefined && retirementAge !== undefined && workDur===false) {
      const totalWorkingYears = retirementAge - currentAge;

      
      if (totalWorkingYears > 30) {
        calculatedScore += 6;
        setWorkDurAdded(true);
      } else if (totalWorkingYears >= 25 && totalWorkingYears<30) {
        calculatedScore += 5;
        setWorkDurAdded(true);
      } else if (totalWorkingYears >= 20 && totalWorkingYears<25) {
        calculatedScore += 4;
        setWorkDurAdded(true);
      } else if (totalWorkingYears >= 15 && totalWorkingYears<20) {
        calculatedScore += 3;
        setWorkDurAdded(true);
      } else if (totalWorkingYears < 15) {
        calculatedScore += 1;
        setWorkDurAdded(true);
      }

    }

    setTotalScore(calculatedScore);
    setShowFinalScore(true);
  };

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  return (

    <>
    <div className='bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen flex items-center justify-center'>
      <div className="quiz-container Container flex-col mx-auto  bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl  border-slate-900  border-2 overflow-hidden">
        <div className="quiz-header ">
          <h2 id="question" className='flex justify-center font-body mb-2 font-semibold rounded-xl  border-slate-900  border-2 py-4 text-2xl whitespace-normal break-words'>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].inputType === 'numeric' ? (
            <input
              type="number"
              onChange={handleNumericInput}
              value={answers[currentQuestion] || ''}
            />
          ) : (
            <ul>
              {questions[currentQuestion].options &&
                questions[currentQuestion].options.map((option, optionIndex) => (
                  <li key={optionIndex} className='flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500'>
                    <input
                      type="radio"
                      name="answer"
                      id={`option${optionIndex}`}
                      className="answer"
                      onChange={() => handleOptionChange(optionIndex)}
                      checked={answers[currentQuestion] === optionIndex}
                    />
                    <label htmlFor={`option${optionIndex}`} className='ml-4 cursor-pointer select-none w-full whitespace-normal break-words' id={`option${optionIndex}_text`}>
                      {option.label}
                    </label>
                  </li>
                ))}
            </ul>
          )}
        </div>
        {currentQuestion < questions.length - 1 ? (
          <button onClick={handleNext} className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ml-96 mt-6 '>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Next
                      </span>
          </button>
        ) : (
          <button onClick={calculateTotalScore} className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ml-96 mt-6'>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Submit
                      </span>
          </button>
        )}
        {showFinalScore && (
          <div>
            <p>Total Score: {totalScore}</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Questionnaire;
