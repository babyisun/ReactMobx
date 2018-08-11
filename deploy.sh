#!/bin/sh

echo "deploy to $1"

sh build.sh
node ./scripts/deploy.js $1

 