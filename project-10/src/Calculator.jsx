import React, { useEffect, useState } from "react";
import "./calculator.css";

const buttons = [
  "AC",
  "DEL",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

function formatResult(value) {
  if (value === "Error" || value === null || value === undefined) {
    return "Error";
  }

  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "Error";
  }

  const rounded = Number(number.toFixed(10));
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

function calculateValue(first, second, operator) {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    case "/":
      if (second === 0) return "Error";
      return first / second;
    default:
      return second;
  }
}

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [shouldReplace, setShouldReplace] = useState(false);

  const clearCalculator = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setShouldReplace(false);
  };

  const deleteLast = () => {
    if (display === "Error") {
      clearCalculator();
      return;
    }

    if (display.length <= 1) {
      setDisplay("0");
      return;
    }

    const nextValue = display.slice(0, -1);
    setDisplay(nextValue === "" ? "0" : nextValue);
  };

  const addNumber = (value) => {
    if (display === "Error") {
      clearCalculator();
    }

    if (shouldReplace || display === "0") {
      setDisplay(String(value));
      setShouldReplace(false);
      return;
    }

    setDisplay((prev) => prev + value);
  };

  const addDecimal = () => {
    if (display === "Error") {
      clearCalculator();
      return;
    }

    if (shouldReplace) {
      setDisplay("0.");
      setShouldReplace(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay((prev) => prev + ".");
    }
  };

  const chooseOperator = (nextOperator) => {
    if (display === "Error") {
      return;
    }

    const currentValue = Number(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
      setOperator(nextOperator);
      setShouldReplace(true);
      return;
    }

    const result = calculateValue(previousValue, currentValue, operator);
    const formatted = formatResult(result);

    setPreviousValue(Number(formatted));
    setOperator(nextOperator);
    setDisplay(formatted);
    setShouldReplace(true);
  };

  const calculateResult = () => {
    if (display === "Error" || previousValue === null || operator === null) {
      return;
    }

    const currentValue = Number(display);
    const result = calculateValue(previousValue, currentValue, operator);
    const formatted = formatResult(result);

    setDisplay(formatted);
    setPreviousValue(null);
    setOperator(null);
    setShouldReplace(true);
  };

  const calculatePercentage = () => {
    if (display === "Error") {
      return;
    }

    const currentValue = Number(display);
    const result = currentValue / 100;
    setDisplay(formatResult(result));
    setShouldReplace(true);
  };

  const runAction = (value) => {
    if (/[0-9]/.test(value)) {
      addNumber(value);
      return;
    }

    switch (value) {
      case "AC":
        clearCalculator();
        break;
      case "DEL":
        deleteLast();
        break;
      case "%":
        calculatePercentage();
        break;
      case ".":
        addDecimal();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        chooseOperator(value);
        break;
      case "=":
        calculateResult();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;

      if (/^[0-9]$/.test(key)) {
        event.preventDefault();
        addNumber(key);
        return;
      }

      if (["+", "-", "*", "/", "%", "."].includes(key)) {
        event.preventDefault();
        runAction(key);
        return;
      }

      if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculateResult();
        return;
      }

      if (key === "Backspace") {
        event.preventDefault();
        deleteLast();
        return;
      }

      if (key === "Escape" || key === "Delete") {
        event.preventDefault();
        clearCalculator();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [display, previousValue, operator, shouldReplace]);

  return (
    <main className="calculator-page">
      <section className="calculator-card" aria-label="Simple calculator">
        <div className="calculator-display" aria-live="polite">
          {display}
        </div>

        <div className="calculator-grid">
          {buttons.map((button) => {
            const isOperator = ["+", "-", "*", "/"].includes(button);
            const isEqual = button === "=";
            const isFunction = ["AC", "DEL", "%"].includes(button);
            const isZero = button === "0";

            return (
              <button
                key={button}
                type="button"
                className={[
                  "calc-btn",
                  isOperator ? "operator-btn" : "",
                  isEqual ? "equal-btn" : "",
                  isFunction ? "function-btn" : "",
                  isZero ? "zero-btn" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => runAction(button)}
              >
                {button}
              </button>
            );
          })}
        </div>

        <p className="keyboard-note">Keyboard: numbers · operators · Enter · Backspace · Escape</p>
      </section>
    </main>
  );
}

export default Calculator;
