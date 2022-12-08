//Your JavaScript goes in here
function  showDiv(str)
{
	if(str == '1')
	{
		document.getElementById("part1Div").style.display = '';
		document.getElementById("part2Div").style.display = 'none';
		
		document.getElementById("help2").style.display = 'none';
		
		document.getElementById("help1").style.display = '';
	}
	else if(str == '2')
	{
		document.getElementById("part2Div").style.display = '';
		document.getElementById("part1Div").style.display = 'none';
		
		document.getElementById("help1").style.display = 'none';
		
		document.getElementById("help2").style.display = '';
		
	}
	
	
	
}
