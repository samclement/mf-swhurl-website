#!/bin/sh
sed -i '4i\ \ "gitCommitHash": "'"$(git rev-parse HEAD)"'",' package.json
