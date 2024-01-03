import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddData from "./Components/AddData";
import NotFound from "./Components/NotFound";
import SearchData from "./Components/SearchData";
import ViewAll from "./Components/ViewAll";


function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" exact element={<AddData/>}/>
<Route path="/viewAll" exact element={<ViewAll/>}/>
<Route path="/search" exact element={<SearchData/>}/>
<Route path="*" exact element={<NotFound/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
