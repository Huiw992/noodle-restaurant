# git

## 用户配置

- 配置新 commit 的用户名
  `git config --global user.name  "xxxx"`
- 配置新 commit 的邮箱
  `git config --global user.email "xxxx@example.com"`

## 保存密码

- 以文本的方式保存 http 凭证
  `git config --global credential.helper store`

## 查看配置

- 查看所有配置信息
  `git config -l`
- 删除配置
  `git config --global --unset <config>`
- 设置 origin 地址
  `git remote set-url origin https://xxxxxxx.git`

## 查看配置

  `git checkout --track origin/branch_name`
