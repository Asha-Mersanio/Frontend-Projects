
	function clearScreen(){
		document.getElementById('calc').value="";
	}
	function erase(){
		// console.log(document.getElementById('calc').value);
		var a = document.getElementById('calc').value;
		document.getElementById('calc').value = a.slice(0,-1);
	}
	function display(value){
		document.getElementById('calc').value+=value;
	}
	function calculate()
	{
	    var p=document.getElementById('calc').value;
	     
	    if((p.indexOf('+')) >= 0|| (p.indexOf('-')) >= 0 || (p.indexOf('*')) >= 0 || (p.indexOf('/')) >=0){
	    	console.log('true');
	     	var q=eval(p);
	        document.getElementById('calc').value+=('='+q);
	        var z=document.getElementById('calc').value;

	        // console.log(z);
	 	}
	    else{
             
	 	    var p=document.getElementById('calc').value;
	 	    var q=p.replace('√',"");
	 	    document.getElementById('calc').value=(Math.sqrt(q));
	 	    console.log(q);
	 	    console.log(Math.sqrt(q));
	 	    // document.getElementById('calc').value+=('='+ q );
	 	    var z=document.getElementById('calc').value;

	    }
	    const array= {"Result":z};
	 	// console.log(array);
	 	const data = JSON.stringify(array);
	 	// console.log(data);
	 	const xhr = new XMLHttpRequest();
	 	xhr.open("POST","data.php",true);
	 	xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhr.send(data);
		xhr.onreadystatechange = function () {
			console.log(xhr);
		    if(xhr.status === 200 && xhr.readyState == 4) {
		        console.log(xhr.responseText);
		    }
		}
	}
	function execute()
	{
	 	var a="The whole page is loaded";
	 	console.log(a);
	    var xhr=new XMLHttpRequest();
	    xhr.open("POST","2data.php",true)
	    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhr.send();
		xhr.onreadystatechange = function () {
		    if(xhr.status === 200 && xhr.readyState == 4) {
		        console.log(xhr.responseText);
		    }
		}
	}
	function ok()
	{
		var output=document.getElementById('res1').value;
		const answer={"ans":output};
		// console.log(answer);
		const value = JSON.stringify(answer);
	    // console.log(value);
	    const xhr = new XMLHttpRequest();
	 	xhr.open("POST","data3.php",true);
	 	xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhr.send(value);
		xhr.onreadystatechange = function () {
		    if(xhr.status === 200 && xhr.readyState == 4) {
		        document.getElementById('calc').value=(xhr.responseText)
		    }
		}
	}
	function Calculator(){
        var answer=document.getElementById('c').value;
		const value={"value":answer};
		const dat=JSON.stringify(value);
	 	const xhr = new XMLHttpRequest();
	 	xhr.open("POST","data4.php",true);
	 	xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		xhr.send(dat);
		 xhr.onreadystatechange = function () {
		 if(xhr.status === 200 && xhr.readyState == 4) {
		 	var a =(xhr.responseText);
            const mArray = a.split("=");

               document.getElementById('calc').value=(mArray[0]);

		   }
		}
	}
		   function Result()
		   {
	       const xhr = new XMLHttpRequest();
	 	   xhr.open("POST","data5.php",true);
	 	   xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
		   xhr.send();
		   xhr.onreadystatechange = function () {
		    if(xhr.status === 200 && xhr.readyState == 4) {
		        var a =(xhr.responseText);
                const mArray = a.split("=");

               document.getElementById('display').value=(mArray[1]);

		}
	}
}

