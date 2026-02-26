#!/bin/bash
cd /vercel/share/v0-project
rm -rf node_modules/.cache
npm install
echo "Done. Checking key packages:"
ls node_modules/clsx/package.json 2>/dev/null && echo "clsx: OK" || echo "clsx: MISSING"
ls node_modules/tailwind-merge/package.json 2>/dev/null && echo "tailwind-merge: OK" || echo "tailwind-merge: MISSING"
ls node_modules/class-variance-authority/package.json 2>/dev/null && echo "class-variance-authority: OK" || echo "class-variance-authority: MISSING"
