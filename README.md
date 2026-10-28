# NowITSystems — Next.js starter

A Next.js App Router repository based on the supplied `nowitsystems_3d_v4.html` visual direction.

## Included now
- Responsive navbar with the same core tabs and a Services dropdown.
- Home hero section with animated 3D-style globe/orbits and floating workflow cards.
- Contact us section and a responsive enquiry form.
- Placeholder links for pages/routes that will be decided later.
- TypeScript, App Router, metadata, responsive styling and reduced-motion support.

## Run locally
Requirements: Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build
```bash
npm run build
npm start
```

## Important
The contact form is frontend-only at this stage. It validates required fields and shows a demo confirmation, but does not send/store submissions. Connect a backend/API route or email provider once the preferred service is chosen.

Navigation items other than Home and Contact us intentionally use placeholder `#` links until their routes and page content are agreed.

## Suggested next steps
1. Choose the remaining pages and route structure.
2. Connect the contact form to an API/email service.
3. Add the final logo asset and any approved copy.
4. Add tests and deployment configuration.
