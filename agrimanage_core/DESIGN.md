---
name: AgriManage Core
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#42493e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#72796e'
  outline-variant: '#c2c9bb'
  surface-tint: '#3b6934'
  primary: '#154212'
  on-primary: '#ffffff'
  primary-container: '#2d5a27'
  on-primary-container: '#9dd090'
  inverse-primary: '#a1d494'
  secondary: '#586059'
  on-secondary: '#ffffff'
  secondary-container: '#dde5db'
  on-secondary-container: '#5e665f'
  tertiary: '#00377a'
  on-tertiary: '#ffffff'
  tertiary-container: '#004da5'
  on-tertiary-container: '#a7c3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcf0ae'
  primary-fixed-dim: '#a1d494'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#23501e'
  secondary-fixed: '#dde5db'
  secondary-fixed-dim: '#c1c9bf'
  on-secondary-fixed: '#161d17'
  on-secondary-fixed-variant: '#414942'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a41'
  on-tertiary-fixed-variant: '#004493'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-numeral:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  container-max: 1440px
  form-gap: 16px
  data-density-sm: 8px
---

## Brand & Style

The design system is engineered for high-utility agricultural management, balancing the raw nature of fieldwork with the precision of modern terraforming technology. It targets farm owners, agronomists, and land managers who require a reliable, professional tool that feels grounded yet technologically superior.

The visual style is **Corporate Modern with Tactile nuances**. It prioritizes information density and clarity for complex data entry while utilizing organic color palettes to maintain a connection to the land. The interface should evoke a sense of "digital machinery"—robust, efficient, and dependable. 

Key principles include:
- **Pragmatic Density:** Maximizing screen real estate for desktop workflows without sacrificing legibility.
- **Ecological Precision:** Using nature-inspired tones to categorize data and provide visual comfort during long periods of use.
- **Contextual Intelligence:** Integrating AI-driven insights through a distinct, high-visibility visual language that separates automated assistance from manual data entry.

## Colors

The palette is rooted in "Deep Forest Green" to represent stability and growth. 

- **Primary:** A high-contrast green for core actions and brand presence.
- **Secondary:** A soft sage used for large background surfaces and container fills to reduce eye strain.
- **AI Accent:** A vibrant, luminous Cyan/Blue reserved exclusively for the AI Assistant and automated insights, creating a clear mental model between "human input" and "machine intelligence."
- **Neutrals:** Warm-toned greys (Stone) rather than cold blues, maintaining a natural feel.

The design system supports a full Dark Mode mapping where surface levels are inverted using tonal elevation—ensuring legibility in low-light environments like vehicle cabins or night shifts.

## Typography

Typography is optimized for multi-language support (PT-BR and ES-PY) and complex data visualization.

- **Headlines (Manrope):** Modern and geometric, providing a clear structural hierarchy for land sectors and management modules.
- **Body (Work Sans):** Highly legible at small sizes, essential for dense data tables and technical documentation.
- **Data/Labels (JetBrains Mono):** Used for technical specs (hectares, machinery IDs, fuel metrics) to provide a distinct "instrumentation" feel.
- **Numerical Formatting:** Always use tabular figures (`tnum`) for alignment in financial and area measurement columns across BRL, PYG, and USD.

## Layout & Spacing

The layout utilizes a **12-column fluid grid** for desktop, allowing for side-by-side comparisons of land data and machinery logs. 

- **Desktop Density:** High-density layouts are preferred. Use an 8px base grid for component spacing, but tighten to 4px for internal data-entry groups.
- **Multi-Currency Display:** Currency units (BRL, PYG, USD) should be treated as fixed-width prefixes to prevent layout shifting when toggling between languages.
- **Breakpoints:** 
  - Mobile: < 600px (Single column, bottom-anchored AI FAB)
  - Tablet: 600px - 1024px (2-column cards)
  - Desktop: > 1024px (12-column grid, persistent sidebar)

## Elevation & Depth

This design system uses **Tonal Layers** supplemented by **Ambient Shadows** to define hierarchy.

1. **Floor (Level 0):** The main canvas, using the lightest secondary tint.
2. **Cards/Containers (Level 1):** Flat surfaces with a 1px low-contrast stroke (#E0E0E0).
3. **Overlays/Modals (Level 2):** Elevated with a 12% opacity shadow and 16px blur, used for machinery detail views.
4. **AI Assistant (Floating):** Uses a high-elevation shadow (20% opacity) and a subtle outer glow in `ai_accent` to simulate a "hovering" digital layer above the physical data.

## Shapes

The shape language is **Soft (0.25rem base)** to maintain a professional, tool-like appearance. 

- **Standard Elements:** Buttons and inputs use a 4px radius.
- **Data Cards:** Use a 8px radius for a slightly softer container feel.
- **AI FAB & Chat Bubbles:** These break the system with **Pill-shaped (Full)** rounding to signify their unique, non-static nature.

## Components

### Complex Data Entry
- **Unit Toggle Inputs:** For area measurements (Hectares vs. Alqueires), use a split-input component with a persistent suffix toggle.
- **Currency Inputs:** Use a 3-letter ISO code prefix (USD, BRL, PYG). Ensure the input supports localized decimal separators (comma for PT/ES).
- **Resource Logs:** For fuel and chemicals, use "Stripe-style" inline rows with auto-summation in the footer.

### AI Assistant (Floating Action Button)
- **Visuals:** A 56px circular button with a dual-tone gradient (`primary` to `ai_accent`).
- **Interaction:** On tap, expands into a vertical chat interface.
- **Chat Interface:**
  - **Glassmorphism:** Use a 20px backdrop-blur on the chat window.
  - **Voice Input:** A pulsing waveform animation when active.
  - **Photo Input:** A "Viewfinder" preview for OCR processing of chemical labels or machinery receipts.

### Tables & Lists
- **Density:** Use "Compact" row heights (32px) for large fleet management.
- **Status Indicators:** Use colored "dots" with label text for machinery health (Active, Maintenance, Idle).

### Selection Controls
- **Checkboxes/Radios:** Square-ish (4px radius) with `primary_color` fills.
- **Chips:** Used for filtering crop types (Soy, Corn, Wheat) or land status.