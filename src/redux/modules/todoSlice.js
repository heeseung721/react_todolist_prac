import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "this week",
      body: "study react",
      isDone: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      console.log(action);
      console.log(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
    },
    doneTodo: (state, action) => {
      state.todos = state.todos.map((elem) =>
        elem.id === action.payload ? { ...elem, isDone: !elem.isDone } : elem
      );
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { addTodo, deleteTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
