cd $(dirname $0)

docker exec jtalk bash -c "cd /jtalk && bash entrypoint.sh $2" >$1.wav
if hash aplay 2>/dev/null; then
    # for Raspberry pi
    aplay $1.wav
elif hash afplay 2>/dev/null; then
    # for mac
    afplay $1.wav
elif hash vlc 2>/dev/null; then
    # for vlc
    vlc $1.wav --play-and-exit
fi
rm $1.wav