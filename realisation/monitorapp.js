

$(document).ready(function(){
  var monitorsList,
      std = document.querySelector('.monitorsList');
  
  function getall() {
      std.innerHTML="";
  $.ajax({
      url:"api/getmonitors.php",
      method:"GET",
      success:function(data) {
      std.innerHTML = `   <tr>
            <th>Brand</th>
            <th>Size</th>
            <th>Price</th>
            <th>ID</th>
            <th>Update</th>
            <th>Delete</th>
            
          </tr>`
      console.log(data);
      monitorsList = JSON.parse(data);
      for (var i = 0; i < monitorsList.length; i++) {
          std.innerHTML +=`<tr idoftr='${monitorsList[i]["idmonitor"]}' >
          <td>${monitorsList[i]["Brand"]}</td>
          <td>${monitorsList[i]["size"]}</td>
          <td>${monitorsList[i]["price"]}</td>
          <td>${monitorsList[i]["idmonitor"]}</td>
          <td><a href="#form" class="btn bg-success edit " >update</a></td>
          <td><a href="#form" class="btn bg-danger delete">delete</a></td>
          </tr>`;
          
      }

      del()
      edit()
      }
  })
}
getall();

document.querySelector('.submit-exproduit').onclick = ()=>{

let name,
  type,
  prix;

name = document.querySelector('.monitorbrand').value;
type = document.querySelector('.monitorsize').value;
prix = document.querySelector('.monitorprice').value;

$.ajax({
 url : 'api/addmonitors.php',
 type : 'post',
 data : {
  Brand : name,
  size : type,
  price : prix
 },
 datatype: JSON,
 success: (data)=>{
  document.querySelector('.monitorbrand').value = ""
  document.querySelector('.monitorsize').value = ""
  document.querySelector('.monitorprice').value = ""
  getall()
 }

})

}


function del(){

document.querySelectorAll('.delete').forEach(element => {
  element.onclick = (e)=>{


      let deletedE = e.target;
      deletedE = deletedE.closest('tr')
      let deletedEID = deletedE.getAttribute("idoftr")
  
  console.log(deletedEID)
   
      $.ajax({
          url : 'api/deletemonitors.php',
          type : 'post',
          data : {
            sid : deletedEID
          },
          datatype: JSON,
          success: (data)=>{
              console.log(data)
           getall()
          }
   
      })
   
   }
});

}

function edit(){
document.querySelectorAll('.edit').forEach(element => {
  element.onclick = (e)=>{
    let deletedE
    let deletedEID
    let editBtn
    let cancelEditBtn
    let name
    let type
    let prix


    let editTitre
    let editType
    let editPrix


    


// 
deletedE= null
deletedEID=null
editBtn=null
cancelEditBtn=null
name=null
type=null
prix=null


editTitre=null
editType=null
editPrix=null






    deletedE = e.target;
    deletedE = deletedE.closest('tr')
    editTitre = deletedE.querySelectorAll('td')[0].textContent
    editType = deletedE.querySelectorAll('td')[1].textContent
    editPrix = deletedE.querySelectorAll('td')[2].textContent


    document.querySelector('.monitorbrand').value = editTitre
    document.querySelector('.monitorsize').value = editType
    document.querySelector('.monitorprice').value = editPrix

    console.log(editTitre)

    deletedEID = deletedE.getAttribute("idoftr")
    console.log(deletedEID)
    editBtn = document.querySelector('.edit-exproduit')
    cancelEditBtn = document.querySelector('.cancel-exproduit')
    document.getElementById("form-head").innerHTML = "Update product";
    editBtn.style = 'visibility: visible';
    cancelEditBtn.style = 'visibility: visible';
    document.querySelector('.submit-exproduit').style = 'display:none';
    


    editBtn.addEventListener('click',()=>{


      name = document.querySelector('.monitorbrand').value;
      type = document.querySelector('.monitorsize').value;
      prix = document.querySelector('.monitorprice').value;

        $.ajax({
            url : 'api/editmonitors.php',
            type : 'post',
            data : {
             sid : deletedEID,
             Brand : name,
             size : type,
             price : prix
            },
            datatype: JSON,
            success: (data)=>{
            console.log(data)

            document.querySelector('.monitorbrand').value = ""
            document.querySelector('.monitorsize').value = ""
            document.querySelector('.monitorprice').value = ""

            document.getElementById("form-head").innerHTML = "Add product";
            editBtn.style = 'display:none';
            cancelEditBtn.style = 'display:none';
            document.querySelector('.submit-exproduit').style = 'display:block';

            name = undefined;
            type = undefined
            prix = undefined
            deletedE = undefined
            deletedEID = undefined
            editBtn = undefined
            cancelEditBtn = undefined

            getall()
              }
       
          })
          
      }
      )

      cancelEditBtn.onclick = ()=>{

 
        document.querySelector('.monitorbrand').value = ""
        document.querySelector('.monitorsize').value = ""
        document.querySelector('.monitorprice').value = ""
        document.getElementById("form-head").innerHTML = "Add product";
               editBtn.style = 'display:none';
               cancelEditBtn.style = 'display:none';
               document.querySelector('.submit-exproduit').style = 'display:block';

               name = undefined;
               type = undefined
               prix = undefined
               deletedE = undefined
               deletedEID = undefined
               editBtn = undefined
               cancelEditBtn = undefined
      }

   
   }
});

}



})



