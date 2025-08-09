# Fiskesajten – Vercel Deployment Guide

## 1. Förbered GitHub-repo
```bash
git init
git add .
git commit -m "Första versionen av fiskesajten"
git branch -M main
git remote add origin https://github.com/<DITT-NAMN>/fiskesajten.git
git push -u origin main
```

## 2. Skapa Vercel-konto
- Gå till https://vercel.com/signup och logga in med GitHub.

## 3. Importera projekt
- Klicka "Add New Project" och välj ditt `fiskesajten` repo.
- Vercel känner automatiskt av att det är en Next.js-app.

## 4. Lägg till miljövariabler i Vercel
Under "Settings" → "Environment Variables", lägg till:
```
OPENWEATHER_API_KEY=din_api_nyckel
MAPBOX_ACCESS_TOKEN=din_api_nyckel
FISHING_REPORTS_API=din_api_url
DATABASE_URL=postgresql://user:pass@host:port/dbname
```

## 5. Deploy
- Klicka på **Deploy**.
- Efter några minuter ligger sajten live på en adress typ:
```
https://fiskesajten.vercel.app
```
