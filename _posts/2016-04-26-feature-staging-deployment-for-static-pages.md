---
title:   Feature staging deployment for static pages
subtitle: Deployment for your pull request workflow on a single page application project
date:    2016-04-26 10:00:00
layout:  post
author:  hugo_duksis
categories: Tech
cover_image: static_pr_deploy.png
permalink:  feature-staging-deployment-for-static-pages/
importance: 2
---

### Introduction

It's nice to have your static pages being deployed and served separately
from your application. This can give you benefits like smaller downtimes,
shorter deploys, reduced load on you application servers and more.
Of course there can also be downsides like more complicated setup.


For projects that are actively developed I prefer having staging environments
per feature where the effect of changes made can be verified in isolation.
Lately creating this kind of setup with tools like [Heroku][1]
is getting close to effortless.


### The problem

This is great for applications you deploy to heroku, but what to do if
you want to have the same setup for your static pages, blog or single page
application that you deploy to github pages or a content delivery network...


### Possible solutions

#### Test on Heroku

An option is to deploy a staging/test environment to heroku and let heroku
create Review apps for each pull request submitted. This might not be optimal
as there will be quiet some differences between your staging and production
environments.


#### Do it yourself

Another option is to recreate this setup by using a CI tool and your production
infrastructure. In our case it would be Travis-CI (because Travis Rocks!) and
Amazon S3/cloudfront. The good thing is that Travis-CI supports deployment
out of the box and even [deployment to S3][2]. But every good thing has to be
followed by something not that good in order not to ruin the overall experience.
So from [Travis-CI documentation][3]:

```
Note that pull request builds skip deployment step altogether.
```

As the main purpose of this is to automatically deploy on pull requests, we can't
really use the integrated Travis-CI deployment and have to recreate that inside
the regular build step. To get all the awesomeness from S3 deployment outside
of Travis deployment step we can use the [s3_website tool][4].


### Quick example of Travis-CI & S3/Cloudfront

Lets create two S3 buckets production and staging. All commits in `master` get
deployed to the production bucket and every pull request gets deployed to a
subfolder inside the staging bucket.

```yaml
# s3_website.yml
s3_endpoint: eu-west-1
site: public
s3_id: <%= ENV['S3_ID'] %>
s3_secret: <%= ENV['S3_SECRET'] %>

# change bucket based on travis ENV
# chechk for PR required as branch in PR's always is master on travis
<% if ENV['TRAVIS_BRANCH'] == 'master' && ENV['TRAVIS_PULL_REQUEST'] == 'false' %>
s3_bucket: honeypot-staticpages
cloudfront_distribution_id: E21RQMADUM8ALN
<% else %>
s3_bucket: staging-honeypot-staticpages
cloudfront_distribution_id: E2663ASEPJTJSO
s3_key_prefix: <%= ENV['PREFIX_FOLDER'] %>
<% end %>
```

As we only want to deploy on master and pull requests we need to block deployment
for other builds. For that I'll create a simple shell script `bin/deploy`

```bash
#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" -o "$TRAVIS_PULL_REQUEST" != "false" ]
then
  bundle exec s3_website push
else
  echo "no deployent for branch $TRAVIS_BRANCH"
fi
```

The last things still missing are setting the `PREFIX_FOLDER` env variable that is
used as staging subfolder name and instructing Travis to run the freshly created
`bin/deploy` script

```yaml
language: ruby
script: ./bin/deploy
env:
  PREFIX_FOLDER: $([ "$TRAVIS_PULL_REQUEST" != "false" ] && echo "pr-$TRAVIS_PULL_REQUEST")
```

After pushing this and creating a pull request Travis CI will automatically deploy
deploy your changes under:

```
http://<bucket-name>.s3-website-eu-west-1.amazonaws.com/pr-<your-PR-number>
```

### TODO

- [ ] Notify github about the creation of a feature staging
- [ ] Move logic from yaml files to the deploy script

[1]: https://devcenter.heroku.com/articles/github-integration-review-apps "Heroku Rewiev apps"
[2]: https://docs.travis-ci.com/user/deployment/s3 "Travis CI deployment to S3"
[3]: https://docs.travis-ci.com/user/deployment/#Pull-Requests "Travis CI deployment on PR"
[4]: https://github.com/laurilehmijoki/s3_website "Manage an S3 website"
