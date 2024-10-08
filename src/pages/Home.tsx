import React, { useState, useEffect, TouchEvent } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { About } from './About'
import { History } from './History'
import { Products } from './Products'
import { ProfitModel } from './ProfitModel'
import { Cases } from './Cases'

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      title: "教育新趋势",
      description: "新时代教育变革正在加速，AI+学习需求迎来爆发式增长。赶考小状元站在教育科技的前沿，为学生提供创新的学习解决方案。",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "国家政策支持",
      description: "国家大力推动'人工智能+'教育发展，为教育科技企业提供了广阔的发展空间。赶考小状元积极响应政策号召，致力于提供高质量的智能教育服务。",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      title: "创新科技应用",
      description: "AI驱动的第五代学习机正在革新教育领域。赶考小状元运用前沿AI技术，打造智能化、个性化的学习体验，助力学生全面发展。",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <div className="flex flex-col">
      <section 
        id="home-banner" 
        className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Banner Slider */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="relative z-10 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">{slide.title}</h2>
                <p className="text-sm md:text-base mb-4 md:mb-8 max-w-xl mx-auto">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </section>
      
      {/* Full Content */}
      <About />
      <History />
      <Products />
      <ProfitModel />
      <Cases />
    </div>
  )
}