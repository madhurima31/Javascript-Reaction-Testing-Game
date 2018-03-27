var start_time = new Date().getTime();

function changeshapesizes(){

	var top = Math.random() *200;
	var left = Math.random() *500;
	
	var height = (Math.random()*200)+100;
    var width = (Math.random() * 200) + 100;


	document.getElementById("shape").style.backgroundColor = getRandomColor();
                
	document.getElementById("shape").style.height= height+"px";
	document.getElementById("shape").style.width= width+"px";
	document.getElementById("shape").style.left= left+"px";
	document.getElementById("shape").style.top= top+"px";
	

	if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    document.getElementById("shape").style.display = "block";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0";
                    document.getElementById("shape").style.display = "block";
                    
                }

	start_time = new Date().getTime();

}

 function getRandomColor() {
                
                var letters = '0123456789ABCDEF'.split('');
    
                var color = '#';
    
                for (var i = 0; i < 6; i++ ) {
        
                    color += letters[Math.floor(Math.random() * 16)];
    
                }
    
                return color;

            }



function delayTime(){

	                setTimeout(changeshapesizes, Math.random() * 1000);

}

	delayTime();
	document.getElementById("shape").onclick= function(){

		document.getElementById("shape").style.display = "none";

		var end_time =  new Date().getTime();
		var timeTaken = (end_time - start_time) / 1000;
                
        document.getElementById("timeTaken").innerHTML = timeTaken + "s";
		
		delayTime();


		
	}