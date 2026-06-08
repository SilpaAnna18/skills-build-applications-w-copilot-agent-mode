import { useState, useEffect } from 'react'
import './App.css'

interface HealthResponse {
  status: string
  message: string
}

function App() {
  const [count, setCount] = useState(0)
  const [backendStatus, setBackendStatus] = useState<HealthResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const checkBackendHealth = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/health')
        if (!response.ok) throw new Error('Backend health check failed')
        const data = await response.json() as HealthResponse
        setBackendStatus(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to connect to backend')
        setBackendStatus(null)
      } finally {
        setLoading(false)
      }
    }

    checkBackendHealth()
  }, [])

  return (
    <>
      <header className="header">
        <h1>🐙 OctoFit Tracker</h1>
        <p className="subtitle">Your Personal Fitness Companion</p>
      </header>

      <main className="main-content">
        <section className="status-section">
          <h2>Application Status</h2>
          <div className="status-card">
            <div className="frontend-status">
              <h3>Frontend</h3>
              <p className="status-badge success">✓ Running on Port 5173</p>
              <p className="framework">React 19 + Vite + TypeScript</p>
            </div>
            <div className="backend-status">
              <h3>Backend</h3>
              {loading ? (
                <p className="status-badge pending">⟳ Checking...</p>
              ) : error ? (
                <p className="status-badge error">✗ Error: {error}</p>
              ) : backendStatus ? (
                <>
                  <p className="status-badge success">✓ Running on Port 8000</p>
                  <p className="message">{backendStatus.message}</p>
                  <p className="framework">Express.js + TypeScript + MongoDB</p>
                </>
              ) : null}
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📊 Track Workouts</h3>
              <p>Log your exercises and monitor progress over time</p>
            </div>
            <div className="feature-card">
              <h3>🎯 Set Goals</h3>
              <p>Create and achieve fitness goals with real-time tracking</p>
            </div>
            <div className="feature-card">
              <h3>📈 Analytics</h3>
              <p>View detailed statistics and performance metrics</p>
            </div>
            <div className="feature-card">
              <h3>💪 Community</h3>
              <p>Share achievements and connect with other fitness enthusiasts</p>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>Interactive Demo</h2>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)} className="btn-primary">
              Count: {count}
            </button>
            <p className="demo-hint">Click the button to test React interactivity</p>
          </div>
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <span className="tech-name">Frontend</span>
              <span className="tech-details">React 19, Vite, TypeScript, Axios</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Backend</span>
              <span className="tech-details">Express.js, TypeScript, Node.js</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">Database</span>
              <span className="tech-details">MongoDB, Mongoose ODM</span>
            </div>
            <div className="tech-item">
              <span className="tech-name">DevTools</span>
              <span className="tech-details">ESLint, TypeScript, tsx</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2026 OctoFit Tracker. Built with 💙 for fitness enthusiasts.</p>
      </footer>
    </>
  )
}

export default App
