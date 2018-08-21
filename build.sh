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
mkdir -p ./output/webroot/app
#mkdir -p ./output/webroot/404

# ReactMobx
cp ./build/index.html ./output/webroot/app/index.php
cp ./build/favicon.ico ./output/webroot/favicon.ico
#cp ./build/404.html ./output/webroot/404/index.php
cp -r ./build/static/* ./output/webroot/static
