import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  background-color: cornflowerblue;
  color: white;
  font-size: 50px;
  font-weight: 600;
  padding: 10px 100px;
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

const StyledInput = styled.input`
  all: unset;
  width: 300px;
  height: 50px;
  font-size: 20px;
`;

const StyledButton = styled.button`
  all: unset;
  width: 30px;
  height: 50px;
  font-size: 20px;
  padding-left: 10px;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    setTodoList([...todoList, inputValue]); // 기존에 todoList 배열에 있는 값은 유지하며 추가로 inputValue 값을 추가함
  };
  const deleteItem = (index) => {
    //삭제 버튼 누른 value를 todoList 배열에서 삭제
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };
  return (
    <StyledMain>
      <StyledTitle>Todo List</StyledTitle>
      <StyledDiv>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <StyledButton onClick={addItem}>
          <FontAwesomeIcon icon={faPlus} />
        </StyledButton>
      </StyledDiv>
      {todoList.map((value, index) => {
        return (
          <div>
            {value}
            <button
              onClick={() => {
                deleteItem(index);
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>
        );
      })}
    </StyledMain>
  );
}

export default App;
