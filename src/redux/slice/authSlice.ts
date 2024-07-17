import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface LoginCredentials {
  username: string;
  password: string;
}

interface SignupData {
  username: string;
  email: string;
  password: string;
  dateOfBirth: string | undefined;
  phoneNumber: string;
  code: string;
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

// Define the type for the reject value
interface MyRejectValue {
  message: string;
  status?: number;
}

// Async thunk for user login
export const loginUser = createAsyncThunk<
  ResponseData, // Return type of the payload creator
  LoginThunkParams, // Argument type of the payload creator
  { rejectValue: MyRejectValue } // Optional object containing meta fields
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

    Cookies.set("tokens", response.data.accessToken, { expires: 7 });
    return response.data;
  } catch (error) {
    // TypeScript requires 'any' or 'unknown' for catch clause variable type annotation
    return rejectWithValue({ message: (error as Error).message });
  }
});

// Async thunk for user signup
export const signupUser = createAsyncThunk<
  ResponseData, // Return type of the payload creator
  SignupThunkParams, // Argument type of the payload creator
  { rejectValue: MyRejectValue } // Optional object containing meta fields
>("signupUser", async ({ userData }, { rejectWithValue }) => {
  try {
    const response = await axios.post<ResponseData>(
      "https://localhost:5002/api/authentication",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // navigate("/");
    return response.data;
  } catch (error) {
    // TypeScript requires 'any' or 'unknown' for catch clause variable type annotation
    return rejectWithValue({ message: (error as Error).message });
  }
});

export interface AuthState {
  error: string | null; // Change 'any' to 'string | null' assuming error is a string message or null
  loading: boolean;
  user: object | null; // Change 'any' to a specific type or 'null'
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
const token = Cookies.get("AccessToken");
// typeof localStorage !== "undefined" ? localStorage.getItem("token") : null;

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
      Cookies.remove("AccessToken");
      Cookies.remove("RefreshToken");
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
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        Cookies.set("AccessToken", action.payload.accessToken, { expires: 7 });
        Cookies.set("RefreshToken", action.payload.refreshToken, {
          expires: 7,
        });
        const token = Cookies.get("AccessToken");
        if (token) {
          state.user = jwtDecode(token);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "Unknown Error"; // Handle payload properly
        state.isAuthenticated = false;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuthenticated = true;
        state.user = jwtDecode(action.payload.accessToken);
        Cookies.set("AccessToken", action.payload.accessToken, { expires: 7 });
        Cookies.set("RefreshToken", action.payload.refreshToken, {
          expires: 7,
        });
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.message : "Unknown Error"; // Handle payload properly
        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
