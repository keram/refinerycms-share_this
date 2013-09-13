# Refinery CMS ShareThis plugin

[ShareThis](http://sharethis.com/) - Social networks sharing platform integration for [Refinery CMS](http://refinerycms.com).

This version of `refinerycms-share_this` supports Rails 4.0.x.

## Requirements

Refinery CMS version 2.718.dev or above.
Acquired publisher id from [ShareThis](http://sharethis.com/).

## Install

Open up your ``Gemfile`` and add at the bottom this line:

```ruby
gem 'refinerycms-share_this', '~> 0.0.1'
```

Run ``bundle install``

Next, to install the ShareThis plugin run:

    rails generate refinery:share_this

Set in config/initializers/refinery/share_this.rb publisher id and another options

In your application templates in place where you want display comments put:

    <%= render partial: '/refinery/share_this/share_this' %>


## Donate

[Donations for development and support](http://keram.github.io/fundraising.html)
