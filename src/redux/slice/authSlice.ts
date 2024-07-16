import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface LoginCredentials {
  username: string;
  password: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  image?: File; // Optional if not always provided
}

interface ResponseData {
  accessToken: string;
  refreshToken: string;
  //   token: string;
  // Add other response fields as necessary
}

interface LoginThunkParams {
  credentials: LoginCredentials;
  //   navigate: (path: string) => void;
}

interface SignupThunkParams {
  userData: SignupData;
  //   navigate: (path: string) => void;
}

// Async thunk for user login
export const loginUser = createAsyncThunk<
  ResponseData, // Return type of the payload creator
  LoginThunkParams, // Argument type of the payload creator
  { rejectValue: any } // Optional object containing meta fields
>("loginuser", async ({ credentials }, { rejectWithValue }) => {
  try {
    const response = await axios.post<ResponseData>(
      "https://localhost:5002/api/authentication/signin",
      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // navigate("/");
    console.log(response.data);

    Cookies.set("tokens", response.data.accessToken, { expires: 7 });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for user signup
export const signupUser = createAsyncThunk<
  ResponseData, // Return type of the payload creator
  SignupThunkParams, // Argument type of the payload creator
  { rejectValue: any } // Optional object containing meta fields
>("signupUser", async ({ userData }, { rejectWithValue }) => {
  try {
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    if (userData.image) {
      formData.append("imagefile", userData.image);
    }

    const response = await axios.post<ResponseData>(
      "https://localhost:5002/api/authentication/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // navigate("/");
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export interface AuthState {
  error: any;
  loading: boolean;
  user: any;
  isAuthenticated: boolean;
}

// Initial state for user data
const initialState: AuthState = {
  error: null,
  loading: false,
  user: null,
  isAuthenticated: false,
};

// Retrieve token from localStorage
const token =
  typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;

// If token exists, decode it and store the data in the user
if (token) {
  const decodedToken = jwtDecode(token);
  initialState.user = decodedToken;
  initialState.isAuthenticated = true;
}

// Create a slice for auth management
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // Clear user data, set loading and error to default values, remove token from localStorage
      state.user = null;
      state.loading = false;
      state.error = null;
      state.isAuthenticated = false;
      //   localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        // Set loading to true and clear any previous errors
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // Set loading to false, clear error, set user data, store token in localStorage, and display success toast
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        // state.user = jwtDecode(action.payload.AccessToken);
        console.log(action.payload);

        localStorage.setItem("tokenObject", action.payload.accessToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        // Set loading to false, set error message, set isAuthenticated to false, and display error toast
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(signupUser.pending, (state) => {
        // Set loading to true and clear any previous errors
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        // Set loading to false, clear error, set user data, store token in localStorage, and display success toast
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.user = jwtDecode(action.payload.AccessToken);
        localStorage.setItem("token", action.payload.AccessToken);
      })
      .addCase(signupUser.rejected, (state, action) => {
        // Set loading to false, set error message, set isAuthenticated to false, and display error toast
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
