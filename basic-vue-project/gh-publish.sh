#!/usr/bin/env bash

git branch -d gh-pages ||:
git checkout --orphan gh-pages
vite build 

git --work-tree dist add --all
git --work-tree dist commit -m "gh-pages"

# git commit -am 'gh-pages'
git push origin HEAD:gh-pages --force
