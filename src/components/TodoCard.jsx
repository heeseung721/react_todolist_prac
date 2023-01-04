import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, doneTodo } from "../redux/modules/todoSlice";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <StTodo key={todo.id}>
      <Title>{todo.title}</Title>
      <Body>{todo.body}</Body>

      <BtnSet>
        <DelBtn onClick={() => dispatch(deleteTodo(todo.id))}>삭제</DelBtn>
        <DoneBtn onClick={() => dispatch(doneTodo(todo.id))}>
          {todo.isDone ? "취소" : "완료"}
        </DoneBtn>
      </BtnSet>

      <Link to={`/detail/${todo.id}`}>
        <DetailBtn>상세보기</DetailBtn>
      </Link>
    </StTodo>
  );
};

export default TodoCard;

const StTodo = styled.div`
  border: 3px solid #616161;
  width: 25%;
  height: 200px;
  overflow: auto; //박스를 넘어갔을때 자연스러운 처리
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border-radius: 15px;
`;

const DelBtn = styled.button`
  border-radius: 10px;
  cursor: pointer;
  width: 95px;
  height: 30px;
  background-color: #616161;
  border: 2px solid #616161;
  color: white;
`;

const DoneBtn = styled.button`
  border-radius: 10px;
  cursor: pointer;
  width: 95px;
  height: 30px;
  background-color: #616161;
  border: 2px solid #616161;
  color: white;
`;

const BtnSet = styled.div`
  display: flex;
  gap: 5px;
  padding-bottom: 15px;
`;

const DetailBtn = styled.span`
  cursor: pointer;
  color: #616161;
  margin-top: 30px;
`;

const Title = styled.h1`
  color: #616161;
`;

const Body = styled.div`
  color: #616161;
  font-weight: 700;
  padding-bottom: 20px;
`;
