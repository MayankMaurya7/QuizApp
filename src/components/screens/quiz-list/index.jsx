import { Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const QuizList = () => {
  const userList = useSelector((state) => state?.userData?.allUserDataBase);
  const params = useParams();
  const currentUser = userList?.filter((item) => item?.email === params?.id);
  const questions = currentUser[0]?.quizList;
  console.log("questions", questions);
  // const questions = useSelector((state) => state.quizData?.questions);
  const RenderQuizList = () => {
    return (
      <>
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
              width: "70%",
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
                  } else {
                    event.target.style.background = "red";
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
      </>
    );
  };
  const renderQuizList = () => {
    if (questions?.length) {
      return <RenderQuizList />;
    } else {
      return <h1>No Questions Added yet</h1>;
    }
  };
  return (
    <Stack
      direction="column"
      justifyContent="center"
      padding="20px"
      margin="auto"
      width={"100%"}
    >
      {renderQuizList()}
    </Stack>
  );
};

export default QuizList;
