/*-Lab:exp_6_Part1_comparator
	File name: exp6p1.html
    Author:Sukriti Dhang*/

var dec_valueA=0,dec_valueB=0;
var dec_compare;
var tabrowindex = 1;
var arr = [];
var table;
var Ainp3=0, Ainp2=0, Ainp1=0, Ainp0=0; 
var Binp3=0, Binp2=0, Binp1=0, Binp0=0;


function ledchng(){

    var image1 = document.getElementById('b1');		/*	GND  */
    var image2 = document.getElementById('b2');		/* (A>B)in	  */
    var image3 = document.getElementById('b3');		/*	(A=B)in  */
    var image4 = document.getElementById('b4');		/*	(A<B)in  */
    var image5 = document.getElementById('b5'); 	/*  B3 */
    var image6 = document.getElementById('b6'); 	/*  VCC */
    var image7 = document.getElementById('b7'); 	/*  A3 */
    var image8 = document.getElementById('b8'); 	/*	B2  */
    var image9 = document.getElementById('b9');  	/*  A2 */
    var image10 = document.getElementById('b10');   /*  A1 */
    var image11 = document.getElementById('b11');	/*	B1  */
	var image12 = document.getElementById('b12');	/*	A0  */
	var image13 = document.getElementById('b13');	/*	B0  */
	

/*validation of vcc and gnd */
if(image1.src.match("on") ){
    document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
document.getElementById("showalt").style.visibility = 'visible';
document.getElementById("msg").style.color="red";
}

else if(image6.src.match("on") && image1.src.match("on")){
        document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
        document.getElementById("showalt").style.visibility = 'visible';
		document.getElementById("msg").style.color="red";
       
    }
    
      else  if(image1.src.match("off") && image6.src.match("on") ){
            document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="green";
            generate8bitbinary();
		    decA_compare_decB();
        }
       
        else if(image6.src.match("on") ){
            document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="green";
            generate8bitbinary();
            decA_compare_decB();
        }
		else if(image6.src.match("off") ){
            document.getElementById("msg").innerHTML = 'Please connect VCC  properly';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="red";
           
        }
        else if (image6.src.match("off")&&(image5.src.match("on")||image7.src.match("on")||image8.src.match("on")||image9.src.match("on")||image10.src.match("on")||image11.src.match("on")||image12.src.match("on")||image13.src.match("on"))){
            document.getElementById("msg").innerHTML = 'Please connect VCC  properly';
            document.getElementById("showalt").style.visibility = 'visible';
			document.getElementById("msg").style.color="red";
           
        }
         
        else{
           
            document.getElementById("showalt").style.visibility = 'hidden';
            document.getElementById("ledonup").style.visibility = 'hidden';
		document.getElementById("ledonmiddle").src="ledon1.png";
		document.getElementById("ledonmiddle").style.visibility = 'hidden';
        document.getElementById("ledonbottom").src="ledon2.png";
		document.getElementById("ledonbottom").style.visibility = 'hidden';
             }
  
  
  
  
	
	
		
 /*ledchng ends here*/
}


/*switch on off*/

function a1() {
    var image = document.getElementById('b1');	

    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b1r').style.display="none";
    document.getElementById('b1g').style.display="block";

   
    } 
else
{
    image.src = "off.png";
    document.getElementById('b1r').style.display="block";
    document.getElementById('b1g').style.display="none";
  
    }
ledchng();
}
function a2() {
    var image = document.getElementById('b2');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b2r').style.display="none";
    document.getElementById('b2g').style.display="block";
  	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b2r').style.display="block";
    document.getElementById('b2g').style.display="none";
   
    }
    ledchng();
}
function a3() {
    var image = document.getElementById('b3');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b3r').style.display="none";
    document.getElementById('b3g').style.display="block";
  	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
    
    }
    ledchng();
}
function a4() {
    var image = document.getElementById('b4');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b4r').style.display="none";
    document.getElementById('b4g').style.display="block";
    	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b4r').style.display="block";
    document.getElementById('b4g').style.display="none";
   
    }
    ledchng();
}

