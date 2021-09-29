// import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GamePage } from "./pages/GamePage/GamePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ImageProvider } from "./store/ImageContext";

export const App = () => {
  return (
    <ImageProvider>
      <Router>
        {/* <Route exact path="/" component={WelcomePage} /> */}
        <Route exact path="/" component={GamePage} />
      </Router>
    </ImageProvider>
  );
};
