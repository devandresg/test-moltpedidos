import { useSelector } from "react-redux";
import "./App.css";
import { AppState } from "./app/types";
import { RootContainer } from "./components/global/Containers";
import { SideBar } from "./components/global/Sidebar";
import RoutesCmp from "./components/routes/Routes";

function App() {
  const apiAuth = useSelector((app: AppState) => app.apiauth);

  return (
    <>
      {apiAuth ? <SideBar selectedItem="requests" /> : <></>}
      <RootContainer>
        <RoutesCmp />
      </RootContainer>
    </>
  );
}

export default App;
