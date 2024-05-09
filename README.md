# cat-frontend

This repository is a demo platform to show how [Workers for platfroms](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms) can be used.

## Live Demo

👩‍💻 Developer protal [https://cat-frontend.pages.dev/ide/](https://cat-frontend.pages.dev/ide/)

🏢 Admin portal [https://cat-frontend.pages.dev/admin/](https://cat-frontend.pages.dev/admin/)

## Related

This repository is the fronted piece of [https://github.com/megaconfidence/cat-api](https://github.com/megaconfidence/cat-api).
Please install and set-up the api repository locally before proceeding.

## Set Up

Clone the project:

```sh
git clone git@github.com:megaconfidence/cat-frontend.git
```

Install project dependencies:

```sh
cd cat-frontend/
npm i
```

Create a `.dev.vars` file with the following content:

```sh
API_ORIGIN=http://localhost:8787
```

Finally, run the app:

```sh
npx start
```

## Credits

[Cat image](./public/ide/cat.jpg) by [24127718](https://pixabay.com/users/24127718-24127718/) from Pixabay.
