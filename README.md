# 0xTimes.com

## Getting Started

```bash
npm install
npm run dev
```

## Page Contribution

To add pages, in `public/html` add a `.html` file with the naming convention

```
<HOST_URL>+<Article-Name-With-Hyphens>.html>
or
filecoin.io+Why-Filecoin-is-Changing-Storage-Ecosystem.html
```

## Image Contribution

To add logos, in `public/img` add a `.jpg` file with the naming convention

```
<HOST_URL>.jpg
```

## How it works

On build:

- A function in `src/utils/getPages.ts` will
  - list all of the `html` files
  - sort them by reverse chronological order
  - then return the list as `Page[]`
- `src/app/page.tsx` will get `Page[]` to display each `Card`
- `src/components/Card.tsx` will render and style the individual card
- `<HOST_URL>` is what links `public/html` to `public/img`
  - for example `public/html/filecoin.io+cool-article.html` will have the logo from `public/img/filecoin.io.jpg`
