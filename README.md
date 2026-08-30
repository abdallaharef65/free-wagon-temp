# Monorepo Starter

**One repo. Web and mobile.**

Free ThemeWagon build of a Turborepo monorepo with **Next.js 15** (web) and **Expo 54** (mobile). Shared packages, a landing page, and workspace scripts — no dashboard or auth screens in this release.

- **Free demo:** run locally with `yarn web` → http://localhost:3000
- **Full product (premium):** https://react-native-next-theme-web.vercel.app
- **License:** See [LICENSE](./LICENSE)

---

## What's included (free build)

| Package                    | Purpose                          |
| -------------------------- | -------------------------------- |
| `apps/web`                 | Next.js 15 App Router            |
| `apps/mobile`              | Expo Router (iOS & Android)      |
| `packages/shared_mono_app` | Landing feature (`entryFeature`) |
| `packages/ui`              | Cross-platform UI library        |
| `packages/state`           | Zustand global store             |
| `packages/api`             | TanStack Query + HTTP layer      |

**This free version ships:** monorepo landing page, shared package layout, Neural dark theme (fixed), English-only UI, and Android APK download from the web demo.

**Premium version adds:** full dashboard, auth (OTP / PIN / biometrics), light/dark toggle, multi-language UI, extended component library, AI Studio, and documentation.

Use **Get the Full Version** on the landing page to open the premium product page.

---

## Requirements

- Node.js **18+**
- Yarn **1.22+**
- For mobile: Expo CLI, Android Studio and/or Xcode

---

## Quick start

```bash
yarn install
cp .env.example .env.local   # optional
yarn web
yarn android                 # Windows
yarn android:mac             # macOS / Linux (adb reverse)
```

Open http://localhost:3000 for the landing page.

---

## Scripts

| Command                    | Description                    |
| -------------------------- | -------------------------------- |
| `yarn web`                 | Start Next.js dev server         |
| `yarn build:web`           | Production web build             |
| `yarn start-web`           | Build and start production web   |
| `yarn android`             | Start Expo Android (Windows)     |
| `yarn android:mac`         | Start Expo Android with adb      |
| `yarn ios`                 | Start Expo iOS                   |
| `yarn api [feature]`       | Scaffold feature API layer       |
| `yarn del-api [feature]`   | Remove feature API scaffold      |

---

## Environment variables

See `.env.example`. The free landing page works without extra configuration.

---

## Mobile development (Android)

### macOS / Linux

From the repo root:

```bash
yarn android:mac
```

### Windows

```bash
yarn android
```

### Connection issues

```bash
yarn android:fix-connection
```

Then set the dev server host in **Expo Dev Settings** to `127.0.0.1:8081`.

---

## Mobile build (EAS)

Run from `apps/mobile`:

```bash
cd apps/mobile
eas build --platform android --profile preview
```

---

## Author

Design and development by **Aref Abdallah**.

- **LinkedIn:** https://www.linkedin.com/in/aref-abdallah-4a4b11210/
- **Email:** abdallaharef65@gmail.com

---

## Support

Email **abdallaharef65@gmail.com** for questions about this template or the premium product.

---

## License

See [LICENSE](./LICENSE). Distributed via [ThemeWagon](https://themewagon.com).
