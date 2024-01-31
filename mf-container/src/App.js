import React from 'react'
const AppMf = React.lazy(() => import ('mf_project/App'))
const ButtonMf = React.lazy(() => import ('mf_project/Button'))

export const App = () => {
  return(
    <>
      <div>App</div>
      <AppMf />
      <ButtonMf />
    </>
   )
 }

 export default App