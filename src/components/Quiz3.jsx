import { useState } from 'react';

function Quiz2() {
  // State to store user's selections
  const [answers, setAnswers] = useState({
    q1: 0,
    q2: 0,
    q3: 0,
    // Add more keys for other questions
  });

  // Function to handle user selection
  const handleSelection = (question, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [question]: value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen flex items-center justify-center">
      <div className='Container flex-col bg-white w-2/5 h-4/5 px-6 py-5 rounded-xl border-slate-900 border-2 overflow-hidden'>
        {/* Question 1 */}
        <div className='Question flex justify-center font-body mb-2 font-semibold rounded-xl border-slate-900 border-2 py-4 text-2xl whitespace-normal break-words'>
          How much is your net worth?
        </div>
        <ul>
          <li onClick={() => handleSelection('q1', 1)}>Having only liabilities (-ve net worth)</li>
          <li onClick={() => handleSelection('q1', 2)}>Up to 12 times monthly expenses</li>
          <li onClick={() => handleSelection('q1', 3)}>13–36 times of monthly expenses</li>
          <li onClick={() => handleSelection('q1', 4)}>37–48 times of monthly expenses</li>
          <li onClick={() => handleSelection('q1', 5)}>49–60 times of the monthly expenses</li>
        </ul>

        {/* Question 2 */}
        <div className='Question flex justify-center font-body mb-2 font-semibold rounded-xl border-slate-900 border-2 py-4 text-2xl whitespace-normal break-words'>
          How much do you save of your monthly income?
        </div>
        <ul>
          <li onClick={() => handleSelection('q2', 1)}>Upto 5%</li>
          <li onClick={() => handleSelection('q2', 2)}>6 - 15%</li>
          <li onClick={() => handleSelection('q2', 3)}>16 - 25%</li>
          <li onClick={() => handleSelection('q2', 4)}>26  -  50%</li>
          <li onClick={() => handleSelection('q2', 5)}>51 - 75%</li>
        </ul>

        {/* Repeat the structure for other questions */}
      </div>
    </div>
  )
}

export default Quiz2;
