// cutest-picture-01 entry (Node 22, standard library only): the picture is entry.png beside this file, and
// the program writes it to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const png = readFileSync(new URL('./entry.png', import.meta.url));
writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), png);
