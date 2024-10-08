import React, { useState } from 'react'
import { DollarSign, Users, ShoppingBag, BookOpen, Target, Briefcase, Zap } from 'lucide-react'

export const ProfitModel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('revenue')

  const revenueStreams = [
    { icon: ShoppingBag, text: "智能硬件销售（学习机、智能笔、词典笔、掌上打印机及智能教辅产品）" },
    { icon: Users, text: "智习室伴学服务（线上及线下）费用" },
    { icon: BookOpen, text: "智能教辅系列产品销售" },
    { icon: Target, text: "家庭教育亲子营活动收益" },
    { icon: Briefcase, text: "招募合伙人分成收益" },
  ]

  const profitSystems = [
    "运营赚钱：区域运营中心盈利",
    "资源赚钱：AI书法、词典笔、公益图书、游学、儿童产品",
    "服务赚钱：测评挣钱、伴学挣钱",
    "共享赚钱：共享门店、共享服务挣钱",
    "渠道赚钱：发展区代、单店合伙人挣钱",
    "零售赚钱：直接面对终端零售，挣钱",
    "生态赚钱：家庭教育及生态收入",
  ]

  const operationalSupport = [
    "市场调研与选址支持",
    "装修与开业指导支持",
    "培训支持",
    "业务与运营支持",
    "B端与C端市场支持",
    "智能硬件支持",
    "学习系统与AI全产品矩阵支持",
    "家庭教育与出版生态支持",
    "线上督学与进校支持",
    "个性化定制与AI工具支持",
  ]

  const tabContent = {
    revenue: (
      <div>
        <h3 className="text-2xl font-semibold mb-6">主要营收来源</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <stream.icon className="w-8 h-8 mr-4 text-blue-600 flex-shrink-0" />
              <p>{stream.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    profitSystem: (
      <div>
        <h3 className="text-2xl font-semibold mb-6">区域代理商躺赚体系</h3>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80" alt="躺赚体系" className="w-full h-48 object-cover rounded-lg mb-4" />
          <ul className="list-disc list-inside space-y-2">
            {profitSystems.map((system, index) => (
              <li key={index}>{system}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    support: (
      <div>
        <h3 className="text-2xl font-semibold mb-6">赶考小状元AI自习室总部十八大支持</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {operationalSupport.map((support, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="w-8 h-8 mb-4 text-blue-600" />
              <h4 className="text-lg font-semibold mb-2">{support}</h4>
              <p className="text-gray-600">总部提供全面的{support}，确保合作伙伴的成功。</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="profit-model" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">盈利模式与运营支持</h2>
        
        <div className="mb-8 flex justify-center">
          <button
            className={`px-4 py-2 mr-2 rounded-lg ${activeTab === 'revenue' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('revenue')}
          >
            营收来源
          </button>
          <button
            className={`px-4 py-2 mr-2 rounded-lg ${activeTab === 'profitSystem' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('profitSystem')}
          >
            躺赚体系
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'support' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('support')}
          >
            总部支持
          </button>
        </div>

        <div className="mt-8">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </div>
    </section>
  )
}