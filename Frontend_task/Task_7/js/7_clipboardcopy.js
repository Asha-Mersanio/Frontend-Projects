function font()
	{   
		document.getElementById('input_text').style.fontSize="20px"; 

	}
	function textcopy()
	{
          var copyText = document.getElementById("input_text");
	      copyText.select();
	      copyText.setSelectionRange(0, 99999);
          navigator.clipboard.writeText(copyText.value);  
		  var tooltip = document.getElementById("tool").innerHTML="Copied";
		  console.log("dfazsdfsd");
    }