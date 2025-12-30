import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题和描述
  title: "启明星 AI",
  description: "AI 时代的指引之星",
  
  // 关键：由于你绑定了顶级域名 qimingxing.vip，base 必须为 '/'
  base: '/',

  // 核心修复：开启 cleanUrls 确保不带 .html 也能正确加载 CSS 样式
  cleanUrls: true,

  themeConfig: {
    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🛠️ AI 工具库', link: '/tools/chat' },
      { text: '⌨️ Prompt 精选', link: '/prompts/basic' },
      { text: '💰 变现案例', link: '/cases/media' }
    ],

    // 2. 左侧侧边栏
    sidebar: {
      '/tools/': [
        {
          text: 'AI 工具推荐',
          items: [
            { text: '💬 文本对话', link: '/tools/chat' },
            { text: '🎨 绘画生图', link: '/tools/image' }
          ]
        }
      ],
      '/prompts/': [
        {
          text: '提示词技巧',
          items: [
            { text: '入门基础', link: '/prompts/basic' },
            { text: '高级框架', link: '/prompts/advanced' }
          ]
        }
      ],
      '/cases/': [
        {
          text: '变现案例拆解',
          items: [
            { text: '自媒体爆文', link: '/cases/media' },
            { text: 'AI 绘画兼职', link: '/cases/art' }
          ]
        }
      ]
    },

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/milemo2023-cmd/qimingxing' }
    ],

    // 4. 页脚
    footer: {
      message: '启明星 AI 航海图 - 助力每一个 AI 探索者',
      copyright: 'Copyright © 2024-present'
    },

    // 5. 辅助功能
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '本页目录'
    }
  }
})