import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The wedding photo faced the wall.";
const OUTPUT = "/output/entry.txt";

// Gate: the entry must be one complete story in exactly six words,
// 1-60 characters, a single line with no surrounding whitespace.
const words = STORY.trim().split(/\s+/);
if (STORY !== STORY.trim()) throw new Error("story has surrounding whitespace");
if (words.length !== 6) throw new Error(`story must be exactly six words, got ${words.length}`);
if (STORY.length < 1 || STORY.length > 60) throw new Error(`story must be 1-60 characters, got ${STORY.length}`);
if (STORY.includes("\n")) throw new Error("story must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, STORY);
