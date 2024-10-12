import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ManwhaState {
  name: string;
  source: string;
  link: string;
  image: string;
}

const initialState: ManwhaState = {
  name: "",
  source: "",
  link: "",
  image: "",
};

export const ManwhaSlice = createSlice({
  name: "manwha",
  initialState,
  reducers: {
    updateObject: (state, action) => {
      return { ...state, ...action.payload }; // Met à jour l'objet entier
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
    },
    updateLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    updateImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
  },
});

export const {
  updateObject,
  updateName,
  updateSource,
  updateLink,
  updateImage,
} = ManwhaSlice.actions;

export default ManwhaSlice.reducer;
