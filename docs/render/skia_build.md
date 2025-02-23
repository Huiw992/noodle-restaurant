# Skia 编译

## 下载

1. depot_tools

   ```shell
   git clone 'https://chromium.googlesource.com/chromium/tools/depot_tools.git'
   export PATH="${PWD}/depot_tools:${PATH}"
   ```

2. source code

  ```shell
  git clone 'https://skia.googlesource.com/skia.git'
  ````

## 环境配置

1. 同步依赖

   ```shell
   cd skia
   python3 tools/git-sync-deps
   python3 bin/fetch-ninja
   ```

## 生成编译配置

### CMake

```shell
bin/gn gen out/cmake --ide=json --json-ide-script=../../gn/gn_to_cmake.py
bin/gn gen out/Xcode --ide=xcode --json-ide-script=../../gn/gn_to_cmake.py
```

### Android

```shell
bin/gn gen out/android/arm   --args='ndk="/tmp/ndk" target_cpu="arm"'
bin/gn gen out/android/arm64 --args='ndk="/tmp/ndk" target_cpu="arm64"'
bin/gn gen out/android/x64   --args='ndk="/tmp/ndk" target_cpu="x64"'
bin/gn gen out/android/x86   --args='ndk="/tmp/ndk" target_cpu="x86"'
```

### Mac

```shell
bin/gn gen out/mac/intel   --args='target_os="mac" target_cpu="x64"'
bin/gn gen out/mac/apple --args='target_os="mac" target_cpu="arm64"'
```

### iOS

```shell
bin/gn gen out/ios/arm   --args='target_os="ios" target_cpu="arm"'
bin/gn gen out/ios/arm64 --args='target_os="ios" target_cpu="arm64"'
```

### 编译

1. Clion 打开 gen out/cmake 目录下的 CMakeLists.txt
2. 选择 target HelloWorld
3. 开始编译
