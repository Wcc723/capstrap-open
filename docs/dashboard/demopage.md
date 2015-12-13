---
layout: dashboard
title: Demo page
---


<div class="row">
  <ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Demo</a></li>
    <li class="active">Demo</li>
  </ol>
</div>
<div class="clearfix">
  <div class="col-md-6 portlet-col">
    <div class="panel panel-default">
      <div class="panel-heading">
        C3 js
      </div>
      <div class="panel-body">
        <div id="c3-demo-2"></div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        C3 js
      </div>
      <div class="panel-body">
        <div id="c3-demo-3"></div>
      </div>
    </div>
  </div>
  <div class="col-md-6 portlet-col">
    <div class="panel panel-default">
      <div class="panel-heading">
        Form
      </div>
      <div class="panel-body">
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
          <button type="submit" class="btn btn-outline-default">Submit</button>
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        Table
      </div>
      <div class="panel-body">
        <table class="table">
          <caption>Optional table caption.</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <div class="text-right">
          <button class="btn btn-outline-danger">
            Remove
          </button>
          <button class="btn btn-outline-default" data-toggle="modal" data-target="#myModal">
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<hr>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h3 class="modal-title" id="myModalLabel">Modal title</h3>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" value="demo@gmail.com">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<script>
$(function() {
  $( ".portlet-col" ).sortable({
    connectWith: ".portlet-col",
    handle: ".panel-heading",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $( ".portlet-toggle" ).click(function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });
});

var chart3 = c3.generate({
    bindto: '#c3-demo-3',
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});

setTimeout(function () {
    chart3.load({
        columns: [
            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
            ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
        ]
    });
}, 1500);

setTimeout(function () {
    chart3.unload({
        ids: 'data1'
    });
    chart3.unload({
        ids: 'data2'
    });
}, 2500);

var chart = c3.generate({
    bindto: '#c3-demo-2',
    data: {
        columns: [
            ['data1', -30, 200, 200, 400, -150, 250],
            ['data2', 130, 100, -100, 200, -150, 50],
            ['data3', -230, 200, 200, -300, 250, 250]
        ],
        type: 'bar',
        groups: [
            ['data1', 'data2']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    }
});

setTimeout(function () {
    chart.groups([['data1', 'data2', 'data3']])
}, 1000);

setTimeout(function () {
    chart.load({
        columns: [['data4', 100, -50, 150, 200, -300, -100]]
    });
}, 1500);

setTimeout(function () {
    chart.groups([['data1', 'data2', 'data3', 'data4']])
}, 2000);
</script>
