import { hexToHueSat } from './contrast';

export const tokens = {
  color: {
    ink: '#141310',
    inkRaised: '#1c1a16',
    paper: '#f3eee4',
    paperMuted: '#c9c2b4',
    rule: '#3a362f',
    accent: '#d4784a',
    accentSoft: '#e8b089',
    focus: '#e8c27a',
  },
  font: {
    display:
      '"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif',
    sans: '"Segoe UI", "Source Sans 3", system-ui, sans-serif',
    mono: 'ui-monospace, "Cascadia Code", Consolas, monospace',
  },
  get accentHue() {
    return hexToHueSat(this.color.accent);
  },
} as const;

export const EDITORIAL_ERAS = [
  {
    id: 'transformer-foundations',
    label: 'Transformer foundations',
    period: '2017–2018',
    mark: '#c4a35a',
  },
  {
    id: 'scaling-instruction',
    label: 'Scaling + instruction',
    period: '2019–2022',
    mark: '#d4784a',
  },
  {
    id: 'open-multimodal',
    label: 'Open models + multimodality',
    period: '2023–2024',
    mark: '#8fb4aa',
  },
  {
    id: 'reasoning-agents',
    label: 'Reasoning + agents',
    period: '2025–2026',
    mark: '#c48a9a',
  },
] as const;

export type EditorialEra = (typeof EDITORIAL_ERAS)[number];
