# 网站部署说明

本目录就是 GitHub Pages 站点的完整内容，可直接上传到 `Yang-s-Codehub.github.io` 仓库根目录。

## 目录结构

```
site/
├── app-ads.txt                   AdMob 验证文件（必须位于根路径）
├── index.html                    门户首页（应用列表）
├── assets/
│   ├── style.css                 全站样式
│   ├── lang.js                   中英切换脚本
│   ├── hero-zh.png               应用页主视觉（中文）
│   └── hero-en.png               应用页主视觉（英文）
└── Calcuverse/
    ├── index.html                应用介绍页
    ├── privacy.html              隐私权政策（精简版）
    └── terms.html                服务条款（精简版）
```

站内不存放截图和完整法律文档，避免仓库体积膨胀：

- 截图直接引用应用仓库的 raw 地址
  `https://raw.githubusercontent.com/Yang-s-Codehub/Calcuverse/main/screenshots/<文件名>`
- 完整法律文档（Markdown）链接到
  `https://github.com/Yang-s-Codehub/Calcuverse/blob/main/legal/<文件名>`
- 只有 `assets/hero-*.png` 保留在本地，因为应用仓库里没有对应图片

## 部署步骤

1. 新建仓库，名称必须是 `Yang-s-Codehub.github.io`，设为 Public。
2. 进入 Settings → Pages，Source 选 `Deploy from a branch`，Branch 选 `main`，目录 `/ (root)`，保存。
3. 把本目录**里面的内容**（不是 `site` 文件夹本身）上传到仓库根目录。
4. 打开 `https://yang-s-codehub.github.io/` 确认首页正常。
5. 打开 `https://yang-s-codehub.github.io/app-ads.txt` 确认能直接显示一行文本。

## 必须修改的一项

`app-ads.txt` 里的 `pub-0000000000000000` 要换成 AdMob 后台 **View Publisher ID** 的真实 ID。

## 以后新增应用

1. 在根目录新建文件夹，例如 `NewApp/`，放入 `index.html`（可复制 `Calcuverse/index.html` 改造）。
2. 截图放在该应用自己的代码仓库里，页面用 raw 地址引用（见上方说明），不要复制进本站点。
3. 在根 `index.html` 的 `.cards` 中复制一张卡片，修改链接、标题、描述。
4. `app-ads.txt` 不需要改动。

引用其他仓库的图片时，注意 GitHub 的访问策略：`raw.githubusercontent.com` 是 CDN，适合放图片；但如果某个仓库将来转为 Private，这些图片会立即 404。

## 待替换的占位内容

- 下载按钮当前是 `href="#" aria-disabled="true"` 的「即将上架」状态，拿到商店链接后去掉 `aria-disabled` 并填入真实 URL（`Calcuverse/index.html` 中有两处）。
- 法律文档中的 `[your-contact-email@example.com]`、`[您的姓名或组织]`、`[城市，国家]` 等占位符尚未填写。

## 本地预览

```bash
cd site
python3 -m http.server 8777
# 浏览器打开 http://127.0.0.1:8777/
```

语言切换：右上角按钮，或 URL 加 `?lang=en` / `?lang=zh` 强制指定。
