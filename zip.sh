#!/bin/sh

TIME=`date +%m%d-%H%M`
if which yarn 2>/dev/null; then
  yarn build
else
  npm run build
fi


if [ $? -ne 0 ]; then
exit 1
fi

rm -rf *.zip *.tar.gz
mkdir -p ./output/webroot/app
mkdir -p ./output/webroot/static

cp ./build/index.html ./output/webroot/app/index.php
cp ./build/favicon.ico ./output/webroot/favicon.ico
cp -r ./build/static/* ./output/webroot/static

#zip -qr ReactMobx-${TIME}.zip ./output
tar zcvf ReactMobx-${TIME}.tar.gz ./output
rm -rf ./build ./output