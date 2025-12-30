import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题和描述
  title: "启明星 AI",
  description: "AI 时代的指引之星",
  
  // 这里的 base 如果你是绑定顶级域名 qimingxing.vip，通常保持 '/'
  // 如果是 github 二级域名且有仓库名，才需要改。现在先保持 '/'
  base: '/',

  themeConfig: {
    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '🛠️ AI 工具库', link: '/tools/chat' }, // 方案 A：直接跳到对话页
      { text: '⌨️ Prompt 精选', link: '/prompts/basic' },
      { text: '💰 变现案例', link: '/cases/media' }
    ],

    // 2. 左侧侧边栏
    sidebar: {
      // 当你在 /tools/ 目录下时显示的侧边栏
      '/tools/': [
        {
          text: 'AI 工具推荐',
          items: [
            { text: '💬 文本对话', link: '/tools/chat' },
            { text: '🎨 绘画生图', link: '/tools/image' }
          ]
        }
      ],
      // 当你在 /prompts/ 目录下时显示的侧边栏
      '/prompts/': [
        {
          text: '提示词技巧',
          items: [
            { text: '入门基础', link: '/prompts/basic' },
            { text: '高级框架', link: '/prompts/advanced' }
          ]
        }
      ],
      // 当你在 /cases/ 目录下时显示的侧边栏
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