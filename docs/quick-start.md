::: warning 警告
本教程更新于 2023 年 4 月 28 日，教程的内容针对最新的 anzhiyu 主题(如果你是旧版本，教程会有出入，请留意)
🐟 安知鱼 已经更新到 [1.1.8](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases/tag/1.1.8)
:::

## 💻 安裝

在博客根目录里安装最新版【推荐】

```powershell
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

**测试版**

> 测试版可能存在 bug，追求稳定的请安装稳定版

如果想要安装比较新的 dev 分支，可以

```powershell
git clone -b dev https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

> 升级方法：在主题目录下，运行 `git pull`

> 此方法只支持 Hexo 5.0.0 以上版本
> **通过 npm 安装并不会在 themes 里生成主题文件夹，而是在 node_modules 里生成**

```powershell
npm i hexo-theme-anzhiyu
```

> 升级方法：在 Hexo 根目录下，运行 npm update hexo-theme-anzhiyu

什么？你还是不会？这里有视频 {% btn 'https://www.bilibili.com/video/BV1Rs4y127hu/?spm_id_from=333.788&vd_source=4d9717102296e4b7a60ecdfad55ae2dd', AnZhiYu主题安装教程,far fa-hand-point-right %}

## ⚙ 应用主题

修改 hexo 配置文件`_config.yml`，把主题改为`anzhiyu`

```yml
theme: anzhiyu
```

## 安装 pug 和 stylus 渲染插件

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 更好的配置，便于升级主题

- macos/linux
  在博客根目录运行

  ```bash
  cp -rf ./themes/anzhiyu/_config.yml ./_config.anzhiyu.yml
  ```

- windows
  复制`/themes/anzhiyu/_config.yml`此文件到 hexo 根目录，并重命名为`_config.anzhiyu.yml`

`_config.anzhiyu.yml`中的配置优先级大于`_config.yml`

## 本地启动 hexo

```bash
hexo cl
hexo g
hexo s
```

此时就能在看到效果了。

![](https://img02.anzhiy.cn/adminuploads/1/2023/03/31/642677a150e9d.png)

## 有问题?

可到仓库提交 [isses](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/issues)

## 群聊

群号：`464636182`
![464636182](https://img02.anzhiy.cn/adminuploads/1/2023/04/14/6438b945e1834.webp)

## 技术支持

联系 QQ`2268025923`或群聊内咨询

## 主题设计

[@张洪 Heo](https://github.com/zhheo)

{% btn 'https://anzhiy.cn/posts/220c.html', AnZhiYu主题安装文档（一）,far fa-hand-point-right %}