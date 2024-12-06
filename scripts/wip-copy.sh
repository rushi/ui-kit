#!/bin/bash

echo -e "\nCopying files\n"
cp index.d.ts build
cp index.css build
cp package.json build
cp postcss.config.cjs build
cp tailwind.config.cjs build
echo -e "\nFinished copy files\n"
