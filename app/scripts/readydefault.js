$(document).ready(function () {
  document.body.addEventListener('touchstart', function () { /*...空函数即可*/
  });
  insertMainnav();
  insertToNav();
  //insertToContent();
  barcode();

  if ($(".g-nav >.mainnav").length > 0) {
    $(".g-nav >.mainnav li>.title").bind("click", function () {
      if ($(this).parent().hasClass("item-menu")) {
        $(this).parent().toggleClass("unfold");
      } else {
        $(".g-nav >.mainnav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
      }
    });
  }
  if ($(".u-menu-select").length > 0) {
    $(".u-menu-select li>.title").bind("click", function () {

      if ($(this).siblings("ul").length > 0) {
        $(this).parent().toggleClass("unfold");
      } else {
        //$(".u-menu-select").find(".active").removeClass("active");
        //$(this).parent().addClass("active");
      }
    });
  }

});


function barcode() {
  var $barcodeList = $("[data-toggle=barcode]");
  $barcodeList.html("");
  if ($barcodeList.length > 0) {
    for (var i = 0; i < $barcodeList.length; i++) {
      var $barcode = $barcodeList[i];
      var value = $($barcode).attr("data-barcode");
      var btype = "code128";
      var renderer = "css";
      var settings = {
        output: renderer,
        bgColor: "#FFFFFF",
        color: "#000000",
        barWidth: "1",
        barHeight: "15"
      };
      $($barcode).barcode(value, btype, settings);
    }
  }
}

function insertMainnav() {
  if ($(".g-nav > .mainnav").length > 0) {
    var $mainNav = $(".g-nav > .mainnav")[0];
    var insertMainnav =
      "<ul class='main-menu'>" +
      " <li class='item-menu '>" +
      "   <a class='title' href='javascript:void(0)'><span>pc端</span></a>" +
      "   <ul>" +
      "     <li><a class='title' href='#'><span>全站首页</span></a></li>" +
      "   </ul>" +
      " </li>" +
      " <li class='item-menu '>" +
      "   <a class='title' href='javascript:void(0)'><span>微信端</span></a>" +
      "  <ul>" +
      "   <li class='item-menu '>" +
      "     <a class='title' href='javascript:void(0)'><span>婚宴预订</span></a>" +
      "     <ul>" +
      "         <li><a class='title' href='#'><span>酒店列表</span></a></li>" +
      "         <li><a class='title' href='#'><span>顶部广告</span></a></li>" +
      "     </ul>" +
      " </li>" +
      "  </ul>" +
      " </li>" +
      " <li class='item-menu '>" +
      "   <a class='title' href='javascript:void(0)'><span>组件管理</span></a>" +
      "  <ul>" +
      "   <li class=' '>" +
      "     <a class='title' href='list-view.html'><span>列表</span></a>" +
      "   </li>" +
      "   <li class=' '>" +
      "     <a class='title' href='detail-view.html'><span>详情</span></a>" +
      "   </li>" +
      "  </ul>" +
      " </li>" +
      "</ul>";

    $(insertMainnav).prependTo($mainNav);
    var pathNmae = window.location.pathname;
    var fileName = pathNmae.substring(pathNmae.lastIndexOf('/') + 1, pathNmae.length);
    $($mainNav).find("li.active").removeClass("active");
    $($mainNav).find("li>.title[href='" + fileName + "']").parent().addClass("active");

    if ($($mainNav).find("li.active").length > 0) {
      var $active = $($mainNav).find("li.active")[0];
      $($active).parentsUntil(".main-menu").filter(".item-menu").addClass("unfold");
    }

  }
}

function insertToNav() {
  if ($(".g-nav > .topnav").length > 0) {
    var $topNav = $(".g-nav > .topnav")[0];
    var insertTopnav =
      "<div class='brand-box' onclick=\"$('.g-nav > .mainnav').toggleClass('switch-mainnav');$('.g-content').toggleClass('hide-nav');\">" +
      "   <a class='text' href='javascript:void(0)' " +
      "   >CMS管理系统</a>" +
      " </div>" +
      " <div class='nav-box'>" +
      "   <ul class='top-menu'>" +
      "     <li><a href='#'><i class='glyphicon glyphicon-user'></i><span>刘强</span></a></li>" +
      "     <li>" +
      "       <div class='dropdown'> " +
      "        <span class='dropdown-toggle' data-toggle='dropdown'>" +
      "           <i class='glyphicon glyphicon-map-marker'></i>" +
      "           <span>重庆</span>" +
      "           <span class='caret'></span>" +
      "        </span>" +
      "        <ul class='dropdown-menu'>" +
      "          <li class='active'><a href='#'>重庆</a></li>" +
      "          <li ><a href='#'>成都</a></li>" +
      "          <li ><a href='#'>杭州</a></li>" +
      "        </ul>" +
      "       </div>" +
      "     </li>"+
        //"     <li><a href='javascript:(0)' data-toggle='modal' data-target='#modPasswd'>修改密码</a></li>" +
      "     <li><a href='index.html' ><i class='glyphicon glyphicon-log-out'></i><span >退出</span></a></li>" +
      "   </ul>" +
      " </div>";
    $(insertTopnav).prependTo($topNav);
  }
}

function insertToContent() {
  if ($(".g-content > .m-view").length > 0) {
    var $Content = $(".g-content > .m-view")[0];
    var insertToContent;
    var modPasswd =
      "<div class='modal fade bs-example-modal-sm ' id='modPasswd' tabindex='-1' role='dialog'>" +
      "<div class='modal-dialog ' role='document'>" +
      "<div class='modal-content'>" +
      "<div class='modal-header'>" +
      "   <button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
      "     <span aria-hidden='true'>&times;</span>" +
      "   </button>" +
      "   <h4 class='modal-title' id='myModalLabel'>密码修改</h4>" +
      "</div>" +
      "<div class='modal-body'>" +
      "<div class='form-group'>" +
      "<div class='input-group '>" +
      "<div class='input-group-addon'>原密码</div>" +
      "<input type='password' class='form-control ' placeholder='请输入原密码'>" +
      "</div>" +
      "<div class='input-group '>" +
      "<div class='input-group-addon'>新密码</div>" +
      "<input type='password' class='form-control ' placeholder='请输入新密码'>" +
      "</div>" +
      "<div class='input-group '>" +
      "<div class='input-group-addon'>新密码</div>" +
      "<input type='password' class='form-control ' placeholder='请输入新密码'>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "<div class='modal-footer'>" +
      "<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>" +
      "<button type='button' class='btn btn-primary'>保存</button>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";

    insertToContent = modPasswd;
    $(insertToContent).prependTo($Content);
  }
}
