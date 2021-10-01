studentname = [];
function submit()
{

    for (var j=1;j<=4;j++){

        var student=document.getElementById("name_of_the_student_"+j).value;
        console.log(student)
        studentname.push(student);


    }
    document.getElementById("display_name_with_commas").innerHTML=studentname;
    var remove_commas=studentname.join("")
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";



document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
studentname.sort()
document.getElementById("display_name_with_commas").innerHTML=studentname;
var remove_commas=studentname.join("")
document.getElementById("display_name_without_commas").innerHTML=remove_commas;


}
