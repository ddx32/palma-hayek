import './App.css'
import { useEffect, useState } from 'react'
function App() {
  const [moisture, setMoisture] = useState<number | null>(null)
  useEffect(() => {
    fetch('/moisture')
    .then(response => response.json())
    .then(data => setMoisture(data.value))
    .catch(error => console.error('Error fetching moisture:', error))
  }, [])

  if (moisture === null) {
    return <p>Loading...</p>
  }

  let statusText: string

  if (moisture < 50) {
    statusText = "😭 I'm thirsty, please water me!"
  } else if (moisture < 60) {
    statusText = "I feel good, but I could use a little more water."
  } else if (moisture < 80) {
    statusText = "I'm good, thanks!"
  } else {
    statusText = "🥳 This is amazing! I'm not thirsty at all!"
  }

  return (
    <>
      <h1>Palma Hayek</h1>
      <p className="subtitle">I'm a plant on Filip's table.</p>
      <div className='status-text'>
        <p>{statusText}</p>
      </div>
      <meter className="moisture-meter" value={moisture} min={40} max={100} low={60} high={80} optimum={100} />
    </>
  )
}

export default App
