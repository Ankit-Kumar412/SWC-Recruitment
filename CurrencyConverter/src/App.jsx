import { useState } from 'react'
import Input from "./components/Input.jsx"
import './App.css'
import useCurrencyInfo from "./Hooks/useCurrencyInfo"
function App() {
 
// Amount as a reactive variable 
const [amount,setAmount]=useState(0);
const [from,setFrom]=useState("usd"); // setting the default value to be usd
const [to,setTo]=useState("inr"); // setting the default value to be inr
// keeping track of the final conversion box 
const [convertedAmount,setConvertedAmount]=useState(0); 

const currencyInfo=useCurrencyInfo(from);
// not obtaning all the keys in the onject received form the 
 const Options=  Object.keys(currencyInfo);

// now the swapping logic 
const swap=()=>
   {setFrom(to);
    setTo(from);
setConvertedAmount(amount);
setAmount(convertedAmount);
}

// writting the conversion logic 

const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to]);
}

console.log(Options)

    return(
        <>
    
           <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{ backgroundImage:`url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop")`
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    // the onSubmit in the form 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        // as the form is submitted we will call the cosvert function
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                           label="From"  // setting the label of the first input box to be from
                           amount={amount}
                           currencyOption={Options}
                           onCurrencyChange={(currency)=>setFrom(currency)} // if there is a change in the value in the input box the same get back reflected to the amount field in the input box
                           selectCurrency={from}
                           onAmountChange={(amount)=>(setAmount(amount))}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                         type="button"
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
        onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                           label="TO"
                           amount={convertedAmount}
                           currencyOption={Options}
                           selectCurrency={to}
                           onCurrencyChange={(currency)=>{setTo(currency)}}
                           amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
        
        </>
    )
  
}

export default App
