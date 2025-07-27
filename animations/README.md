# Animations

This folder manages page and section animations using GSAP and React hooks. It is organized for modularity and scalability.

## Structure

- **config.ts**  
  Configures GSAP and registers plugins (`ScrollTrigger`, `@gsap/react`).  
  Exports the configured GSAP instance.

- **constants.ts**  
  Defines default animation namespaces (sections to animate):  
  `header`, `heroSection`, `collectionSection`.

- **utils.ts**  
  Dynamically loads timeline modules for given namespaces using dynamic imports.

- **hook.ts**  
  Provides `useAnimationHook`, a React hook that loads timelines for specified namespaces and manages their state.

- **index.ts**  
  Main entry point.  
  Exports `useAnimation`, a hook that runs all loaded timelines when the pathname changes.

- **timelines/**  
  Contains animation definitions for each section:
  - `header.ts`: Animates the header (e.g., slide in from top on home page).
  - `heroSection.ts`: Animates hero image, title, subtext, description, and button.
  - `collectionSection.ts`: Animates collections section elements with scroll-triggered effects.

## Usage

1. **Import and use the animation hook in your page/component:**
   ```tsx
   import { useAnimation } from "@/animations";
   useAnimation(["header", "heroSection"]);
   ```
2. **Add appropriate class names to your elements (e.g., `.header`, `.hero-image`).**
3. **Timelines are loaded and executed automatically based on the current route.**

## Extending

- To add a new animated section:
  1. Create a new file in `timelines/` (e.g., `newSection.ts`).
  2. Export a default function that defines the GSAP timeline.
  3. Add the section name to `DEFAULT_NAMESPACES` in `constants.ts` if you want it loaded by default.

---

This setup allows for easy addition and management of complex animations across different sections of the app.
