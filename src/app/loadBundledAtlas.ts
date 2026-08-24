import { parse } from 'yaml';
import { normalizeAtlas } from '../data/normalizeAtlas';
import type { AtlasDocument, PublishedAtlas } from '../data/types';
import atlasYaml from '../../data/atlas.yaml?raw';

export function loadBundledPublishedAtlas(): PublishedAtlas {
  return normalizeAtlas(parse(atlasYaml) as AtlasDocument);
}
