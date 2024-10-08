import React from 'react'
import { ShoppingBag, Cpu, BookOpen, Users, Target } from 'lucide-react'

export const Products: React.FC = () => {
  const products = [
    {
      icon: ShoppingBag,
      title: "智能硬件",
      description: "包括学习机、智能笔、词典笔、掌上打印机等智能教育设备。"
    },
    {
      icon: Cpu,
      title: "AI学习系统",
      description: "基于人工智能的个性化学习系统，为学生提供定制化的学习方案。"
    },
    {
      icon: BookOpen,
      title: "智能教辅",
      description: "结合AI技术的智能教辅系列产品，提升学习效率。"
    },
    {
      icon: Users,
      title: "智习室服务",
      description: "线上及线下的智能化学习空间，提供全方位的学习支持。"
    },
    {
      icon: Target,
      title: "家庭教育服务",
      description: "为家长提供科学的家庭教育指导，举办亲子营等活动。"
    }
  ]

  return (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">产品与服务</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <product.icon className="w-10 h-10 mb-4 text-blue-600" />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}