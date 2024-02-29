

function Quiz() {
    return (
      <div className="bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen flex items-center justify-center">
              <div className='Container flex-col mx-auto  bg-white w-3/5 h-4/5 px-6 py-5 rounded-xl  border-slate-900  border-2 overflow-hidden  '>
                  <div className='Question flex justify-center font-body mb-2 font-semibold rounded-xl  border-slate-900  border-2 py-4 text-2xl whitespace-normal break-words'>
                      question
                  </div>
                  <div >
                      <ul>
                          <li className="flex px-4 mt-3 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500">
                              <input type="radio" name="a" id="a" className="hidden" />
                              <label htmlFor="a" className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words">
                              Option1
                              </label>
                          </li>
                          <li className="flex px-4 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500 mt-3">
                              <input type="radio" name="a" id="b" className="hidden" />
                              <label htmlFor="b" className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words">
                              Option2
                              </label>
                          </li>
                          <li className="flex px-4 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500 mt-3">
                              <input type="radio" name="a" id="c" className="hidden" />
                              <label htmlFor="c" className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words">
                              Option3
                              </label>
                          </li>
                          <li className="flex px-4 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500 mt-3">
                              <input type="radio" name="a" id="d" className="hidden" />
                              <label htmlFor="d" className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words">
                              Option4
                              </label>
                          </li>
                          <li className="flex px-4 mb-4 font-body rounded-xl border-2 py-3 border-slate-900 hover:border-green-500 hover:text-green-500 mt-3">
                              <input type="radio" name="a" id="e" className="hidden" />
                              <label htmlFor="e" className="ml-4 cursor-pointer select-none w-full whitespace-normal break-words">
                              option5
                              </label>
                          </li>
                      </ul>
  
  
                      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ml-96 ">
                          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Next
                      </span>
                      </button>
  
                  </div>
          </div>
      </div>
    )
  }
  
  export default Quiz
  