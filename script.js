//your JS code here. If required.
function daysOfAYear (year){
	if(year % 400 == 0)
		return 365;
	else if(year % 4 == 0 && year % 100 != 0)
		return 365;
	else{
		count<<366;
	}
}
const no_of_days = daysOfAYear(year);
console.log(no_of_days);

