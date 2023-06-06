#!/bin/bash

# Delete the gh-pages branch locally
git branch -D gh-pages

# Delete the gh-pages branch remotely
git push origin --delete gh-pages

# Create and checkout gh-pages branch locally
git checkout -b gh-pages

# Run yarn static command
yarn static

# Run yarn deploy command
yarn deploy

# Checkout main
git checkout main