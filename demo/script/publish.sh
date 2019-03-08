#!/usr/bin/env bash

rm -rf public/;
npx gatsby build --prefix-paths;
npx gh-pages -d public;
