# blog.honeypot.io

## Creating a new blog post

`rake new['awesome new post title']`

## Adding new images

1. Switch into the blog directory and fetch the latest data
```bash
$ cd blog-honeypot.io
$ git checkout gh-pages
$ git pull origin gh-pages
```

2. Create a new branch
```bash
$ git branch my-branch-name
$ git checkout my-branch-name
```

3. Place your new images in the [_assets](./_assets) directory!!
```
.
├── _assets
|   ├── images
|   |   ├── my-new-image.jpg
|   |   └── ...
|   ├── cover-images
|   |   ├── my-new-image.jpg
|   |   └── ...
|   └── ...
└── ...
```

4. Optimize blog images

```bash
$ gulp
```

5. Add the new images to the repository
```bash
$ git add _assets/cover-images/my-new-image.jpg _assets/images/my-new-image.jpg
$ git add assets/cover-images/my-new-image.jpg assets/images/my-new-image.jpg
$ git commit -am 'add new images for the new blog post'
$ git push origin my-branch-name
```

6. Create a pull request on [GitHub](https://github.com/honeypotio/blog-honeypot-io)
![screen shot 2016-11-03 at 11 05 49](https://cloud.githubusercontent.com/assets/464300/19962001/d26c3c7c-a1b5-11e6-987e-ebd550a16d4d.png)

## Development

### Using local env

#### Install dependencies

```bash
# required for image optimization
$ brew install imagemagick
$ brew install graphicsmagick

$ bundle install
$ npm install
```

#### Preview

```bash
$ bundle exec jekyll serve
```

#### Optimize blog images

```bash
$ gulp
```

### Using Docker

```bash
# List all available commands / tasks
$ ./bin/honeyblog-dev help
```

#### Build docker image

```bash
$ ./bin/honeyblog-dev build
```

#### Preview

```bash
$ ./bin/honeyblog-dev serve
```

#### Optimize blog images

```bash
$ ./bin/honeyblog-dev optimize
```
