#!/usr/bin/env bash
# Force a memory cap below the GH Actions runner's 7GB total (native + JS heap
# must fit; 7168MB in deploy.yml made V8 abort with SIGABRT exit 134).
export NODE_OPTIONS="--max-old-space-size=6144"
exec node ./node_modules/@docusaurus/core/bin/docusaurus.mjs build "$@"