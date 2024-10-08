import React, { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="flex flex-col min-h-screen">
      <Header setActiveTab={setActiveTab} />
      <main className="flex-grow overflow-y-auto">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App