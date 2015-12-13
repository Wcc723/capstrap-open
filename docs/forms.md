---
layout: page
title: Forms
---

While reference [http://getbootstrap.com/css/#forms](http://getbootstrap.com/css/#forms).


<div class="alert alert-warning">
  <strong>Heads up!</strong> Forms need some reworking to clean up the specificity and required markup. We'll get to that soon!
</div>

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overview


## Example form

{% example html %}
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>
{% endexample %}

## form-inline

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
  </div>
  <button type="submit" class="btn btn-default">Send invitation</button>
</form>
{% endexample %}

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
      <div class="input-group-addon">.00</div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Transfer cash</button>
</form>
{% endexample %}

## Underline style

{% example html %}
<form class="cs-example">
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control form-control-underline" id="exampleInputEmail1" placeholder="Enter email">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control form-control-underline" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox"> Check me out
        </label>
    </div>
        <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}


## Horizontal form



{% example html %}
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in</button>
    </div>
  </div>
</form>
{% endexample %}

## Static control

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only">Email</label>
    <p class="form-control-static">email@example.com</p>
  </div>
  <div class="form-group">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-default">Confirm identity</button>
</form>
{% endexample %}

## States

### Disabled

{% example html %}
<form class="cs-example">
    <input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled="">

    <fieldset disabled="">
        <div class="checkbox">
            <label>
                <input type="checkbox"> Can't check this
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </fieldset>
</form>
{% endexample %}

### readonly

{% example html %}
<input class="form-control" type="text" placeholder="Readonly input here…" readonly="">
{% endexample %}

## Validation states

{% example html %}
<form class="">
    <div class="form-group has-success">
        <label class="control-label" for="inputSuccess1">Input with success</label>
        <input type="text" class="form-control" id="inputSuccess1">
    </div>
    <div class="form-group has-warning">
        <label class="control-label" for="inputWarning1">Input with warning</label>
        <input type="text" class="form-control" id="inputWarning1">
    </div>
    <div class="form-group has-error">
        <label class="control-label" for="inputError1">Input with error</label>
        <input type="text" class="form-control" id="inputError1">
    </div>
    <div class="has-success">
        <div class="checkbox">
            <label>
                <input type="checkbox" id="checkboxSuccess" value="option1">
                Checkbox with success
            </label>
        </div>
    </div>
    <div class="has-warning">
        <div class="checkbox">
            <label>
                <input type="checkbox" id="checkboxWarning" value="option1">
                Checkbox with warning
            </label>
        </div>
    </div>
    <div class="has-error">
        <div class="checkbox">
            <label>
                <input type="checkbox" id="checkboxError" value="option1">
                Checkbox with error
            </label>
        </div>
    </div>
</form>
{% endexample %}


## Help text

{% example html %}
<label class="sr-only" for="inputHelpBlock">Input with help text</label>
<input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
<span id="helpBlock" class="help-block">A block of help text that breaks onto a new line and may extend beyond one line.</span>
{% endexample %}
