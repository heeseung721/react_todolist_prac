import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();
  const { todos } = useSelector((state) => state.todos);
  const navigate = useNavigate();

  const data = todos.find((todo) => {
    return todo.id === +id;
  });

  return (
    <DetailWrap>
      <BackBtn onClick={() => navigate(-1)}>이전으로</BackBtn>
      <Id>id: {id}</Id>
      <Title>{data.title}</Title>
      <Body>{data.body}</Body>
    </DetailWrap>
  );
};

export default Detail;

const DetailWrap = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  padding: 5%;
`;

const BackBtn = styled.button`
  border: none;
  background-color: #ff6863;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
  width: 100px;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const Id = styled.h3`
  color: #616161;
`;

const Title = styled.h1`
  color: #616161;
`;

const Body = styled.h2`
  color: #616161;
`;
