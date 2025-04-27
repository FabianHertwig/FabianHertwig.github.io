# Fabian Hertwig's Blog

<https://fabianhertwig.com>

This is the repository for my blog. It is setup with jekyll and github pages.

## Local setup

Install Ruby, best with [rbenv](https://github.com/rbenv/rbenv). Check the latest stable version here: https://jekyllrb.com/docs/installation/macos/ (currently 3.1.3)

    rbenv install 3.1.3
    rbenv local 3.1.3

Install Bundler.    

    gem install bundler

Run

    cd docs
    bundle install
    bundle exec jekyll serve --drafts

# Start from scratch

This blog is based on github pages and jekyll, checkout the guide here: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll

It uses the  [minimal mistakes theme](https://mmistakes.github.io/minimal-mistakes/)

Changes:
- Link to the data privacy and imprint site in the footer, this is needed by german law. These sites are markdown files in the `pages` folder. 
- The `data/navigation.yml` is configured to only show the *posts* and *about* link in the header.
- Cookie consent banner. The banner got generated with [Osano](https://www.osano.com/cookieconsent/download/). The scripts for the banner are in the `_includes/custom.html` file and `assets/scripts/js/cookie-consent.js` file. 

## Comment System

For comments [giscus](https://giscus.app) is added. The setup is based on [this blogpost](https://lazyren.github.io/devlog/use-utterances-for-jekyll-comments.html).

For the setup:
- discussions got enabled in the github repo
- giscus got installed as a github plugin
- the variables from the script got moved in the `_config.yaml` in a `comments` and `giscus` section

## Domain Setup

I registered the domains fabianhertwig.com and fabianhertwig.de with google domains. 

For fabianhertwig.com I setup the DNS entries according to this guide, so first the apex domain and then as well the CNAME for the www subdomain: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

For fabianhertwig.de I have setup a forward to the fabianhertwig.com domain.

# Hints for posts

## How to inlcude a youtube video

    {% include video id="L-s_3b5fRd8?start=1385" provider="youtube" %}
