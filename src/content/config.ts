// content.config.mjs
import { ObsidianDocumentSchema, ObsidianMdLoader } from "astro-loader-obsidian";
import { defineCollection } from 'astro:content';

export const collections = {
	posts: defineCollection({
		loader: ObsidianMdLoader({
			base: 'src/content/journal',
			url: 'docs',
		}),
		schema: ({ image }) => ObsidianDocumentSchema.extend({
			image: image().optional(),
			cover: image().optional(),
		}),
	}),
};
