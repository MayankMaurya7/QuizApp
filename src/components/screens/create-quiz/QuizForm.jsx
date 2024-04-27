import {
  Stack,
  TextField,
  Typography,
  Checkbox,
  FormLabel,
  Button,
} from "@mui/material";
import { v4 as uuid } from "uuid";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuiz } from "../../redux/slices/quizManagement";

export const QuizForm = () => {
  const [options, setOptios] = useState([uuid(), uuid()]);
  const [question, setQuestion] = useState("");
  const [optionValues, setOptionValues] = useState({});
  const dispatch = useDispatch();

  const handleCreateQuestion = (event) => {
    event.preventDefault();
    dispatch(
      setQuiz({
        question,
        options: Object.values(optionValues),
      })
    );
    alert("Question Created");
    setQuestion("");
    setOptionValues({});
  };

  return (
    <form onSubmit={handleCreateQuestion}>
      <Stack
        direction="column"
        justifyContent="center"
        padding="20px"
        margin="auto"
        sx={{
          marginTop: "10%",
          border: "1px solid black",
          borderRadius: "4px",
          width: "50%",
        }}
      >
        <Typography style={{ fontWeight: "800" }}>Question</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="question"
          label="Question"
          name="Question"
          autoFocus
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
          sx={{ margin: "15px 0" }}
        >
          <Typography style={{ fontWeight: "800" }}>Options:</Typography>
          <Button
            onClick={() => setOptios((prev) => [...prev, uuid()])}
            variant="contained"
          >
            Add Option +
          </Button>
        </Stack>

        {options.map((id, index) => (
          <div key={id}>
            <Stack direction={"row"} alignItems={"center"}>
              <span style={{ marginRight: "10px" }}>{index + 1}.</span>
              {console.log(optionValues[id]?.value)}
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id={"option_" + id}
                label={`Option ${index + 1}`}
                name={`Option ${index + 1}`}
                value={optionValues[id]?.value}
                onChange={(e) =>
                  setOptionValues((prev) => ({
                    ...prev,
                    [id]: { ...(prev[id] || {}), value: e.target.value, id },
                  }))
                }
              />
              <Button
                onClick={() =>
                  setOptios((prev) =>
                    prev.filter((prevItem) => prevItem !== id)
                  )
                }
                variant="outline"
                sx={{ marginTop: "10px" }}
              >
                Delete
              </Button>
            </Stack>
            <FormLabel sx={{ marginLeft: "2rem" }}>
              <span>Correct Ans:</span>
              <Checkbox
                checked={!!optionValues[id]?.isCorrect}
                onChange={(event) => {
                  setOptionValues((prev) => ({
                    ...prev,
                    [id]: {
                      ...(prev[id] || {}),
                      id,
                      isCorrect: event.target.checked,
                    },
                  }));
                }}
              />
            </FormLabel>
          </div>
        ))}
        <Button
          disabled={!question || !Object.values(optionValues).length}
          type="submit"
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Create Question
        </Button>
      </Stack>
    </form>
  );
};

export default QuizForm;
