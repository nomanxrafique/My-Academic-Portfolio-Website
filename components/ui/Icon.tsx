import {
  Blocks,
  Brain,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  KeyRound,
  Layers,
  Network,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from 'lucide-react';

/**
 * Explicit icon registry.
 *
 * Icons are named by string in data/portfolio.ts so the data file stays free
 * of React imports. Importing each icon by name (rather than dynamically)
 * keeps tree-shaking effective — only these eleven icons ship to the browser.
 */
const registry: Record<string, LucideIcon> = {
  Blocks,
  Brain,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  KeyRound,
  Layers,
  Network,
  ShieldCheck,
  Terminal,
};

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function Icon({ name, size = 18, className, style }: IconProps) {
  const Component = registry[name] ?? ShieldCheck;
  return <Component size={size} className={className} style={style} aria-hidden="true" />;
}
