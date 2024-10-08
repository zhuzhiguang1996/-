import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { id: 'home', text: "首页" },
    { id: 'about', text: "关于我们" },
    { id: 'history', text: "发展历程" },
    { id: 'products', text: "产品服务" },
    { id: 'profit-model', text: "盈利模式" },
    { id: 'cases', text: "案例分享" },
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setIsMenuOpen(false)
    const element = document.getElementById(tabId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">赶考小状元</div>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className="text-gray-600 hover:text-blue-600"
            >
              {item.text}
            </button>
          ))}
        </nav>
        <button className="md:hidden z-50" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40">
          <div className="flex flex-col items-center justify-center h-full">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className="text-xl py-2 text-gray-600 hover:text-blue-600"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}