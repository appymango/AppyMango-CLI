#!/usr/bin/env bash

echo "-----Cleaning Project-----"
rm -rf node_modules
npm cache clean --force
rm -rf $TMPDIR/react-*
rm -rf $TMPDIR/npm-*

echo "-----Re-installing-----"
yarn
