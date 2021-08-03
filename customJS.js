function compute()
  {  var x=document.getElementById("name").value;
     var y=document.getElementById("rollno").value;
	 if(x==""||y=="")
	   {alert("fill all the fields !!!");}
    else
    { 
      var x = document.getElementById("frm");
      var sum =0;
      var i;
      for (i = 4; i < x.length-3;i++)
		  {
	         sum +=parseInt( x.elements[i].value);
          }
	  var perc=sum/5;
	  var grade=((perc>=85)?"A":((perc>=75)?"B":((perc>=65)?"C":((perc>=55)?"D":((perc>=45)?"E":"F")))));
      document.getElementById("demo").innerHTML="TOTAL MARKS = " + sum + "<br>" +"PERCENTAGE = " + perc +"<br>"+"GRADE = "+grade+"<hr>";
    }  
  }
function edit(x)
  {
	document.getElementById("demo").innerHTML="";
    i=x.parentNode.parentNode.rowIndex;
	document.getElementById("name").value=document.getElementById("data").rows[i].cells[0].innerHTML;
	document.getElementById("rollno").value=document.getElementById("data").rows[i].cells[1].innerHTML;
	document.getElementById("branch").value=document.getElementById("data").rows[i].cells[2].innerHTML;
	document.getElementById("data").deleteRow(i);
  }
  
function add()
  {  
   
     var x=document.getElementById("name").value;
     var y=document.getElementById("rollno").value;
	 if(x==""||y=="")
	 {alert("fill all the fields !!!");}
     else
        {   
	       document.getElementById("demo").innerHTML=""
	       var x=document.getElementById("data");
           var row=x.insertRow(1);
	       cell1=row.insertCell(0);
	       cell2=row.insertCell(1);
	       cell3=row.insertCell(2);
	       cell4=row.insertCell(3);
	       cell5=row.insertCell(4);
	       cell6=row.insertCell(5);
	       cell7=row.insertCell(6);
		 
	       var x = document.getElementById("frm");
           var sum =0;
           var i;
           for (i = 4; i < x.length-3;i++) 
	          {
	             sum +=parseInt( x.elements[i].value);
              }
	       var perc=sum/5;
           var grade=((perc>=85)?"A":((perc>=75)?"B":((perc>=65)?"C":((perc>=55)?"D":((perc>=45)?"E":"F")))));
              cell1.innerHTML=document.getElementById("name").value;
	          cell2.innerHTML=document.getElementById("rollno").value;
	          cell3.innerHTML=document.getElementById("branch").value;
	          cell4.innerHTML=sum;
	          cell5.innerHTML=perc;
	          cell6.innerHTML=grade;
	          cell7.innerHTML="<input type='button' value='Edit' onclick='edit(this)'><input type='button' value='Delete'  onclick='del(this)'>"
        }
   }
function del(x)
   {   
      if(confirm("Do you want to delete this data"))
	    {
	       i=x.parentNode.parentNode.rowIndex;
           document.getElementById("data").deleteRow(i);
		}
	
    }