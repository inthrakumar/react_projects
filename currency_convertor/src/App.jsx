import { useState } from "react";
import useCurrencyinfo from "./hooks/useCurrencyInfo";
import { Input_box } from "./components";
function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);
  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);
  const swap = () => {
    const originalFrom = from;
    const originalTo = to;
    const originalAmount = amount;
    const originalConvertedAmount = convertedamount;
    setfrom(originalTo);
    setto(originalFrom);
    setamount(0);
    setconvertedamount(0);
  };
  const convert = () => {
    console.log("running");
    setconvertedamount(amount * currencyinfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              
            >
              <div className="w-full mb-1">
                <Input_box
                  label="From"
                  amount={amount}
                  currencyoptions={options}
                  onCurrencyChange={(currency) => setfrom(currency)}
                  onAmountChange={(amount) => setamount(amount)}
                  selectedcurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={(e)=>{
                    e.preventDefault()
                    swap()
                  }}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <Input_box
                  label="To"
                  currencyoptions={options}
                  amount={convertedamount}
                  onCurrencyChange={(currency) => setto(currency)}
                  selectedcurrency={to}
                  disable_currency={true}
                />
              </div>
              <button
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
