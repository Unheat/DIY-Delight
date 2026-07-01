# WEB103 Project 4 - *DIY Delight: Custom PC Builder*

Submitted by: **An Dang**

About this web app: **DIY Delight is a custom PC configurator. Users pick parts for each feature of a PC (CPU, GPU, RAM, cooling, and case color), watch the total price update live, and see the case visually recolor as they choose. Completed builds can be saved, viewed in a collection, edited, and deleted. Impossible part combinations (e.g. an RTX 4090 with air cooling) are caught and prevented.**

Time spent: **~6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the customizable item**
  - [x] **The database table has at least the item name, its price, and one column for each customizable feature**
- [x] **The visual interface changes in response to at least one customizable feature** (the displayed case color recolors the PC preview — a change beyond text)
- [x] **The price displayed on the interface changes as the item's features are customized**
- [x] **Users can view a list of all submitted custom items**
- [x] **Users can save a new custom item to the list of submitted custom items**
- [x] **Users can update or delete a submitted custom item from the list view or its detail page**
- [x] **The app displays an appropriate error message when a user submits an impossible feature combination**

The following **optional** features are implemented:

- [x] The user is alerted to impossible feature combinations early — the error appears the moment an incompatible option is selected, and the Save button is disabled before submission

The following **additional** features are implemented:

- [x] Each customizable feature is stored in its own normalized database table, linked to the main `custom_pcs` table via foreign keys (referential integrity enforced by the database)
- [x] Combined `/api/options` endpoint returns the entire parts catalog in one request (queries run in parallel with `Promise.all`)
- [x] Detail view reconstructs each saved build with SQL `JOIN`s so part names (not just ids) are displayed
- [x] Themed dark UI with live color swatch, hover states, and disabled-button feedback

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace the src above with a link to your recorded GIF. -->

GIF created with ...
<!-- Recommended tools: LICEcap (Win/Mac) or Kap / Peek. -->

## Notes

**Architecture (3-tier full-stack):**
- **Frontend:** React + Vite, react-router-dom, `fetch` (via a Vite dev proxy to the API)
- **Backend:** Node + Express, `pg` (node-postgres)
- **Database:** PostgreSQL hosted on Render

**Data model — table-per-feature:**
- `cpus`, `gpus`, `rams`, `coolings`, `case_colors` — the read-only parts catalog (seeded once)
- `custom_pcs` — saved builds, storing the chosen option ids as foreign keys + the computed total price

**Challenges:**
- Understanding the difference between a `REFERENCES` constraint (enforces integrity on write) and a `JOIN` (retrieves the linked data on read)
- Getting table create/drop order right because of foreign keys (feature tables first, `custom_pcs` last; `CASCADE` for clean re-runs)
- Remembering the `Content-Type: application/json` header on POST/PATCH so `express.json()` parses the body into `req.body`

## Running the app locally

1. `npm install`
2. Add `server/.env` with your Render PostgreSQL credentials (`PGUSER`, `PGPASSWORD`, `PGHOST`, `PGPORT`, `PGDATABASE`)
3. Seed the database: `node server/config/reset.js`
4. Start both client and server: `npm run dev`
5. Open the client (Vite) at `http://localhost:5173`

## License

    Copyright 2026 Unheat

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
