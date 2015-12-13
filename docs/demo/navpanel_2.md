---
layout:
title: Demo
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="{{ site.baseurl }}/css/primer.css">
</head>
<body class="has-navpanel-fixed has-navbar-fixed navpanel-is-top">

<nav class="navbar navbar-dafault main-nav navbar-fixed-top">
  <a href="#" class="navbar-navpanel hide-navpanel-btn"><i class="glyphicon glyphicon-menu-hamburger"></i><span></span></a>
  <div class="navbar-header"><a href="#" class="navbar-brand">  Capstrap 2</a></div>
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Demo</a></li>
        <li><a href="#">Link</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Back</a></li>
      </ul>
    </div>
  </div>
</nav>

<nav class="navpanel navpanel-fixed-left">
  <div class="navpanel-container navpanel-flex navpanel-inverse">
      <header style="background: url('/images/header.jpg'); height: 150px;background-size: cover" class="navpanel-header navpanel-text"></header>
      <div class="navpanel-body">
        <h5 class="navpanel-title"><span class="navpanel-text">Basic Demo</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="active">
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-home"></i>
            <span class="navpanel-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
        </ul>
        <h5 class="navpanel-title"><span class="navpanel-text">Multi Level</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="">
            <a><i class="navpanel-icon glyphicon glyphicon-plus"></i>
            <span class="navpanel-text">Level 1</span></a>
            <ul class="nav">
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
            </ul>
          </li>
          <li class="">
            <a ><i class="navpanel-icon glyphicon glyphicon-plus"></i>
            <span class="navpanel-text">Level 1</span></a>
            <ul class="nav">
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
            </ul>
          </li>
        </ul>
      </div>
      <footer class="navpanel-footer">
          <div class="text-muted clearfix text-right">
              <span class="navpanel-text pull-left">Footer text</span>
              <div class="dropdown dropup inline-block">
                  <a href="#" data-toggle="dropdown" class="dropdown-toggle"><i class="navpanel-icon glyphicon glyphicon-th-large"></i></a>
                  <ul class="dropdown-menu">
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">Setting</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Log out</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  </div>
</nav>
</body>
</html>


