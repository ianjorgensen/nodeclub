#!/bin/bash
which ruby 1>/dev/null 2>&1
if [[ $? -ne 0 ]]; then
  echo ""
  echo "!!! WARNING !!!"
  echo "Ruby 1.8.6 or later is required to install the Duostack client npm package"
  echo ""
  exit 1
else
  exit 0
fi
