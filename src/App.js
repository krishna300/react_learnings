import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  DashBoard,
  FirstModal,
  SecondModal
} from './screens';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard/>}>
          <Route index element={<Navigate to="firstModal" />} />

          <Route path="/firstModal" element={<FirstModal/>}/>
          <Route path="/secondModal" element={<SecondModal/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App