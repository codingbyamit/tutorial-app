import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Html from '../Sections/Html'
import Css from '../Sections/Css'
import JavaScript from '../Sections/JavaScript'
import Reacct from '../Sections/Reacct'

function Article() {
  return (
    <div className='article'>
       <Routes>
        <Route path="/html" element={<Html/>}></Route>
                        <Route path="/css" element={<Css/>}></Route>
                        <Route
                            path="/javascript"
                            element={<JavaScript/>}
                        ></Route>
                        <Route path="/react" element={<Reacct/>}></Route>
       </Routes>
       
    </div>
  )
}

export default Article