docker run -d -p 1935:1935 -p 8080:8080 --name rtmp-server jkuri/urtmp

server: https://live.muzamint.com/

/tmp/ffmpeg-webcam-rtmp-stream(master*) » ./build/stream 0 rtmp://keycloak.muzamint.com:1935/live/stream flv 640 480 30
