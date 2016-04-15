# blog.honeypot.io


## Creating a new blog post

`rake new['awesome new post title']`

## Starting in development

`jekyll serve`

### Want to double test your change before putting live?

Use the staging environment [staging-blog-honeypot.herokuapp.com][1]

all changes pushed to the `master` branch are automatically
deployed to Heroku by Travis-CI and can be visible on [staging-blog-honeypot.herokuapp.com][1]

After your changes have been QA tested merge them into default `gh-pages` branch
for deployment to the live blog.


[1]: https://staging-blog-honeypot.herokuapp.com
