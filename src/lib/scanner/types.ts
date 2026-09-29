/**
 * The JSON contract between /api/scan and the scanner page. Server returns
 * keys and raw evidence only; every user-facing sentence is looked up in
 * src/data/scannerCopy.ts on the client, so the report reads natively in
 * every locale.
 */
import type { Category, Evidence, Severity, Verdict } from './rules';
import type { LoadMode } from './extract';

export type { Category, Evidence, Severity, Verdict, LoadMode };

export interface FindingOccurrence {
  url: string;
  mode: LoadMode;
  page: string;
}

export interface Finding {
  key: string;
  service: string;
  category: Category;
  verdict: Verdict;
  severity: Severity;
  copy: string;
  fix: string;
  evidence: Evidence;
  occurrences: FindingOccurrence[];
  /** True when the only evidence is a mention inside a JS file */
  referencedOnly: boolean;
}

export interface InventoryHost {
  host: string;
  service: string | null;
  verdict: Verdict | 'unknown';
  modes: LoadMode[];
}

export type HostingZone = 'mainland' | 'china-cdn' | 'hk' | 'abroad' | 'unknown';

export interface Hosting {
  hostname: string;
  ip: string | null;
  country: string | null;
  asn: string | null;
  network: string | null;
  cnames: string[];
  providers: string[];
  zone: HostingZone;
  /** Copy key for the hosting verdict */
  copy: string;
  severity: Severity;
  evidence?: Evidence;
}

export type ReadinessStatus = 'pass' | 'fail' | 'warn' | 'info';

export interface ReadinessItem {
  key: string;
  status: ReadinessStatus;
  /** Raw value to show next to the item (an ICP number, a TLD) */
  value?: string;
}

export interface ScanReport {
  url: string;
  finalUrl: string;
  timestamp: string;
  score: number;
  grade: 'good' | 'work' | 'poor';
  counts: Record<Severity, number>;
  findings: Finding[];
  hosting: Hosting;
  readiness: ReadinessItem[];
  inventory: InventoryHost[];
  platform: string | null;
  pages: { url: string; status: 'ok' | 'failed' }[];
  stats: {
    htmlBytes: number;
    responseMs: number;
    scriptsScanned: number;
    stylesScanned: number;
    thirdPartyHosts: number;
  };
}

export type ScanErrorCode =
  | 'invalid'
  | 'blocked-target'
  | 'timeout'
  | 'unreachable'
  | 'http'
  | 'too-many-redirects'
  | 'not-html'
  | 'token'
  | 'server';
