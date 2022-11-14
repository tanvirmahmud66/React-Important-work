import { Button, TextField, Typography } from "@mui/material";
import { Box} from "@mui/system";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";


export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleButton = () => {
    // setTodoArr([...todoArr,todo]);
    if (todo) {
      setTodoArr((old) => {
        return [todo,...old];
      });
      setTodo("");
    }
  };

  const removeItem = (id) => {
    setTodoArr((old)=>{
      return old.filter((each,index)=>{
        return index!==id;
      })
    })
  }
  

  return (
    <div className="todo-wrapper">
      <Box
        width="600px"
        height="500px"
        display="flex"
        justifyContent="flexStart"
        alignitem="center"
        border="2px solid rgb(52, 153, 248)"
        borderRadius="10px"
        padding="3rem"
        flexDirection="column"
      >
        <Typography variant="h6" color="rgb(52, 153, 248)" gutterBottom textAlign="center">
          TODO APP
        </Typography>
        <Box display="flex" marginBottom="2rem">
          <TextField
            label="Todo here"
            fullWidth
            type="text"
            autoComplete="off"
            variant="filled"
            value={todo}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleButton}
          >
            Add
          </Button>
        </Box>
        <Box
          width="100%"
          height="100%"
          border="1px solid rgb(52, 153, 248)"
          overflow="scroll"
          borderRadius="5px"
          padding=".5rem"
        >
          {todoArr.map((each, id) => {
            return (
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding=".5rem"
                backgroundColor="rgb(52, 153, 248)"
                color="white"
                borderRadius="5px"
                overflow="hidden"
                marginBottom="1rem"
                key={id}
              >
                <Typography variant="h6">{each}</Typography>
                <Box >
                  <DeleteIcon cursor="pointer" onClick={()=> removeItem(id)}/>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
}
