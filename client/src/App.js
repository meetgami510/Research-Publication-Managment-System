import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Journal from "./pages/coordinator/journal/Journal";
import Profile from "./pages/shared/Profile";
import Conference from "./pages/coordinator/conference/Conference";
import Bookchapter from "./pages/coordinator/bookChepter/Bookchapter";
import Book from "./pages/coordinator/book/Book";
import Register from "./components/Register";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

import EmailVerify from "./components/EmailVerify";
import VerifyEmail from "./components/VerifyEmail";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import Home from "./pages/admin/Home";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import Allfaculty from "./pages/Allfaculty"
import Years from "./pages/Years";
import Departments from "./pages/Departments";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);

  const handleSetCookies = (key, data) => {
    setCookies(`${key}`, data, { path: "/" });
  };
  const handleRemoveCookies = (key) => {
    removeCookies(`${key}`, { path: "/" });
  };

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Home cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute cookies={cookies}>
                  <Login setCookies={handleSetCookies} />
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute cookies={cookies}>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Profile cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/journal"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Journal cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/conference"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Conference cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/book"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Book cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/book-chapter"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Bookchapter cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/Allyears"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Years cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/departments"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Departments cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/allfaculty/:coordinatId"
              element={
                <ProtectedRoute
                  cookies={cookies}
                  removeCookies={handleRemoveCookies}
                >
                  <Allfaculty cookies={cookies} removeCookies={handleRemoveCookies} />
                </ProtectedRoute>
              }
            />
            <Route path="/senddata" element={<Upload />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/:id/verify/:token" element={<EmailVerify />} />
            <Route
              path="/user/:id/adminverify/:token"
              element={<VerifyEmail />}
            />
          </Routes>
        )}
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
