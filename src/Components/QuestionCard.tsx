import React, { FC } from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.style";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  let num = 1;
  return (
    <Wrapper>
      <p className="number">
        Question:{questionNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers?.map((item) => {
          return (
            <ButtonWrapper
              key={num++}
              correct={userAnswer?.correctAnswer === item}
              userClicked={userAnswer?.answer === item}
            >
              <button
                disabled={userAnswer ? true : false}
                value={item}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
              </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
