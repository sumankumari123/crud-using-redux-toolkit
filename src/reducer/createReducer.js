import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//create action
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://66d1dbc962816af9a4f51602.mockapi.io/crud`,
        data
      );
      // return response.json();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const fetchUserData = createAsyncThunk(
  "fetchUserData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://66d1dbc962816af9a4f51602.mockapi.io/crud`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserDataByInfinateScroll = createAsyncThunk(
  "fetchUserDataByInfinateScroll",
  async (arg, { rejectWithValue }) => {
    // console.log(arg.pageNumber)
    // console.log(arg.pageSize)

    try {
      const response = await axios.get(
        `https://66d1dbc962816af9a4f51602.mockapi.io/crud?page=${arg.pageNumber}&limit=${arg.pageSize}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Edit Action
export const fetchEditUserData = createAsyncThunk(
  "fetchEditUserData",
  async (args, { rejectWithValue }) => {

    try {
      const response = await axios.put(
        `https://66d1dbc962816af9a4f51602.mockapi.io/crud/${args?.id}`,args
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete Action
export const deleteUserData = createAsyncThunk(
  "deleteUserData",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://66d1dbc962816af9a4f51602.mockapi.io/crud/${userId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  users: [],
  loading: false,
  error: false,
  isOpenDrawerForEdit: false,
  singleUseData: {},
  infinateScroll: false,
  pageNumber: 1,
  pageSize: 5,
  searchingUserData: ""
};

export const userDetail = createSlice({
  name: "useData",
  initialState,
  reducers: {
    actionEditUserDetails: (state, action) => {
      state.isOpenDrawerForEdit = action.payload;
    },
    actionSingleUseData: (state, action) => {
      state.singleUseData = action.payload;
    },
    // actionPageNo: (state, action) => {
    //   state.pageNumber = state.pageNumber + 1;
    // },

    actionPageNo: (state, action) => {
      if (action.payload) {
        state.pageNumber = action.payload;
        return;
      }
      state.pageNumber = state.pageNumber + 1;
    },

    actionInFinateScroll: (state, action) => {
      state.infinateScroll = action.payload;
    },

    actionSearchingUserData: (state, action)=>{
      state.searchingUserData = action.payload;
    },


  },

  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });


    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });



    builder.addCase(fetchUserDataByInfinateScroll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUserDataByInfinateScroll.fulfilled,
      (state, action) => {
        state.infinateScroll = action.payload.length > 0 ? true : false;
        // console.log(" action", action);
        // console.log(" action.payload.pageSize", action?.meta.arg?.pageSize);
        // console.log(" action.payload.pageNumber", action?.meta.arg?.pageNumber);
        // console.log("state.users", state.users)

        state.loading = false;
        state.users = Boolean(action?.meta.arg?.pageNumber)
        ? [...state.users, ...(action.payload || [])]
        : action.payload || [];

        state.error = false;

      }
    );

    builder.addCase(fetchUserDataByInfinateScroll.rejected, (state, action) => {
      state.infinateScroll = false;
      state.loading = false;
      state.error = true;
    });


    builder.addCase(deleteUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserData.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((post) => post.id !== id);
      }
    });
    builder.addCase(deleteUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });

    builder.addCase(fetchEditUserData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEditUserData.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload)

      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
    builder.addCase(fetchEditUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  actionEditUserDetails,
  actionSingleUseData,
  actionPageNo,
  actionInFinateScroll,
  actionSearchingUserData,
} = userDetail.actions;

export default userDetail.reducer;
