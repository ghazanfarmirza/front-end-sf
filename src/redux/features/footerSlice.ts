import { footerHomePage } from '@/lib/gql';
import { getDataFromStrapi } from '@/lib/networkCalls/strapiFunctions';
import { FooterResources, FooterSoftwares } from '@/lib/types/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface FooterState {
	footerResources: FooterResources[];
	footerSoftwares: FooterSoftwares[];
	isLoading: boolean;
}

const initialState: FooterState = {
	footerResources: [],
	footerSoftwares: [],
	isLoading: false,
};

// Async thunk
export const fetchFooterData = createAsyncThunk(
	'footer/fetchData',
	async (_, { dispatch }) => {
		const response = await getDataFromStrapi(footerHomePage);
		const data = response?.home?.data?.attributes?.footer;
		if (data) {
			dispatch(setFooterResources(data.footer_resources));
			dispatch(setFooterSoftwares(data.footer_softwares));
		}
	}
);

export const footerSlice = createSlice({
	name: 'footer',
	initialState,
	reducers: {
		setFooterResources: (state, action: PayloadAction<FooterResources[]>) => {
			state.footerResources = action.payload;
		},
		setFooterSoftwares: (state, action: PayloadAction<FooterSoftwares[]>) => {
			state.footerSoftwares = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFooterData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchFooterData.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(fetchFooterData.rejected, (state) => {
				state.isLoading = false;
				// Handle the error state
			});
	},
});

export const { setFooterResources, setFooterSoftwares } = footerSlice.actions;

export default footerSlice.reducer;
