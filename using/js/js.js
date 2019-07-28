$("#customerBtn").click(
    function () {
        $("#customerpanel").css("display","inline");
        $("#dashboardpanal").css("display","none");
        $("#itempanel").css("display","none");
        $("#orderpanal").css("display","none");
        $("#reportpanal").css("display","none");
    }
)
$("#itembtn").click(
    function () {
        $("#itempanel").css("display","inline");
        $("#customerpanel").css("display","none");
        $("#dashboardpanal").css("display","none");
        $("#orderpanal").css("display","none");
        $("#reportpanal").css("display","none");
    }
)
$("#oredrbtn").click(
    function () {
        $("#customerpanel").css("display","none");
        $("#dashboardpanal").css("display","none");
        $("#itempanel").css("display","none");
        $("#orderpanal").css("display","inline");
        $("#reportpanal").css("display","none");
    }
)
$("#reportbtn").click(
    function () {
        $("#customerpanel").css("display","none");
        $("#dashboardpanal").css("display","none");
        $("#itempanel").css("display","none");
        $("#orderpanal").css("display","none");
        $("#reportpanal").css("display","inline");
    }
)
$("#dashboardbtn").click(
    function () {
        $("#customerpanel").css("display","none");
        $("#dashboardpanal").css("display","inline");
        $("#itempanel").css("display","none");
        $("#orderpanal").css("display","none");
        $("#reportpanal").css("display","none");
    }
)