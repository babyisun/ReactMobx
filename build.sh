#!/bin/sh

echo 'node \c'
node -v
echo 'npm \c'
npm -v

npm install
npm run build

if [ $? -ne 0 ]; then
exit 1
fi

rm -rf ./output

mkdir -p ./output/webroot/static
mkdir -p ./output/webroot/crmanage
#mkdir -p ./output/webroot/404

# SaaS 代理商端
cp ./build/index.html ./output/webroot/crmanage/index.php
#cp ./build/404.html ./output/webroot/404/index.php
cp -r ./build/static/* ./output/webroot/static
