import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todoSlice";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (title === "" || body === "") return;

    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 1000),
        title: title,
        body: body,
        isDone: false,
      })
    );

    setTitle("");
    setBody("");
  };

  return (
    <StFormContainer>
      <StInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></StInput>

      <StInput
        type="text"
        placeholder="내용을 입력하세요"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></StInput>
      <StButton onClick={addTodoHandler}>추가하기</StButton>
    </StFormContainer>
  );
};

export default Form;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #ff6863;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 2px solid #616161;
  margin: 0 2px;
  height: 40px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 5px;
`;
