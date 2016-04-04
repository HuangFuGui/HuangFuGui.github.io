<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Huangfugui.GitHub.io : ">
    
    <link rel="shortcut icon" href="images/headimg.png">
    <link rel="stylesheet" type="text/css" media="screen" href="stylesheets/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/animate.css">
    
    <script type="text/javascript" src="javascripts/jquery-2.0.0.min.js"></script>
    <script type="text/javascript" src="javascripts/bootstrap.js"></script>
    <script type="text/javascript" src="javascripts/allPages.js"></script>
    <script type="text/javascript" src="javascripts/assignment.js"></script>
    
    <link rel="stylesheet" type="text/css" href="stylesheets/monokai_sublime.min.css">
	<script type="text/javascript" src="javascripts/highlight.min.js"></script>
	<script>hljs.initHighlightingOnLoad();</script>

    <title>Assignment</title>

    <title>Huangfugui.GitHub.io</title>

  </head>

<body>
  <div id="headercontainer" style="background-image:url(images/bg.jpg)">
     <div class="inner" id="header"> 
         <div id="navigation_bar">
              <div id="nav_bar_a1">
                <a href="index.html">My website</a>
             </div>
             <div id="nav_bar_ul"> 
                <a href="blogIndex.html">Blogs</a>
                <a href="About Me.html">About me</a>
                <a href="https://github.com/HuangFuGui">My github</a>  
             </div>
         </div>
         <span class="animated zoomIn">Huangfugui.GitHub.io</span>
         <span class="animated zoomIn">Weekly assignment</span>
         <span class="animated zoomIn">这一生，想做一名浪漫极客</span>
    </div>
   </div>
   
       <div class="inner" id="assignmentDiv">
     
      <blockquote><p>The website is not completed and will be updated anytime.</p></blockquote>

      <button type="button" class="btn  btn-primary"  data-toggle="modal" data-target="#checkPermission"><img src="images/iconfont-qizhi.png">I am Russell.H</button><br /><br />
      
      <div class="modal fade" id="checkPermission" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Input certification</h4>
                </div>
    
                <div class="modal-body">
                    <div class="container-fluid">
                    <br />
                        <div class="input-group">
                          <span class="input-group-addon" id="sizing-addon2">go!</span>
                          <input type="text" class="form-control" placeholder="To be a geek" aria-describedby="sizing-addon2">
                        </div>
                    <br />
                    </div>
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" style="margin-left:30px; width:80px;" data-dismiss="modal" onClick="getPermission()">Confirm</button>
                </div>
    
            </div>
        </div>
     </div>
     
     <div class="modal fade" id="addAssignment" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Add assignment</h4>
                </div>
    
                <div class="modal-body">
                    <div class="container-fluid">

                    
    				<div class="input-group" style="float:left;">
                      <span class="input-group-addon" id="sizing-addon2">from</span>
                      <input type="date" id="startdate" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
					</div>
                    <div class="input-group" style="float:right;">
                      <span class="input-group-addon" id="sizing-addon2">to</span>
                      <input type="date" id="enddate" class="form-control" placeholder="Username" aria-describedby="sizing-addon2">
					</div>
                    
                    
                    
                    
                    <div class="input-group" id="assignmentValue">
                      <span class="input-group-addon" id="sizing-addon2"><img style="width:20px;" src="images/iconfont-assignment.png"></span>
                      <input type="text" id="assignment" class="form-control" placeholder="assignment" aria-describedby="sizing-addon2">
                    </div>
                    
                    </div>    
                </div>
    
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" style="margin-left:30px; width:80px;" data-dismiss="modal" onClick="addAssignment()">Confirm</button>
                </div>
    
            </div>
        </div>
     </div>
     
     
     <div id="assignmentDivInside">
     </div>

     <button class="btn btn-block" id="addAssignmentButton" style="margin-top:90px;"  data-toggle="modal" data-target="#addAssignment">添加任务</button>
 
     <br /><br /><br />
     <nav>
      <ul class="pager">
        <li class="previous" id="pager1"><a onClick="upPage()"><span aria-hidden="true">&larr;</span> Last week</a></li>
        <li class="next" id="pager2"><a onClick="nextPage()">Next week <span aria-hidden="true">&rarr;</span></a></li>
      </ul>
    </nav>
      
      <br />


      
      <br /><br /><hr/>
    <p id="footer_p">
                    Copyright &copy; Huangfugui 2016
                    <br>
                    Theme © <a href="http://HuangFuGui.github.io">blog website</a> | <a href="https://github.com/HuangFuGui/HuangFuGui.github.io"> Star me</a>
    </p>
    </div>
</body>
</html>
