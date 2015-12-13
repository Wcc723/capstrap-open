---
layout: pageGettingStarted
title: Getting Started
---

本框架是基於`Bootstrap` (currently {{ site.version }}) 之上，並額外增加許多元件，所以熟悉使用`Bootstrap`的開發者，在使用上會容易許多。然而我們也提供不同的方式，讓開發者可以快速使用**Capstrap**。

## 直接下載CSS

你可以直接透過連結下載已經編譯好的版本，這也是最簡單的方式。


<div class="row mbl">
  <div class="col-sm-4">
    <a href="{{ site.gitlab.repo }}/repository/archive.zip?ref=master
" class="btn btn-outline-primary btn-lg btn-block">下載整包CSS</a>
  </div>
  <div class="col-sm-4">
    <a href="{{ site.gitlab.repo }}/tree/master/source/dist
" class="btn btn-outline-primary btn-lg btn-block">在Gitlab上下載</a>
  </div>
</div>


下載後，你會看到以下的目錄，你只需要關心`source/dist`下的資料，其餘皆是原始文檔。


{% highlight txt %}
dist/
├── docs/
├── ng-capstrap/
└── source/
    └── dist/
        ├── capstrap/
        │   └── primer.css
        ├── capstrap_layout/
        │   └── portal.css
        └── fonts/
            ├── glyphicons-halflings-regular.eot
            ├── glyphicons-halflings-regular.svg
            ├── glyphicons-halflings-regular.ttf
            ├── glyphicons-halflings-regular.woff
            └── glyphicons-halflings-regular.woff2
{% endhighlight %}

`dist/`目錄下有兩個主要目錄`capstrap/`、`capstrap_layout/`，前者是完整的版本，後者是客製化版本，如`portal.css`就是屬於一般形象頁使用。

#### Icon fonts

另有提供Bootstrap的icon fonts可以下載，可以直接到將`fonts/`直接放置樣式表內即可。

#### Javascript

如果有需求可以直接下載Bootstrap的Javascript即可套用。


