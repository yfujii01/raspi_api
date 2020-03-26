#!/bin/sh

cd `dirname $0`

docker build -t jtalk .

docker run -d --rm --name jtalk -e JTALK_VOICE_TYPE="normal" jtalk:latest

npm run start