import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "启明星 AI",
  description: "AI 时代的指引之星",
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🛠️ AI 工具库', link: '/tools' },
      { text: '⌨️ Prompt 精选', link: '/prompts' },
      { text: '💰 变现案例', link: '/cases' }
    ],

    // 左侧侧边栏
    sidebar: {
      '/tools': [
        {
          text: 'AI 工具推荐',
          items: [
            { text: '文本对话', link: '/tools/chat' },
            { text: '绘画生图', link: '/tools/image' }
          ]
        }
      ],
      '/cases': [
        {
          text: '搞钱案例拆解',
          items: [
            { text: '自媒体爆文', link: '/cases/media' },
            { text: 'AI 绘画兼职', link: '/cases/art' }
          ]
        }
      ]
    },

    // 社交链接（可以换成你的 GitHub 或其他）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/milemo2023-cmd/qimingxing' }
    ],

    // 页脚
    footer: {
      message: '启明星 AI 航海图',
      copyright: 'Copyright © 2024-present'
    }
  }
})