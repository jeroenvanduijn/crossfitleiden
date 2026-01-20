# Aesthetic Patterns Reference

This reference provides concrete CSS variable patterns for distinct aesthetic directions. Use these as a foundation but apply them creatively.

## 1. Brutalist / Raw
Characterized by high contrast, monospaced typography, and raw borders.

```css
:root {
  --bg-color: #f0f0f0;
  --text-color: #000000;
  --accent-color: #ff3300;
  --border-width: 3px;
  --border-style: solid;
  --font-display: 'Courier New', Courier, monospace;
  --font-body: 'Arial', sans-serif;
  --spacing-unit: 2rem;
  --box-shadow: 10px 10px 0px #000000;
}
```

## 2. Minimalist / Refined
Focus on whitespace, subtle typography, and lack of ornamentation.

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --accent-color: #333333;
  --subtle-gray: #f5f5f5;
  --border-width: 1px;
  --border-style: solid;
  --border-color: #e5e5e5;
  --font-display: 'Helvetica Neue', sans-serif; /* Replace with a premium serif if available */
  --font-body: 'Inter', sans-serif;
  --spacing-unit: 4rem;
  --box-shadow: none;
}
```

## 3. Retro-Futurism / Synthwave
Neon colors, gradients, and dark backgrounds.

```css
:root {
  --bg-color: #0b0c15;
  --text-color: #ffffff;
  --accent-primary: #ff00ff;
  --accent-secondary: #00ffff;
  --grid-color: rgba(255, 0, 255, 0.1);
  --font-display: 'Orbitron', sans-serif;
  --font-body: 'Roboto', sans-serif;
  --glow: 0 0 10px var(--accent-primary);
  --gradient: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
}
```

## 4. Organic / Natural
Earth tones, soft curves, and texture.

```css
:root {
  --bg-color: #fdfbf7;
  --text-color: #2c2825;
  --accent-color: #4a5d23;
  --secondary-color: #d4b483;
  --border-radius: 12px;
  --font-display: 'Georgia', serif;
  --font-body: 'Nunito', sans-serif;
  --texture-overlay: url('/path/to/noise.png'); /* Add grain texture */
}
```

## 5. Industrial / Utilitarian
Resembles technical documentation or machinery interfaces.

```css
:root {
  --bg-color: #e0e5eb;
  --text-color: #333d45;
  --accent-color: #0055ff;
  --warning-color: #ffaa00;
  --font-mono: 'Space Mono', monospace;
  --border-color: #bdc3c7;
  --guide-lines: 1px dashed var(--border-color);
}
```

## Usage
- Copy relevant variables to the project's global CSS.
- Combine and modify to suit the specific project needs.
- Don't feel constrained; these are starting points.
