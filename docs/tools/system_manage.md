# 系统管理

## Mac 平台计算机名

### HostName

```shell
# 将 NewHostName 替换为新的计算机名
scutil --set HostName "Andrew-MacBookPro"
```

### ComputerName

```shell
# 将 NewComputerName 替换为新的计算机名
scutil --set ComputerName "Andrew-MacBookPro"
```

### LocalHostName

```shell
# 将 NewLocalHostName 替换为新的 Bonjour 名称
scutil --set LocalHostName "Andrew-MacBookPro"
```

## pip

1. 卸载所有 pip 安装的包

```shell
pip freeze | xargs pip uninstall -y
```

## brew

1. 卸载所有 brew 安装的包

```shell
brew list | xargs brew uninstall
```
