$(document).ready(main);

function main(){

	var alarmClockFlag = false;
	f = new Date();
	// f.setHours(23);
	// f.setMinutes(10);
	// f.setSeconds(10);
	// alert(f);

	$("#rick-outer").click(function(){
		$("#rick-outer").hide();
		$("#rick-inner").text("");
	});

	$("#text").change(function(){
		var inputValue = $("#text").val();
		var time = inputValue.split(":");
		f.setHours(time[0]);
		f.setMinutes(time[1]);
		f.setSeconds(time[2]);
		alarmClockFlag = true;
		//if ((f- new Date())<100){alert("problem!!");}

		//let's set an alarm clock flag to true if this changes.
		//when the flag is false, the alarm clock code doesn't run
		//let's also have a button to set the flag to false, and let's default to false
		//let's split text on ":"; we should sanitize at some point.
		// if the effective date set is less than the current time (in ms),
		// let's assume the user means sometime tomorrow, and let's set the time
		//while also adding 1 day to the future date.
	});

	setInterval(function(){ 
			var d = new Date();
			console.log(d);


			var h=d.getHours();
			var m=d.getMinutes();
			var s=d.getSeconds();

			
			//swap backgroun color for odd and even minutes
			if(m%2==0){$("body").css("background-color", "white");}
			else {$("body").css("background-color", "black");}

			//every five minutes randomize the bg
			if(m%5==0 && s==0){
				var r=Math.floor(Math.random()*256);
				var g=Math.floor(Math.random()*256);
				var b=Math.floor(Math.random()*256);
				$("body").css("background-color", "rgba(" + r + "," + g + "," + b + ",1)");
			}

			//every hour change the clock face color
			if(m==59 && s==59){
				var array=["green", "limegreen", "purple", "orange"];
				var arrNum=Math.floor(Math.random()*array.length);
				$("#clock").css("color", array[arrNum]);
			 }

			 //if minutes or seconds are less than ten, we need to formate them nicely.	
			 if(m<10){m = "0" + m;}
			 if(s<10){s= "0"+s;}

		//build and display the clock
		var time = h + ":" + m + ":" + s;
		$("#clock").text(time);

		//get the difference between current and future time, in milliseconds. then format nicely.
		if (alarmClockFlag){
			var offset = f-d;
			if (offset<1000){
				$("#rick-outer").show();
				$("#rick-inner").append('<video height="100%" width="100%" autoplay><source src="video/rr.mp4" type="video/mp4"></video>');
				alarmClockFlag = false;
			}
			var humanReadableTime = msToTime(offset);
			$("#countdown").text(humanReadableTime);
		}


		}, 1000);
			

}

function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100);
	var seconds = parseInt((duration/1000)%60);
    var minutes = parseInt((duration/(1000*60))%60);
    var hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return "time left: " +hours + ":" + minutes + ":" + seconds;
}

