//your JS code here. If required.
function daysOfAYear (year){
	if(year % 400 == 0)
		return 366;
	else if(year % 4 == 0 && year % 100 != 0)
		return 366;
	else{
		return 365;
	}
}
const year = prompt("Enter year here");
alert(daysOfAYear(year));

