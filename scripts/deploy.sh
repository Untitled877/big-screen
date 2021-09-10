#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:Untitled877/react-big-screen.git &&
git push -uf origin main:gh-pages &&
cd -;
