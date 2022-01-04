# Fabian Hertwig's Blog

<https://fabian.hertwig.github.io>

This is the repository for my blog. It is setup with jekyll and github pages.

## Local setup

Install Ruby. For more information, see "[Installing Ruby](https://www.ruby-lang.org/en/documentation/installation/)" in the Ruby documentation.
Install Bundler. For more information, see "[Bundler](https://bundler.io/)".

Run

    cd docs
    bundle install
    bundle exec jekyll serve

# Start from scratch

This blog is based on gihub pages and jeckyll, checkout the guide here: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll

It uses the default [minima theme](https://github.com/jekyll/minima) but there are some customizations to the templates in the `_includes` folder. When you add a file there, then the default gets overridden. See the minima repo for the default files.

Changes:
- Link to the data privacy and imprint site in the footer, this is needed by german law. These sites are markdown files in the `docs` folder. The `_config.yml` is configured to only show the *about* link in the header, see `header_pages`.
- Additional script to the google analytics script to be able to opt out of tracking. The script is called in a link in the data privacy section.
- Template for the social icons is adapted to make the footer tighter.