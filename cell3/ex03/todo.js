var cont;

function new_todo (){
	let answer = prompt("Add new task");
	let li = document.createElement("li");
	let btn = document.createElement("button");
	if(answer != "")
	{
		li.textContent = answer;
		btn.textContent = "Delete TODO";
		btn.id = "btn_" + cont;
		li.id = "todo_" + cont;
        setCookie(li.id, li.textContent, 60);
		btn.addEventListener("click", function() {
			let res = confirm("Are you sure?");
			console.log(res);
			if(res === true)
			{
				document.getElementById("TODO").removeChild(li);
				document.getElementById("TODO").removeChild(btn);
                deleteCookie("todo_" + cont);
			}
			})
		cont++;
		document.getElementById("TODO").appendChild(li, btn);
		document.getElementById("TODO").prepend(li, btn);	
	}
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() - (60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=;" + expires + ";path=/";
}

function checkCookie() {
    var count = document.cookie.split(";").length;
    let co = 0;
    console.log(count);
    for(cont = 0; co < count; cont++){
        if(getCookie("todo_" + cont)){
                let li = document.createElement("li");
            let btn = document.createElement("button");
            li.id = "todo_"+ cont;
            li.textContent = getCookie(li.id);
            btn.id = "btn" + cont;
            btn.textContent = "Delete TODO";
            btn.addEventListener("click", function() {
                let res = confirm("Are you sure?");
                if(res === true)
                {
                    document.getElementById("TODO").removeChild(li);
                    document.getElementById("TODO").removeChild(btn);
                    deleteCookie(li.id);
                }
                })
            document.getElementById("TODO").appendChild(li, btn);
            document.getElementById("TODO").prepend(li, btn);
            co++;
        }
    }
}