import Header from "./components/Header";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Body from "./components/Body";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <Header />
        <Body /> */}
        {/* <SignupForm /> */}
        <Login />
      </ChakraProvider>
    </div>
  );
}

export default App;
