import React from 'react'

function Input(
   { label,// this to know wheter we want five TO/FROM
    amount,
    onAmountChange, // the input baxx will change if there is cnage in the currency amount
    onCurrencyChange, // there is a change in the input box when the currency value
    currencyOption=[],// takiing an empty array so that in case the user try to pass a empty array the app doesnt fails 
    selectCurrency="usd",
    amountDisabled=false,
    currencyDisable=false,

    className="", // this allows the user to add its own css to the input box 
}

) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label   className="text-black/40 mb-2 inline-block">
                  {label}{ /*  this is being displayed as TO/FROM in the input box*/}
                </label>

                <input
                  type="number" // the amount entered in this field is sure to be a number 
                  placeholder='Amount'
                  disabled={amountDisabled} // is the field allowed to change by the user or not 
                    value={amount} // It is the value written by the user
                   onChange={(e) => onAmountChange && onAmountChange(e.target.value === "" ? "" : Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5" // it id just for styling purpose 
                   
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>(onCurrencyChange&& onCurrencyChange(String(e.target.value)))}

                    >
                   
                {  currencyOption.map((currency,index)=>(
                    <option key={index} value={currency}>{currency}</option>
                ))}
                </select>
            </div>
        </div>
    )
 
 

}

export default Input;
