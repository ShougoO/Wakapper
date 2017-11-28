#!/bin/bash

# 以下の作業ディレクトリをローカルに作り、cgiの動作を確認する
# それでも動かない場合、githubなどから探してくる
# homd=/home/dshougo/Wakapper/Wakapper/src
# logd=$homd/log

# exec 2> $logd/LOG.$(basename $0).$(date +%Y%m%d)

# dd bs=$CONTENT_LENGTH > $homd/input/hoge
dd bs=$CONTENT_LENGTH > $tmp

echo "Content-type: text/html"
echo ""
cat $tmp
