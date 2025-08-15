// content.config.mjs
import { ObsidianDocumentSchema, ObsidianMdLoader } from "astro-loader-obsidian";
import { defineCollection, z } from 'astro:content';

export const collections = {
	posts: defineCollection({
		loader: ObsidianMdLoader({
			base: 'src/content/journal',
			url: 'journal',
		}),
		schema: ({ image }) => ObsidianDocumentSchema.extend({
			image: image().optional(),
			description: z.string().optional(),
		}),
	}),
};
