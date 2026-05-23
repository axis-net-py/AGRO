---
name: Terraform Management System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#3f6653'
  on-secondary: '#ffffff'
  secondary-container: '#beead1'
  on-secondary-container: '#436b58'
  tertiary: '#904d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#f08921'
  on-tertiary-container: '#5a2e00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#c1ecd4'
  secondary-fixed-dim: '#a5d0b9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#274e3d'
  tertiary-fixed: '#ffdcc3'
  tertiary-fixed-dim: '#ffb77d'
  on-tertiary-fixed: '#2f1500'
  on-tertiary-fixed-variant: '#6e3900'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  earth-brown: '#451A03'
  field-green: '#064E3B'
  alert-red: '#F43F5E'
  surface-light: '#F8FAFC'
  surface-dark: '#0F172A'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  stats-number:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  touch-target: 48px
  gutter-mobile: 16px
  gutter-desktop: 24px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for the agricultural sector, prioritizing utility, clarity, and ease of use for operators in the field. The brand personality is grounded, reliable, and optimistic—balancing technical precision with an organic, approachable feel. It aims to evoke a sense of "digital craftsmanship" that feels as sturdy and dependable as the machinery it manages.

The chosen style is **Modern Corporate with Tactile accents**. It leverages a clean, high-contrast interface to ensure readability under varying outdoor light conditions. By combining generous whitespace with structured information density, the system remains "simple and intuitive" for non-technical users while providing the robust data management required for modern farming.

## Colors

The palette is rooted in an "Earthy Professional" aesthetic. The primary color is a vibrant emerald green (#10B981), symbolizing growth and vitality, used for primary actions and success states. The secondary color is a deep forest green (#1B4332), providing the necessary professional weight and high-contrast grounding for text and navigation.

A tertiary "Earth Brown" or Amber is used sparingly for warnings or high-priority harvesting data. For the dark mode transition, surfaces shift to a deep navy-charcoal (#0F172A) rather than pure black, maintaining depth and reducing eye strain during night shifts. All color combinations are strictly checked against WCAG AA standards to ensure maximum legibility for users of all visual abilities.

## Typography

This design system utilizes **Plus Jakarta Sans** for headlines and display elements to inject a modern, welcoming personality. For all functional text, data tables, and labels, **Inter** is the workhorse font, chosen for its exceptional legibility and neutral tone.

Typography is scaled for "fat-finger" accessibility and high-glare environments. Body text is set larger than standard web defaults (18px for primary content) to accommodate non-technical users. Numerical data, crucial for yield and moisture tracking, uses a specialized bold weight of Plus Jakarta Sans to stand out within card layouts.

## Layout & Spacing

The layout follows a **Mobile-First Fluid Grid** philosophy. On mobile devices, the system uses a single-column stack with 16px side margins to maximize horizontal real estate. As the screen scales to tablet and desktop, it transitions to a 12-column grid.

Spacing is strictly based on an 8px rhythm. A "Safe Zone" policy is enforced for all interactive elements, ensuring a minimum 48x48px tap target to account for users who may be wearing gloves or operating in high-vibration environments (e.g., inside a tractor cabin).

## Elevation & Depth

The design system uses **Tonal Layers** rather than heavy shadows to define hierarchy. In light mode, the background uses a subtle off-white, while cards and primary containers use pure white with a very soft, high-diffusion shadow (15% opacity of the secondary color).

Depth is communicated through "Raised Surfaces." Interactive elements like buttons and input fields have a subtle 1px border (#E2E8F0) to define their boundaries clearly. In dark mode, elevation is represented by progressively lighter shades of the background navy, creating a sense of height without relying on light-source shadows that can appear muddy on OLED screens.

## Shapes

The shape language is **Rounded (Level 2)**. A standard 0.5rem (8px) corner radius is applied to buttons, cards, and input fields. This softened geometry helps the app feel "approachable" and "user-friendly," moving away from the harsh, intimidating edges of legacy industrial software.

Large-scale containers (like dashboard cards) utilize a `rounded-lg` (16px) radius to create a clear visual distinction between the page structure and the content blocks.

## Components

### Buttons
Buttons are tall (min 48px) with centered, bold labels. Primary buttons use the Emerald Green background with white text. Secondary buttons use an outlined style with the Forest Green border for clear distinction.

### Cards
Cards are the primary vessel for data. They feature high-contrast headers and "Quick-Action" footer buttons. On mobile, cards are full-width to prevent cramped text.

### Input Fields
Inputs use a "Large Label" pattern where the label sits permanently above the field (no floating labels) to maintain context for non-technical users. Borders thicken to 2px on focus using the Primary color.

### Chips & Status Indicators
Status chips (e.g., "Harvesting," "Irrigation Active") use high-saturation background tints with dark text to ensure status is glanceable from a distance.

### Navigation
A bottom-bar navigation is mandatory for mobile views, ensuring primary features are within reach of the thumb. For desktop, this transitions to a persistent left-hand rail to maximize vertical data visibility.