#!/bin/sh
trap 'kill $(jobs -p)' EXIT

npm run start:dev user-service &
npm run start:dev auth-service &

wait
