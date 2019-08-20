#!/bin/sh
set -e

# Wait for services to be started
dockerize -wait http://hub:4444 \
          -wait http://chrome:5555 \
          -wait http://app:8080 \
          -timeout 20s

exec "$@"