function a5() {
    var image = document.getElementById('b5');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b5r').style.display="none";
    document.getElementById('b5g').style.display="block";
    Binp3=1	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
    Binp3=0;
    }
    ledchng();
}
function a6() {
    var image = document.getElementById('b6');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b6r').style.display="none";
    document.getElementById('b6g').style.display="block";
    	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
   
    }
    ledchng();
}
function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    Ainp3=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    Ainp3=0;
    }
    ledchng();
}
function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
   Binp2=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
    Binp2=0;
    }
    ledchng();
}
function a9() {
    var image = document.getElementById('b9');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b9r').style.display="none";
    document.getElementById('b9g').style.display="block";
    Ainp2=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b9r').style.display="block";
    document.getElementById('b9g').style.display="none";
    Ainp2=0;
    }
    ledchng();
}
function a10() {
    var image = document.getElementById('b10');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b10r').style.display="none";
    document.getElementById('b10g').style.display="block";
	Ainp1=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b10r').style.display="block";
    document.getElementById('b10g').style.display="none";
	Ainp1=0;
    }
    ledchng();
}
function a11() {
    var image = document.getElementById('b11');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b11r').style.display="none";
    document.getElementById('b11g').style.display="block";
	Binp1=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b11r').style.display="block";
    document.getElementById('b11g').style.display="none";
    Binp1=0;
    }
    ledchng();
}
function a12() {
    var image = document.getElementById('b12');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b12r').style.display="none";
    document.getElementById('b12g').style.display="block";
	Ainp0=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b12r').style.display="block";
    document.getElementById('b12g').style.display="none";
    Ainp0=0;
    }
    ledchng();
}
function a13() {
    var image = document.getElementById('b13');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b13r').style.display="none";
    document.getElementById('b13g').style.display="block";
	Ainp0=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b13r').style.display="block";
    document.getElementById('b13g').style.display="none";
    Ainp0=0;
    }
    ledchng();
}


/*generate 4bit input A and B combination*/
function generate8bitbinary(){
    var A=[];
    var B=[];
     A.push(Ainp3,Ainp2,Ainp1,Ainp0);
     B.push(Binp3,Binp2,Binp1,Binp0);
     var binpA= A.join("");
     var binpB= B.join("");
     document.getElementById("binaryinpA").value=binpA;
     document.getElementById("binaryinpB").value=binpB;
     binarytodecimal_A();
     binarytodecimal_B();
}




/* binary to decimal conversion*/

function binarytodecimal_A(){
	var bstrA=document.getElementById("binaryinpA").value;
	function bin_to_dec(bstrA) { 
    return parseInt((bstrA + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valueA=bin_to_dec(bstrA);
	//alert(dec_valueA);
	//document.getElementById("decimalinp").value=dec_value;
}

function binarytodecimal_B(){
	var bstrB=document.getElementById("binaryinpB").value;
	function bin_to_dec(bstrB) { 
    return parseInt((bstrB + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_valueB=bin_to_dec(bstrB);
	//alert(dec_valueB);
	//document.getElementById("decimalinp").value=dec_value;
}
/*compare two decimal value*/
function decA_compare_decB(){
	if(dec_valueA == dec_valueB){
		document.getElementById("ledonmiddle").src="ledon1.png";
		document.getElementById("ledonmiddle").style.visibility = 'visible';
		dec_compare='001';
	}
	else{
		document.getElementById("ledonmiddle").src="ledon1.png";
		document.getElementById("ledonmiddle").style.visibility = 'hidden';
	}
	 if(dec_valueA>dec_valueB){
		document.getElementById("ledonup").src="ledon.png";
		document.getElementById("ledonup").style.visibility = 'visible';
		dec_compare='100';
	}
	else{
		document.getElementById("ledonup").src="ledon.png";
		document.getElementById("ledonup").style.visibility = 'hidden';
	}

	 if(dec_valueA<dec_valueB){
		document.getElementById("ledonbottom").src="ledon2.png";
		document.getElementById("ledonbottom").style.visibility = 'visible';
		dec_compare='010';
	}
	else{
		document.getElementById("ledonbottom").src="ledon2.png";
		document.getElementById("ledonbottom").style.visibility = 'hidden';
	}
	//alert(dec_sum);
	//convertToBinary(dec_compare);
	
}


function addtotable(){
	//arr[0] = tabrowindex + 1;
    inputa = document.getElementById("binaryinpA").value.split("");
    inputb = document.getElementById("binaryinpB").value.split("");

    outputcompare = dec_compare.split("");
	
   arr[0]=inputa[0];
   arr[1]=inputa[1];
   arr[2]=inputa[2];
   arr[3]=inputa[3];
   arr[4]=inputb[0];
   arr[5]=inputb[1];
   arr[6]=inputb[2];
   arr[7]=inputb[3];
   arr[8]=outputcompare[0];
   arr[9]=outputcompare[1];
   arr[10]=outputcompare[2];
  


	
	table = document.getElementById("mytable");
        
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 11; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

        }	
}
