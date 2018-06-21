#!/bin/bash

if  [[ $TRAVIS_PULL_REQUEST = "false" ]]
then
    s3_website push
fi
