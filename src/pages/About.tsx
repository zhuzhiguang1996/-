import React from 'react'
import { Brain, Cpu, Database, Globe, Layers, Lightbulb, Shield, Zap } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">关于赶考小状元</h2>
        
        {/* Brand Introduction */}
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="AI教育" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">品牌介绍</h3>
            <p className="mb-4">
              赶考状元及赶考小状元始终致力于AI智能教育领域，秉持用科技和爱助力一亿中小学生享受公平而有质量的教育。
            </p>
            <p>
              基于19年的教培经验和超过10年的在线教育经验，我们成功探索出了AI智能智习室这一新型的"后教培时代"的颠覆式模型。
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="公司总部" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">公司概况</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><Zap className="mr-2 text-blue-400" /> 总部位于上海松江区，5000平方米现代化办公场地</li>
              <li className="flex items-center"><Zap className="mr-2 text-blue-400" /> 500人以上的全职专业团队</li>
              <li className="flex items-center"><Zap className="mr-2 text-blue-400" /> 与行业独角兽公司长期合作</li>
              <li className="flex items-center"><Zap className="mr-2 text-blue-400" /> 被誉为行业内学习内容及AI学习功能的源头企业</li>
            </ul>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">核心竞争力</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Brain className="w-10 h-10 mb-4 text-blue-400" />
              <h4 className="text-lg font-semibold mb-2">AI技术</h4>
              <p>领先的AI算法和模型，为学生提供个性化学习体验</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Cpu className="w-10 h-10 mb-4 text-blue-400" />
              <h4 className="text-lg font-semibold mb-2">智能硬件</h4>
              <p>自主研发的AI学习机和智能教育设备</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <Database className="w-10 h-10 mb-4 text-blue-400" />
              <h4 className="text-lg font-semibold mb-2">海量教育资源</h4>
              <p>丰富的题库和学习资料，覆盖多个学科和年级</p>
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">愿景与使命</h3>
          <p className="text-lg mb-4">
            我们致力于成为中国领先的AI智能教育解决方案提供商，为每一个学生提供个性化的学习体验。
          </p>
          <p className="text-lg">
            通过科技创新，我们旨在提高教育质量，缩小教育资源差距，让每个孩子都能享受到优质的教育资源。
          </p>
        </div>
      </div>
    </section>
  )
}