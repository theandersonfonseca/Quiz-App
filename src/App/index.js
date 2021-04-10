import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import { COLORS } from '../configs/constants';
import { StyledApp } from './styles';
import questions from '../questions';
import StartButton from '../pages/Home/index';
import Quiz from '../pages/Quiz/index';
import GameOver from '../pages/GameOver/index';
import QuestionCounter from '../pages/QuestionCounter/index';
import Timer from '../pages/Timer/index';

function App() {
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [quizClass, setQuizClass] = useState(null);
  const [corrects, setCorrects] = useState(0);
  const { question, options, answer } = currentQuestion;
  const currentQuestionIndex =
    questions.findIndex((question) => question === currentQuestion) + 1;

  const [timer, setTimer] = useState(false);
  const [counter, setCounter] = useState(10);
  const countRef = useRef(counter);
  countRef.current = counter;

  const nextQuestion = useCallback(() => {
    setTimer(false);

    const nextQuestionIndex =
      questions.findIndex((question) => question.id === currentQuestion.id) + 1;

    setTimeout(() => {
      if (nextQuestionIndex === questions.length) {
        setGameOver(true);
        setCounter(10);
        return;
      } else {
        setCurrentQuestion(questions[nextQuestionIndex]);
        setQuizClass(null);
        setCounter(10);
        setTimer(true);
      }
    }, 2000);
  }, [currentQuestion.id]);

  useEffect(() => {
    let interval;
    if (timer) {
      interval = setInterval(() => {
        let currCount = countRef.current;

        if (currCount === 0) {
          setQuizClass('wrong');
          nextQuestion();
          return;
        }

        setCounter((currCount) => currCount - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, nextQuestion]);

  const checkAnswer = (e) => {
    const userAnswer = e.target.innerText;

    if (userAnswer === answer) {
      setQuizClass('correct');
      setCorrects(corrects + 1);
    } else {
      setQuizClass('wrong');
    }

    nextQuestion();
  };

  const goToHome = () => {
    setGameOver(false);
    setStarted(false);
    setCurrentQuestion(questions[0]);
    setQuizClass(null);
    setCorrects(0);
  };

  const startQuiz = () => {
    setStarted(true);
    setTimer(true);
  };

  return (
    <ThemeProvider theme={{ colors: COLORS }}>
      <StyledApp>
        {!started && <StartButton startQuiz={startQuiz} />}

        {started && !gameOver && (
          <>
            <QuestionCounter
              currentQuestionIndex={currentQuestionIndex}
              totalQuestions={questions.length}
            />

            <Quiz
              checkAnswer={checkAnswer}
              quizClass={quizClass}
              question={question}
              options={options}
            />

            <Timer time={counter} />
          </>
        )}

        {gameOver && (
          <GameOver
            corrects={corrects}
            totalQuestions={questions.length}
            goToHome={goToHome}
          />
        )}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
