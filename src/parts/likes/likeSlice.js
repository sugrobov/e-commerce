import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likes: []
}

export const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        add: (state, action) => {
            const isExist = state.likes.findIndex(note => note.id === action.payload.id);
            if (isExist < 0) state.likes.push(action.payload) /* добавляем только, если запись не существует в списке */
            else /* в противном случае удаляем из массива */
                state.likes = state.likes.filter(note => note.id !== action.payload.id)
        },
       /*  remove: (state, action) => {
            state.likes = state.likes.filter(note => note.id !== action.payload)
        } */
    }
});

export const { add/* , remove */ } = likeSlice.actions;
export default likeSlice.reducer;
