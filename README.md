# 0xTimes.com

## Sites

For a basic experience: https://0xtimes.com

For an IPFS experience: https://0xtimes.on-fleek.app

## Getting Started

```bash
npm install
npm run dev
```

## Page Contribution

To add pages, in `public/html` add a `.html` file with the naming convention

```
<TIMESTAMP>+<HOST_URL>+<Article-Name-With-Hyphens>.html>
or
1722193351391+filecoin.io+Why-Filecoin-is-Changing-Storage-Ecosystem.html
```

## Image Contribution

To add logos, in `public/img` add a `.jpg` file with the naming convention

```
<HOST_URL>.jpg
```

## How it works

### Website: Nextjs

- `src/app/page.ts` will call `setPages()`
- `setPages()` will
  - get all of the `html` files
  - sort them by reverse chronological order
  - set pages in `src/utils/pages.json`
- `page.ts` will loop through `pages.json` to create each page
- `src/app/page.tsx` will get `Page[]` to display each `Card`
- `src/components/Card.tsx` will render and style the individual card
- `<HOST_URL>` is what links `public/html` to `public/img`
  - for example `public/html/filecoin.io+cool-article.html` will have the logo from `public/img/filecoin.io.jpg`

### Automation: n8n

We're using n8n to automatically transfer all emails to the permanant web

![](https://github.com/user-attachments/assets/4e750f40-1496-4518-b8a6-8f6a472f0a47)
