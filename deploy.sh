#!/usr/bin/env bash
set -e

firebase use default
firebase deploy --token $FIREBASE_TOKEN
