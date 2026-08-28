import { useState, useCallback, useEffect ,useRef} from 'react'

function App() {
  const [Password, setPassword] = useState(""); 
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAlllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
const passRef=useRef(null);
  // Now making a password generator 
  const generatePassword = useCallback(() => {
    let mainString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed)
      mainString += "0123456789";

    if (charactersAllowed)
      mainString += "!@#$%^&+-=?/";

    let pass = "";

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random() * mainString.length);
      pass += mainString[num];
    }
    setPassword(pass);

  }, [length, numberAllowed, charactersAllowed, setPassword])


const copyPassword=useCallback(()=>{
  passRef.current?.select();// seleting optionaly as the field may be null
  window.navigator.clipboard.writeText(Password);
},[Password]);



  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charactersAllowed, generatePassword])

  return (
    // Added a full-screen dark background to center the card
    <div className="w-full h-screen bg-gray-900 pt-16 px-4">
      
      <div className='w-full max-w-md mx-auto shadow-xl rounded-xl px-6 py-8 text-orange-500 bg-gray-800 border border-gray-700'>
        <h1 className='text-2xl font-bold text-center text-white mb-6 tracking-wide'>
          Password Generator
        </h1>

        {/* Input and Button Wrapper */}
        <div className='flex shadow-sm rounded-lg overflow-hidden mb-8 border border-gray-600 focus-within:border-orange-500 transition-colors'>
          <input 
            type="text"
            value={Password}
            placeholder='Password'
            readOnly
            ref={passRef}
            className='outline-none w-full py-3 px-4 text-gray-800 font-medium bg-gray-100 selection:bg-orange-300'
          />
          <button className='outline-none bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold shrink-0 transition-colors duration-200'
          onClick={copyPassword}>
            Copy
          </button>
        </div>

        {/* Controls Wrapper */}
        <div className='flex flex-wrap items-center justify-between gap-y-4 gap-x-2 text-sm font-medium'>
          
          {/* Length Slider */}
          <div className='flex items-center gap-x-2 w-full sm:w-auto'>
            <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer accent-orange-500 w-24'
              onChange={(e) => (setLength(e.target.value))}
            />
            <label className='w-20 text-orange-400'>Length: {length}</label>
          </div>
          
          {/* Checkboxes */}
          <div className='flex items-center gap-x-4'>
            <div className='flex items-center gap-x-1.5'>
              <input 
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className='cursor-pointer w-4 h-4 accent-orange-500'
                onChange={() => {
                  setNumberAlllowed((prev) => !prev)
                }} 
              />
              <label htmlFor="numberInput" className='cursor-pointer text-orange-400 hover:text-orange-300 transition-colors'>
                Numbers
              </label>
            </div>

            <div className='flex items-center gap-x-1.5'>
              <input 
                type="checkbox"
                defaultChecked={charactersAllowed}
                id="characterInput"
                className='cursor-pointer w-4 h-4 accent-orange-500'
                onChange={() => {
                  setCharactersAllowed((prev) => !prev)
                }} 
              />
              <label htmlFor="characterInput" className='cursor-pointer text-orange-400 hover:text-orange-300 transition-colors'>
                Characters
              </label>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default App