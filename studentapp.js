$(document).ready(function(){
var studentsList;
function getall() {
  $(".studentsList").html(" ");
  $.ajax({
    url:"/api/getStudents.php",
    method:"GET",
    success:function(data) {
      studentsList = JSON.parse(data);
      console.log(studentsList);
      for (var i = 0; i < studentsList.length; i++) {
        $(".studentsList").append('<li><h2>'+"ID: "+studentsList[i]["idmonitor"]+'</h2><h3>'+"size: "+studentsList[i]["size"]+'</h3></li>');
      }
    }
  })
}
getall();
})
