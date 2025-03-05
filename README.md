# budget

## stack
UI library: [shadcn-svelte](next.shadcn-svelte.com)

## setup app with dependencies
1. setup app with shadcn-svelte and tailwind see [install instructions](https://next.shadcn-svelte.com/docs/installation/sveltekit):

```bash
npx sv@0.6.18 create my-app
npx sv@0.6.18 add tailwindcss
npx shadcn-svelte@next init
npm i tailwindcss-animate
```

2. install gh-pages: `npm i gh-pages --save-dev`
3. install types for node: `npm i --save-dev @types/node`

## setup custom npm scripts
1. Add scripts to package.json

```json
{
    "scripts": {
        "deploy": "touch build/.nojekyll && gh-pages -d build",
        "magic":"git add . && git commit -am 'na' && git push origin main && vite build && touch build/.nojekyll && gh-pages -d build"
    }
    
}
```

## setup static site settings for publishing with github pages
1. install static adapter: `npm i -D @sveltejs/adapter-static`
2. update svelte.config.js to be compatible with the static adapter and gh-pages

```ts
// Change adapter from adapter-auto to adapter-static...
import adapter from '@sveltejs/adapter-static';

// Add the following to config.kit...
const config = {
    // ...
    kit: {
        // ...
		appDir: 'app',
		paths: {
			base: process.env.NODE_ENV === "production" ? "/YOUR_GITHUB_REPO" : "",
		}
	}
}
```

3. add the following to /src/+layout.ts (or create the file):

```ts
export const prerender = true;
export const trailingSlash = "always";
```