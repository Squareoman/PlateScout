[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/jYpz8rDY)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24038830&assignment_repo_type=AssignmentRepo)

## Live URLs

- **Client:** https://plate-scout-lxtcjqsfc-kingfisher11.vercel.app
- **Server:** https://platescout-lgx5.onrender.com
- **Server health check:** https://platescout-lgx5.onrender.com/api/health

## Local setup

1. Clone the repo
2. Create `PlateScout/server/.env` with the following variables:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_jwt_secret
   YELP_API_KEY=your_yelp_api_key
   ```
3. Install client dependencies: from `PlateScout/` run `npm install`
4. Install server dependencies: from `PlateScout/server/` run `npm install`
5. Start both in separate terminals:
   - Client: `npm run dev` from `PlateScout/`
   - Server: `node server.js` from `PlateScout/server/`
6. Open http://localhost:5173

## What I learned during deployment

Deploying a split client/server app turned out to be significantly more involved than I expected. The biggest surprise was that Vite's dev proxy (`/api` → `localhost:3000`) is a development-only feature — in production on Vercel, all `/api` requests were being caught by the `vercel.json` rewrite and returning the React app's HTML instead of JSON, which produced a cryptic "Unexpected token '<'" error that took a while to trace back to a routing misconfiguration. I also ran into Tailwind CSS not being listed as a dependency (it worked locally because it was globally available) and had to add it explicitly before the Vercel build would succeed.

What took the longest to debug was the layered nature of the failures: the Yelp proxy route didn't exist on the backend at all, the frontend was pointing at the wrong URL in production, and the environment variable naming (`VITE_` prefix) had to match Vite's conventions for client-side injection. Next time I would set up the production environment variables and test the live API calls much earlier in the process, rather than assuming local behavior would carry over to deployment.
