---
layout: pageGettingStarted
title: Use Bower
---

本框架是基於`Bootstrap` (currently {{ site.version }}) 之上，並額外增加許多元件，所以熟悉使用`Bootstrap`的開發者，在使用上會容易許多。然而我們也提供不同的方式，讓開發者可以快速使用**Capstrap**。

## 透過Bower 安裝

你希望可以自己管理`capstrap`的版本，那你可以透過bower 來安裝，這也是我們所推薦的方式，指令如下。

{% highlight shell %}
bower install {{ site.gitlab.repo }}.git#
{% endhighlight %}

不過注意，這需要在 **富鴻網** 下才能夠使用。

#### 自行編譯 sass

如果有編譯的需求，我們推薦使用`gulp` + `compass`，而相關的範例已經放在以下目錄。

{% highlight txt %}
dist/
├── docs/
├── ng-capstrap/
└── source/
    ├── config.rb.example
    └── gulpfile.js.example

{% endhighlight %}

請將`config.rb.example`後方的example移除，並將內部的`additional_import_paths`換成bower的路徑。

再將`gulpfile.js.example`的compass task修改成您目前的sass目錄。*(注意：使用gulp 請安裝相依node package)*


