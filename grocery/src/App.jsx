import { Box, Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

function App() {

  return (
    <Box>

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
      </Routes>
    </Box>
  )
}

export default App
