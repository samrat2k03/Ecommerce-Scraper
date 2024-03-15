@echo off
start cmd /k "code . && nodemon server.js"
start cmd /k "cd client && yarn dev"
