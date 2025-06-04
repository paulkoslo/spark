# Dataspark

A minimal full-stack template combining Next.js and FastAPI. Start small, scale to production later.

## Prerequisites
- **Node 20** with [`pnpm`](https://pnpm.io) installed
- **Python 3.12**
- **Docker** (optional, for containerized runs)

## One-Time Setup
```bash
pnpm install --frozen-lockfile --dir frontend
python -m venv venv && source venv/bin/activate
pip install -r backend/requirements.txt
```

## Running Locally
```bash
./scripts/dev.sh
```
This starts the Next.js frontend on `http://localhost:3000` and FastAPI backend on `http://localhost:8000`.

## Running with Docker
```bash
docker compose up --build
```

## Next Steps
- Add case studies or testimonials to the frontend.
- Wire `/contact` endpoint to an email service or CRM SaaS.
