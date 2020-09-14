# Personal Homepage

## To Start

We use `npm@5` to lock versions.

```bash
npm install
```

and then run

```bash
npm run dev
```

## To Optimize Images

Many of the pngs you get from online are large and poorly compressed. To optimize images (on OSX), first install these two programs

```
brew install optipng
brew install jpegoptim
```

Then run

```
pushd public/images
sips -Z 640 *.png  # resize png (biggest images)
optipng *.png  # optimize png
jpegoptim *.jpg  # optimize jpg
popd
```

## To Deploy

First, build the deploy

```
npm run build
npm run export
```

and then run the deploy script to deploy (check the script for any pre-requisites).

```
./deploy.sh
```

The deploy script relies on two remotes:

- _origin_: (this one, [git@github.com:tianhuil/tianhuil.git]) and
- _deploy_: (where the website is deployed [git@github.com:tianhuil/tianhuil.github.io.git])

## Fix Domain

You may need to reset the domain in "GitHub Pages" section of the [settings for tianhuil.github.io](https://github.com/tianhuil/tianhuil.github.io/settings) to be [tianhui.li](tianhui.li), not the default github pages url.
