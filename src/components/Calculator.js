import "./Calculator.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
const Calculator = () => {
  const [inp, setInput] = useState("0"); //7-
  const [out, setOutput] = useState(0); //6
  const changeHandler = (event) => {
    try {
      if (inp[0] === "0") {
        setInput(event.target.value);
      } else {
        setInput((prevState) => prevState + event.target.value);
      }
    } catch (e) {
        toast.error("Invalid Operation,Kindly input valid operation!");
    }
  };
  const ansHandler = () => {
    try{
      setOutput(parseFloat(eval(inp).toFixed(2)));
      toast.success("Calculation successful!");
    }
    catch(e){
      toast.error("Invalid Operation,Kindly input valid operation!");
    }
  };
  const clearHandler = () => {
    setInput("0");
    setOutput("");
  };
  const delHandler = () => {
    if (inp.length !== 0) {
      setInput(inp.substring(0, inp.length - 1));
    }
  };
  return (
    <div className="container">
      <div className="calcbox">
        <div className="inp" value={inp}>
          {inp}
        </div>
        <div className="out" value={out}>
          Ans = {out}
        </div>
      </div>
      <button className="btn" onClick={clearHandler}>
        AC
      </button>
      <button className="btn" onClick={delHandler}>
        DEL
      </button>
      <button className="btn" value="%" onClick={changeHandler}>
        %
      </button>
      <button className="btn btnspl" value="/" onClick={changeHandler}>
        /
      </button>
      <button className="btn" value="7" onClick={changeHandler}>
        7
      </button>
      <button className="btn" value="8" onClick={changeHandler}>
        8
      </button>
      <button className="btn" value="9" onClick={changeHandler}>
        9
      </button>
      <button className="btn btnspl" value="*" onClick={changeHandler}>
        *
      </button>
      <button className="btn" value="4" onClick={changeHandler}>
        4
      </button>
      <button className="btn" value="5" onClick={changeHandler}>
        5
      </button>
      <button className="btn" value="6" onClick={changeHandler}>
        6
      </button>
      <button className="btn btnspl" value="-" onClick={changeHandler}>
        -
      </button>
      <button className="btn" value="1" onClick={changeHandler}>
        1
      </button>
      <button className="btn" value="2" onClick={changeHandler}>
        2
      </button>
      <button className="btn" value="3" onClick={changeHandler}>
        3
      </button>
      <button className="btn btnspl" value="+" onClick={changeHandler}>
        +
      </button>
      <button className="btn" value="**" onClick={changeHandler}>
        ^
      </button>
      <button className="btn" value="0" onClick={changeHandler}>
        0
      </button>
      <button className="btn" value="." onClick={changeHandler}>
        .
      </button>
      <button className="btn btnsplspl" onClick={ansHandler}>
        =
      </button>
      <ToastContainer />
    </div>
  );
};

export default Calculator;
