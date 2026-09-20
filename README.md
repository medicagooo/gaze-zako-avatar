<p align="center"><img src="./site-avatar.svg" width="160" height="160" alt="gaze zako avatar 网站头像"></p>

<h1 align="center">gaze zako avatar</h1>

<p align="center">从左下角探出小脑袋，用贴纸拼出你的专属头像。</p>

<p align="center"><strong>简体中文</strong> · <a href="./README.en.md">English</a> · <a href="./README.ja.md">日本語</a></p>

<p align="center"><a href="https://zako.medicago.top/">在线体验</a> · <a href="https://github.com/medicagooo/gaze-zako-avatar">GitHub</a></p>

## 项目介绍

**gaze zako avatar** 是一个轻量的贴纸式头像制作网页。选择发型、肤色、眼睛、耳朵、发饰、面饰、嘴巴和背景，即可组合出可爱的半脸头像，并实时预览、保存和下载。

采用原生 HTML、CSS、JavaScript 和 SVG，所有头像绘制与导出均在浏览器中完成，无需账号、后端、数据库或 AI 接口。浅粉色圆润界面支持手机和桌面，提供简体中文、English 和日本語。

## 主要功能

- **19 款可编辑预设**：冰晶、月亮女仆、紫猫白缎、茶发青瞳、雾蓝花帽、白樱红缎、金发晶灵、红白樱夜、薄荷航海等，选择后仍可修改各个部件。
- **丰富的素材**：15 种发型、8 种耳朵选项、29 种发饰选项、12 种面饰选项、11 种嘴巴选项、11 种瞳孔样式。数量包含相应类别的“无”选项。
- **自由配色**：自定义发色、肤色、瞳色及饰品颜色，支持异色瞳；7 种肤色以头像缩略图展示，眼罩可切换遮挡左右眼。
- **10 款背景**：黑、白、透明、蒂芙尼蓝白点、粉色白点、跨性别旗、粉色、蓝色、雾蓝和樱夜鸟居。
- **实时预览与双格式导出**：独立 SVG 矢量头像，或 512 / 1024 / 2048 像素 PNG。透明导出不包含预览棋盘格。
- **本地生成历史**：点击“生成头像”保存搭配，可恢复编辑、重新下载、删除或确认清空；重复搭配自动去重。
- **分享入口**：微信、QQ、X（Twitter）、WhatsApp、Telegram，分享内容包含本站地址。图片直接分享取决于浏览器和平台支持，必要时提供下载图片、复制链接的方式。

头像采用固定位置的矢量部件组合，不是 AI 随机生成。参考造型以项目自身的矢量风格绘制；人物从左下角倾斜探出，较长的头发或耳朵可自然超出画布。

## 本地使用

用现代浏览器直接打开仓库中的 `index.html`，无需安装运行依赖。

历史保存在当前浏览器和站点的本地存储中，不跨设备同步；清除浏览器数据会删除记录。`file:` 地址下的存储行为因浏览器而异，日常使用推荐访问 HTTPS 站点。界面语言会识别浏览器设置，也可手动切换；不支持的语言回退为英文。

安装 Node.js（含 npm）后，可离线构建：

```powershell
npm --offline run build
```

构建结果位于 `dist/`。无需执行 `npm install`，无需环境变量、数据库或密钥。

## 部署到 Cloudflare Pages

### 关联 GitHub

1. Fork 本仓库，或将项目放入自己的 GitHub 仓库。
2. 在 Cloudflare 的 **Workers & Pages** 中创建 **Pages** 项目，选择导入 Git 仓库并关联 GitHub。
3. 选择仓库，填写以下配置并部署。

| 配置项 | 值 |
| --- | --- |
| 生产分支 | `main` |
| 框架预设 | `None` |
| 根目录 | 留空（项目位于仓库根目录时） |
| 构建命令 | `npm run build` |
| 构建输出目录 | `dist` |
| 环境变量 | 无需配置 |

部署后获得 `*.pages.dev` 地址，后续向生产分支推送更新时自动构建和部署。详见 [Cloudflare 静态 HTML 部署文档](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/)。

### 自定义域名

在 Pages 项目的 **Custom domains** 中添加自己拥有的域名，按向导完成 DNS 配置。本站使用 `zako.medicago.top`；自行部署时请改用自己的域名。先在 Pages 关联域名，再完成所需 DNS 记录，详见 [自定义域名文档](https://developers.cloudflare.com/pages/configuration/custom-domains/)。

分享链接的站点地址定义在 `share.js`。自行部署时同步修改其中的 `https://zako.medicago.top`，避免分享仍指向本站。

### 其他静态托管

也可将本地构建的 `dist/` 内容上传到静态托管服务。无需服务器端程序；使用其他服务时，需要自行配置与 `_headers` 等价的响应头。

## 开发说明

| 文件 | 用途 |
| --- | --- |
| `app.js` | 选项、三语文案、预设、历史及共享渲染与导出 |
| `hair.js` | 分层发型矢量素材 |
| `accessories.js` | 前后层发饰与组合饰品 |
| `share.js` | 分享入口与站点链接 |
| `site-avatar.svg` | 网站 Avatar 和 favicon，独立于编辑器搭配 |
| `scripts/build.cjs` | 将静态资源复制到 `dist/` |

`renderAvatar` 共用于预览、素材缩略图、历史和导出。新增素材应同步更新数量限制、三语名称和绘制逻辑，在末尾追加编号以兼容已有历史。`validConfig` 校验保存的配置并兼容旧版缺失的表情字段。猫耳、狐耳、兔耳使用相同脸部位置，长耳可超出画布。

```powershell
node scripts/check-expressions.cjs
node scripts/validate-registry.cjs
```

界面线条图标改编自 Lucide，许可见 [LICENSE-ICONS](./LICENSE-ICONS)。
