import React from 'react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">联系我们</h3>
            <p>地址：上海市松江区新松江路1277号东鼎商务大厦18楼</p>
            <p>电话：400-888-6578</p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">关注我们</h3>
            <p>关注我们的社交媒体，获取最新动态</p>
            {/* 这里可以添加社交媒体图标 */}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 赶考小状元. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}