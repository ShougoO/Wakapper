#!/bin/bash

homd=/home/dshougo/Wakapper/Wakapper/src
logd=$homd/log

exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d)

dd bs=$CONTENT_LENGTH > $homd/input/hoge

echo "Content-type: text/html"
echo ""
echo TEST
