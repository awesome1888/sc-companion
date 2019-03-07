#!/usr/bin/env bash

yarn run build;
npx gh-pages -d build;
