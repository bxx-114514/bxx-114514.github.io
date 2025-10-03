#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 1、如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init

git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# 2、如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/bxx-114514/bxx-114514.github.io.git gh-pages:gh-pages

# 3、如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -