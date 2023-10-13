import React from "react";
import "./index.scss";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result({ correcting }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correcting} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const listVariants = question.variants.map((variant, index) => (
    <li key={variant} onClick={() => onClickVariant(index)}>
      {variant}
    </li>
  ));

  return (
    <>
      <div className="progress">
        <div
          style={{
            width: `${Math.floor((step / questions.length) * 100)}%`,
          }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>{listVariants}</ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const [correcting, setCorrecting] = React.useState(0);
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrecting(correcting + 1);
    }
    console.log(correcting);
  };
  return (
    <div className="App">
      {step != questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correcting={correcting} />
      )}
    </div>
  );
}

export default App;
