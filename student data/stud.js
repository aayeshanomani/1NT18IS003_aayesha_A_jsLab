var data=[];

function submitData(){
    
    var details = {};

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var usn = document.getElementById("usn").value;
    var age = document.getElementById("age").value;

    var year = document.getElementById("year").value;

    var res = document.getElementById("res");

    if(fname==''||lname==''||usn=='')
    {
        res.innerHTML = "Please fill the details";
    }

    else
    {
        res.innerHTML = "submitting...";
        console.log(year);
        for(var i = 0;i<data.length;i++)
        {
            if(data[i].usn == usn)
            {
                res.innerHTML = "Duplicate Entries are not allowed";
                return;
            }
        }
        details = {
            "fname": fname,
            "lname": lname,
            "usn": usn,
            "age": age,
            "year": year
        };
    
        data.push(details);
        
        res.innerHTML = "Submitted!"

        document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("usn").value = "";
   document.getElementById("age").value = "";
    }
}

function displayEntries(){
    var l = data.length;
    var allEnt = document.getElementById("allEnt");
    var form = document.getElementById("form");
    var disBut = document.getElementById("disBut");
    var movBut = document.getElementById("movBut");
    var subBut = document.getElementById("subBut");
    var s = "";
    for(var i =0;i<l;i++)
    {
        s = s+"<br>Entry "+(i+1)+"<br>"+"First Name: "+data[i].fname+"<br>"+"Last Name: "+data[i].lname+"<br>"+"USN: "+data[i].usn+"<br>"+"Age: "+data[i].age+"<br>"+"Year: "+data[i].year+"<br>";
    }
    allEnt.innerHTML=s;
    allEnt.style.visibility = "visible";
    form.style.visibility = "hidden";
    movBut.style.visibility = "visible";
    disBut.style.visibility = "hidden";
    subBut.style.visibility = "hidden";   
}

function displayForm(){
    var allEnt = document.getElementById("allEnt");
    var form = document.getElementById("form");
    var disBut = document.getElementById("disBut");
    var movBut = document.getElementById("movBut");
    var subBut = document.getElementById("subBut");
    allEnt.style.visibility = "hidden";
    form.style.visibility = "visible";
    disBut.style.visibility = "visible";
    movBut.style.visibility = "hidden";
    subBut.style.visibility = "hidden";
}