import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "../pages/Main"
import Page from "../pages/Page"
import NotFound from "../pages/NotFound"
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page/:pageId" element={<Page />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;