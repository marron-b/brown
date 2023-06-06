#!/bin/bash

# Delete the gh-pages branch locally
git branch -D gh-pages

# Delete the gh-pages branch remotely
git push origin --delete gh-pages

# Create and checkout gh-pages branch locally
git checkout -b gh-pages

# Run yarn deploy command
yarn deploy