import React, { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const Cases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('model')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const storeModels = [
    { type: "周末卡", time: "周六-周日\n每周一次/4小时/次", price: "800/月", income: "800×150×12=1440000", machineIncome: "200×5780=1156000", note: "面积100平方" },
    { type: "畅学卡", time: "周二-周日\n营业时间内", price: "1500/月", income: "1500×50×12=900000", machineIncome: "", note: "周六日分4批" },
  ]

  const investmentDetails = [
    { city: "4. 县城", area: "50-200㎡", initialInvestment: "17.42万元 (65台)", decoration: "5万元", rent: "0.5万*6个月=6万元", reserve: "5万", total: "约34万" },
    { city: "3. 地级市及百强县", area: "50-200㎡", initialInvestment: "18.76万元 (70台)", decoration: "5万元", rent: "1万*6个月=6万元", reserve: "5万", total: "约35万" },
    { city: "2. 省会及重点城市", area: "50-200㎡", initialInvestment: "21.44万元 (80台)", decoration: "5万元", rent: "1万*6个月=6万元", reserve: "5万", total: "约38万" },
    { city: "1. 北上广深", area: "50-200㎡", initialInvestment: "40.20万元 (150台)", decoration: "5万元", rent: "2万*6个月=12万", reserve: "5万", total: "约62万" },
  ]

  const successCases = [
    {
      name: "重庆铜梁代理商",
      investor: "花店老板",
      location: "初中学校门口",
      recruitmentModel: "地推9.9元体验7天，紧盯报单系统学习",
      scale: "2个月30个学员，达到盈利，目前10家店",
      highlight: "严格跟进总部学习要求，落实启迪督学的13个流程，用心极致服务客户。"
    },
    {
      name: "山东聊城代理商",
      investor: "王老师",
      recruitmentModel: "同总部合作招生400个9.9元小课包，实现转化200人",
      scale: "6个月内开设30个门店，学习机销售量3000多台",
      highlight: "多次参加总部线下学习，大量参加直播课，自发每周一次的全员培训，开设10-20台的专卖分店模式，快速开展门店和合伙人数量。"
    },
    {
      name: "河南郑州代理商",
      investor: "教育培训机构老板",
      location: "商业中心附近",
      recruitmentModel: "线上线下结合，举办免费家长讲座",
      scale: "3个月50个学员，5个月内开设5家店",
      highlight: "充分利用原有教育资源，快速建立口碑，与当地学校建立良好合作关系。"
    },
    {
      name: "江苏苏州代理商",
      investor: "IT行业创业者",
      location: "高新技术园区",
      recruitmentModel: "与科技公司合作，为员工子女提供优惠",
      scale: "6个月100个学员，1年内开设8家店",
      highlight: "结合当地高科技产业特点，强调AI教育的先进性，吸引高收入家庭。"
    },
    {
      name: "广东深圳代理商",
      investor: "连锁便利店老板",
      location: "多个社区中心",
      recruitmentModel: "利用便利店网络进行宣传，社区活动推广",
      scale: "4个月80个学员，1年内开设15家社区店",
      highlight: "充分利用已有的社区资源和人脉，快速渗透到各个社区，建立家长信任。"
    },
    {
      name: "浙江杭州代理商",
      investor: "互联网公司高管",
      location: "高档住宅区附近",
      recruitmentModel: "高端定位，一对一咨询服务",
      scale: "3个月40个高端学员，半年内开设3家精品店",
      highlight: "针对高端市场，提供个性化服务，与国际学校合作，打造高端品牌形象。"
    }
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      if (direction === 'left') {
        scrollContainerRef.current.scrollLeft -= scrollAmount
      } else {
        scrollContainerRef.current.scrollLeft += scrollAmount
      }
    }
  }

  const tabContent = {
    model: (
      <div>
        <h3 className="text-2xl font-semibold mb-6">单店模型</h3>
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">卡型</th>
                <th className="border border-gray-300 p-2">智习时间</th>
                <th className="border border-gray-300 p-2">基准价格</th>
                <th className="border border-gray-300 p-2">收入模型</th>
                <th className="border border-gray-300 p-2">学习机营收</th>
                <th className="border border-gray-300 p-2">备注</th>
              </tr>
            </thead>
            <tbody>
              {storeModels.map((model, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{model.type}</td>
                  <td className="border border-gray-300 p-2 whitespace-pre-line">{model.time}</td>
                  <td className="border border-gray-300 p-2">{model.price}</td>
                  <td className="border border-gray-300 p-2">{model.income}</td>
                  <td className="border border-gray-300 p-2">{model.machineIncome}</td>
                  <td className="border border-gray-300 p-2">{model.note}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="border border-gray-300 p-2 font-bold">总计</td>
                <td colSpan={3} className="border border-gray-300 p-2 font-bold">年应收：3496000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 mb-8 text-sm text-gray-600">可招收200学员</p>

        <h3 className="text-2xl font-semibold mb-6">AI自习室-单店投入费用明细</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">项目</th>
                {investmentDetails.map((detail, index) => (
                  <th key={index} className="border border-gray-300 p-2">{detail.city}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">面积要求</td>
                {investmentDetails.map((detail, index) => (
                  <td key={index} className="border border-gray-300 p-2">{detail.area}</td>
                ))}
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">首批进货量</td>
                {investmentDetails.map((detail, index) => (
                  <td key={index} className="border border-gray-300 p-2">{detail.initialInvestment}</td>
                ))}
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">装修：硬装、软装、桌椅</td>
                {investmentDetails.map((detail, index) => (
                  <td key={index} className="border border-gray-300 p-2">{detail.decoration}</td>
                ))}
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">房租</td>
                {investmentDetails.map((detail, index) => (
                  <td key={index} className="border border-gray-300 p-2">{detail.rent}</td>
                ))}
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">备用金</td>
                {investmentDetails.map((detail, index) => (
                  <td key={index} className="border border-gray-300 p-2">{detail.reserve}</td>
                ))}
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-bold">总投入合计</td>
                {investmentDetails.map((detail, index) => (
                  <td key={index} className="border border-gray-300 p-2 font-bold">{detail.total}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-gray-600">（以上费用为预估，以实际支出为准，相关细节请详询拓展经理）</p>
      </div>
    ),
    success: (
      <div>
        <h3 className="text-2xl font-semibold mb-6">成功案例</h3>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {successCases.map((case_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-80 snap-center">
                <h4 className="text-xl font-semibold mb-2">{case_.name}</h4>
                <p><strong>投资人：</strong>{case_.investor}</p>
                {case_.location && <p><strong>选址：</strong>{case_.location}</p>}
                <p><strong>招生模式：</strong>{case_.recruitmentModel}</p>
                <p><strong>规模：</strong>{case_.scale}</p>
                <p><strong>亮点：</strong>{case_.highlight}</p>
              </div>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
            onClick={() => scroll('left')}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 shadow-md"
            onClick={() => scroll('right')}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">案例分享</h2>
        
        <div className="mb-8 flex justify-center">
          <button
            className={`px-4 py-2 mr-2 rounded-lg ${activeTab === 'model' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('model')}
          >
            单店模型与投入费用
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'success' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('success')}
          >
            成功案例
          </button>
        </div>

        <div className="mt-8">
          {tabContent[activeTab as keyof typeof tabContent]}
        </div>
      </div>
    </section>
  )
}