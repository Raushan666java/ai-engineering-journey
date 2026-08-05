#!/usr/bin/env bash
# Skip the minify pass to reduce peak memory on the 7GB GH Actions runner.
# The SSG build occasionally aborts (SIGABRT exit 134) near the runner's
# memory limit; minification is the largest transient spike. Docs payload
# stays uncompressed-readable anyway (gzip happens at the CDN edge).
exec node ./node_modules/@docusaurus/core/bin/docusaurus.mjs build --no-minify "$@"
