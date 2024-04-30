import { useNavigate } from "react-router-dom"
import './App.css'

function App() {
  const navegation=useNavigate()

  return (
    <>
      <div>
        <h1>Main page</h1>
        <h2>Navigation...</h2>
        <nav>
          <ul>
            <li>
            <button onClick={() => navegation("/profile")}>Profile Page</button>
            </li>
          </ul>
        </nav>
       </div>
    </>
  )
}

export default App
