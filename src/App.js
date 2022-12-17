import React from 'react'
import 'antd/dist/reset.css';
import "./styles/appstyles.scss"
import RoutesWrapper from './Routes';
import { useSelector } from 'react-redux';
import { isLoading, PROFILE } from './store/Features/ProfileSlice';
import { Loader, Starter } from './Components/Common';
import { ConfigProvider } from "antd"
import { Theme } from './store/Features/themeSlice';
function App() {

  const loading = useSelector(isLoading)
  const user = useSelector(PROFILE)
  const THEME = useSelector(Theme)

  // document.body.style.color = THEME.flag === "dark" ? "white" : undefined
  return (
    <React.Fragment>
      <ConfigProvider
        theme={{
          token: THEME.theme
        }}
        direction="ltr">
        <Starter />
        {
          (loading && !user?.loggedIn) ?
            <Loader /> :
            <RoutesWrapper />
        }
      </ConfigProvider>
    </React.Fragment >
  )
}

export default App