import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { AppContainer } from "./styles";


export function DefaultLayout() {
  return (
    <div>
      <AppContainer>
        <Header />
        <Outlet />
      </AppContainer>
    </div>
  )
}