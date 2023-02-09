import './App.scss'
import { Header } from './components/Header'
import { Nav } from './components/Nav'

function App() {

  return (
    <div className="App">
      <div className="section-header">
        <Nav />
        <Header />
      </div>
    </div>
  )
}

export default App
