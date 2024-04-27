import { Radio, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const QuizList = () => {
  const questions = useSelector((state) => state.quizData?.questions);
  return (
    <Stack
      direction="column"
      justifyContent="center"
      padding="20px"
      margin="auto"
      width={"100%"}
    >
      <h1>Questions:</h1>
      {questions.map((question) => (
        <Stack
          direction="column"
          justifyContent="center"
          margin="auto"
          sx={{
            marginTop: "10%",
            border: "1px solid black",
            borderRadius: "4px",
            width: "100%",
            padding: "10px",
          }}
        >
          <h4>{question.question}</h4>
          {question.options.map((option, index) => (
            <div
              onClick={(event) => {
                if (option.isCorrect) {
                  event.target.style.background = "green";
                  event.target.style.color = "white";
                }
              }}
              style={{
                border: "1px solid lightgray",
                padding: "5px 6px",
                margin: "8px 0",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {index + 1}. {option.value}
            </div>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default QuizList;
