#!/usr/bin/env bash

echo "-----Cleaning Project-----"
watchman watch-del-all
rm -rf node_modules
npm cache clean --force
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/npm-*
rm -rf $TMPDIR/metro-*
rm -rf ~/Library/Developer/Xcode/DerivedData
cd ios && pod deintegrate && pod cache clean --all && rm -rf Pods Podfile.lock build && cd ../
cd android && rm -rf build && ./gradlew clean cleanBuildCache && cd ../

echo "-----Re-installing-----"
yarn
yarn pods
yarn reset