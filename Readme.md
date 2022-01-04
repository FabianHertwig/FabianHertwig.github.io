# Fabian Hertwig's Blog

<https://fabianhertwig.com>

This is the repository for my blog. It is setup with jekyll and github pages.

## Local setup

Install Ruby. For more information, see "[Installing Ruby](https://www.ruby-lang.org/en/documentation/installation/)" in the Ruby documentation.
Install Bundler. For more information, see "[Bundler](https://bundler.io/)".

Run

    cd docs
    bundle install
    bundle exec jekyll serve

# Start from scratch

This blog is based on github pages and jekyll, checkout the guide here: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll

It uses the default [jeckyll minima theme](https://github.com/jekyll/minima) but there are some customizations to the templates in the `_includes` folder. When you add a file there, then the default gets overridden. See the minima repo for the default files.

Changes:
- Link to the data privacy and imprint site in the footer, this is needed by german law. These sites are markdown files in the `docs` folder. The `_config.yml` is configured to only show the *about* link in the header, see `header_pages`.
- Additional script to the google analytics script to be able to opt out of tracking. The script is called in a link in the data privacy section.
- Template for the social icons is adapted to make the footer tighter.

## Comment System

For comments [giscus](https://giscus.app) is added. The setup is based on [this blogpost](https://lazyren.github.io/devlog/use-utterances-for-jekyll-comments.html).

For the setup:
- discussions got enabled in the github repo
- giscus got installed as a github plugin
- the giscus `<script>` got generated using their [website](https://giscus.app)
- the variables from the script got moved in the `_config.yaml` in a `comments` and `giscus` section
- the `_includes/comments.html` got added with the giscus script using the variables from the `_config.yaml`
- the `_sass/comments.scss` got added to configure the width of giscus.
- the default `_layouts/post.html` from the minama repo got added and a include of the `comments.html` was added.

## Domain Setup

I registered the domains fabianhertwig.com and fabianhertwig.de with google domains. 

For fabianhertwig.com I setup the DNS entries according to this guide, so first the apex domain and then as well the CNAME for the www subdomain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

For fabianhertwig.de I have setup a forward to the fabianhertwig.com domain.