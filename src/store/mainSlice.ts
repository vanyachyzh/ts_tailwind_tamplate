/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// Перший параметр ім'я екшну. В нормальних редьюсерах це ім'я формується автоматично, береться name слайсу, слеш і назва редьюсера.
// В санці таке ім'я треба придумати самому

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function (payload: number, { rejectWithValue }) {
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/todos/' + payload,
      );

      if (!res.ok) {
        // Якщо на бекенді виникне якась помилка, то він відправить нам все одно об'єкт з помилкою
        // і ми не зрозуміємо, що сталася помилка бо відповідь в принципі ми отримали, тому треба використовувати таку перевірку
        throw new Error('Failed to fetch user data');
      }
      return res.json();
    } catch (error: any) {
      // цей метод поверне помилку і ми зможемо отримати доступ до неї в fetchTodos.rejected
      return rejectWithValue(error.message);
    }
  },
);

const mainSlice = createSlice({
  name: 'main',
  initialState: { count: 0, todos: [] },
  reducers: {
    increase(state) {
      state.count++;
    },

    increaseByNumber(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },

    decrease(state) {
      state.count--;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, () => {
        //
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<any>) => {
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (_, action) => {
        console.log(action.payload);
      });
  },
});

export const { increase, decrease, increaseByNumber } = mainSlice.actions;

export default mainSlice.reducer;
