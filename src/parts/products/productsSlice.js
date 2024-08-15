import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems: [],
	amount: 0,
	// total: 0
};

const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		productAdded: (state, action) => {
			state.amount = state.amount + 1;
			const cartItem = state.cartItems.find(item => item.id === action.payload.id);
			if (cartItem) { /* если найден в store, увеличиваем кол-во */
				cartItem.amount = cartItem.amount + 1
			} else 			/* иначе устанавливаем кол-во в "1" */
				state.cartItems.push({ ...action.payload, amount: 1 })


		},
		productIncrease: (state, action) => {
			// state.amount = state.amount++;
			state.amount++;
			const index = state.cartItems.findIndex(item => item.id === action.payload.id);
			state.cartItems[index].amount += 1;

			let total = 0;
			total = state.cartItems[index].amount * state.cartItems.price;

		},
		productDecrease: (state, action) => {
			// state.amount = state.amount - 1;
			const index = state.cartItems.findIndex(item => item.id === action.payload.id);
			// state.cartItems[index].amount -= 1;

			// let total = 0;
			// total = state.cartItems[index].amount * state.cartItems.price
			state.cartItems[index].amount > 0 &&
				state.cartItems[index].amount-- && state.amount--;

		},
		productRemove: (state, action) => {
			state.cartItems.map(item => {
				if (item.id === action.payload.id) {
					state.cartItems = state.cartItems.filter(note => note.id !== item.id)
					state.amount = state.amount - item.amount;
					
				}
				
			})
		},
		clear: (state) => {
			state.cartItems = [];
			state.amount = 0;
		}

	}
});

export const { productAdded, productIncrease, productDecrease, productRemove, clear } = productSlice.actions;
export default productSlice.reducer;