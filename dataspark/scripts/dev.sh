#!/usr/bin/env bash
# Run both frontend and backend in development.
pnpm --filter ./frontend dev &
uvicorn backend.main:app --reload --port 8000
wait
