import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoCard from "../components/TodoCard";

const List = () => {
  const { todos } = useSelector((state) => state.todos);

  return (
    <>
      <H2> -Working- 🔥🔥</H2>
      <StTodos>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <TodoCard todo={todo} key={todo.id}></TodoCard>
          ))}
      </StTodos>

      <H2> -Done- 😉 🎉</H2>
      <StTodos>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <TodoCard todo={todo} key={todo.id}></TodoCard>
          ))}
      </StTodos>
    </>
  );
};

export default List;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  background-color: white;
  padding-bottom: 30px;
`;

const H2 = styled.h2`
  color: #616161;
  padding-bottom: 20px;
  padding-top: 10px;
`;
