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

3. Place your new images in the [_assets](./_assets) directory.
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

4. Add the new images to the repository
```bash
$ git add _assets/cover-images/my-new-image.jpg _assets/images/my-new-image.jpg
$ git commit -am 'add new images for the new blog post'
$ git push origin my-branch-name
```

5. Create a pull request on [GitHub](https://github.com/honeypotio/blog-honeypot-io)
![screen shot 2016-11-03 at 11 05 49](https://cloud.githubusercontent.com/assets/464300/19962001/d26c3c7c-a1b5-11e6-987e-ebd550a16d4d.png)

## Starting in development

`jekyll serve`

### Want to double test your change before putting live?

Use the staging environment [staging-blog-honeypot.herokuapp.com][1]

all changes pushed to the `master` branch are automatically
deployed to Heroku by Travis-CI and can be visible on [staging-blog-honeypot.herokuapp.com][1]

After your changes have been QA tested merge them into default `gh-pages` branch
for deployment to the live blog.


[1]: https://staging-blog-honeypot.herokuapp.com
