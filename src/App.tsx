import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  );
}
// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;
