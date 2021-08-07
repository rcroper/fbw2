
        mobilemenu = document.getElementById("mobile");
        menubtn = document.getElementById("mobilemenubtn");
        mobilemenu.style.right = "-300px";
        menubtn.onclick = function () {
            if(mobilemenu.style.right === "-300px"){
            
            mobilemenu.style.right = ("0");
            menubtn.style.color = "black";
        }

        
        else{
            mobilemenu.style.right = ("-300px");
            menubtn.style.color = "white";
        }
            
        }
        
       
   