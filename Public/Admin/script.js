var emptyRow2 = "<tr><td colspan='4' class='text-center'> No Records Available</td></tr>";
var emp2 = "<tr class='trNewRow'>"; 
emp2 = emp2 + "    <td class='tdName2'>";
emp2 = emp2 + "        <input type='text' class='form-control txtName2' placeholder='Enter Name'/>";
emp2 = emp2 + "    </td>";
emp2 = emp2 + "    <td class='tdarea'>";
emp2 = emp2 + "        <input type='text' class='form-control txtarea' placeholder='Enter Area'/>";
emp2 = emp2 + "    </td>";


emp2 = emp2 + "    <td class='tdcrime'>";
emp2 = emp2 + "        <input type='text' class='form-control txtcrime' placeholder='Enter Crime'/>";
emp2 = emp2 + "    </td>";
emp2 = emp2 + "    <td class='tdAction2'>";
emp2 = emp2 + "        <button class='btn btn-sm btn-success btn-save2'> Save</button>";
emp2 = emp2 + "        <button class='btn btn-sm btn-success btn-cancel2'> Cancel</button>";
emp2 = emp2 + "    </td>";
emp2 = emp2 + "</tr>";

var rowButtons2 ="<button class='btn btn-success btn-sm btn-edit2' > Edit </button>  <button class='btn btn-danger btn-sm' > Delete </button> ";
var rowUpdateButtons2 ="<button class='btn btn-success btn-sm btn-save2' > Update </button>  <button class='btn btn-danger btn-sm btn-save2' > Cancel </button> ";

$(document).ready(function () {
    debugger;
    $("#tblData2 tbody").append(emptyRow2); // adding empty row on page load 
    
    $("#btnAdd2").click(function () { 
        debugger;
        if ($("#tblData2 tbody").children().children().length == 1) {
            $("#tblData2 tbody").html("");
        }
        debugger;
        $("#tblData2 tbody").append(emp2); // appending dynamic string to table tbody
    });
    
    $('#tblData2').on('click', '.btn-save2', function () {
        const Usernamee =  $(this).parent().parent().find(".txtName2").val();
        $(this).parent().parent().find(".tdName2").html(""+Usernamee+""); 
        const Namee =  $(this).parent().parent().find(".txtarea").val();
        $(this).parent().parent().find(".tdarea").html(""+Namee+"");
        // const Add =  $(this).parent().parent().find(".txtadd").val();
        // $(this).parent().parent().find(".tdadd").html(""+Add+"");
        const Phonee =  $(this).parent().parent().find(".txtcrime").val();
        $(this).parent().parent().find(".tdcrime").html(""+Phonee+"");
        $(this).parent().parent().find(".tdAction2").html(rowButtons2);
    });
     
    
    $('#tblData2').on('click', '.btn-danger', function () { // registering function for delete button  
        $(this).parent().parent().remove();
        if ($("#tblData2 tbody").children().children().length == 0) {
            $("#tblData2 tbody").append(emptyRow2);
        }
    });
    

    $('#tblData2').on('click', '.btn-cancel2', function () { 
        $(this).parent().parent().remove();
    });
    $('#tblData2').on('click', '.btn-edit2', function () { 
        const Username =$(this).parent().parent().find(".tdName2").html();

        $(this).parent().parent().find(".tdName2").html("<input type='text' value='"+Username+"' class='form-control txtName2' placeholder='Enter Username'/>"); 


        const Name =$(this).parent().parent().find(".tdarea").html();

        $(this).parent().parent().find(".tdarea").html("<input type='text' value='"+Name+"' class='form-control txtarea' placeholder='Enter Name'/>"); 
        // const Add =$(this).parent().parent().find(".tdadd").html();

        // $(this).parent().parent().find(".tdadd").html("<input type='text' value='"+Add+"' class='form-control txtadd' placeholder='Enter Address'/>"); 


        const Phone =$(this).parent().parent().find(".tdcrime").html();

        $(this).parent().parent().find(".tdcrime").html("<input type='text' value='"+Phone+"' class='form-control txtcrime' placeholder='Enter Phone no.'/>"); 
        $(this).parent().parent().find(".tdAction2").html(rowUpdateButtons2);
        
    });
});
