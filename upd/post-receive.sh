#!/bin/bash

unset $(git rev-parse --local-env-vars)
unset GIT_DIR
unset GIT_WORK_TREE

cd ~/html.accuraten.com/zelandy
git pull