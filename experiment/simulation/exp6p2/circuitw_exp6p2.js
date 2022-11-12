/*-Lab:exp_6_Part2_cascadingcomparator
	File name: exp6p2.html
    Author:Sukriti Dhang*/

var dec_valueA=0,dec_valueB=0;
var dec_compare;
var tabrowindex = 1;
var arr = [];
var table;
var Ainp7=0, Ainp6=0, Ainp5=0, Ainp4=0, Ainp3=0, Ainp2=0, Ainp1=0, Ainp0=0; 
var Binp7=0, Binp6=0, Binp5=0, Binp4=0, Binp3=0, Binp2=0, Binp1=0, Binp0=0;


function ledchng(){

    var image1 = document.getElementById('b1');		/*	GND  */
    var image2 = document.getElementById('b2');		/* B7	  */
    var image3 = document.getElementById('b3');		/*	VCC  */
    var image4 = document.getElementById('b4');		/*	A7  */
    var image5 = document.getElementById('b5'); 	/*  B6 */
    var image6 = document.getElementById('b6'); 	/*  A6 */
    var image7 = document.getElementById('b7'); 	/*  A5 */
    var image8 = document.getElementById('b8'); 	/*	B5  */
    var image9 = document.getElementById('b9');  	/*  A4 */
    var image10 = document.getElementById('b10');   /*  B4 */
    var image11 = document.getElementById('b11');	/*	GND  */
	var image12 = document.getElementById('b12');	/* (A>B)in	  */
	var image13 = document.getElementById('b13');	/*	(A=B)in  */
	var image14 = document.getElementById('b14');	/*	(A<B)in  */
    var image15 = document.getElementById('b15');	/*	B3  */
    var image16 = document.getElementById('b16');	/*	VCC  */
	var image17 = document.getElementById('b17');	/*	A3  */
	var image18 = document.getElementById('b18');	/*	B2  */
	var image19 = document.getElementById('b19');	/*	A2  */
    var image20 = document.getElementById('b20');	/*	A1  */
    var image21 = document.getElementById('b21');	/*	B1  */
    var image22 = document.getElementById('b22');	/*	A0  */
    var image23 = document.getElementById('b23');	/*	B0  */


/*validation of vcc and gnd */
if(image1.src.match("off") && image3.src.match("on") && image11.src.match("off") && image16.src.match("on") ){
    document.getElementById("msg").innerHTML = 'VCC and GND are properly connected';
    document.getElementById("showalt").style.visibility = 'visible';
    document.getElementById("msg").style.color="green";
    generate8bitbinary();
    decA_compare_decB();
}
else if(image1.src.match("on") ){
    document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for higher order comparator circuit) ';
document.getElementById("showalt").style.visibility = 'visible';
document.getElementById("msg").style.color="red";
}
else if(image11.src.match("on") ){
    document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for lower order comparator circuit) ';
document.getElementById("showalt").style.visibility = 'visible';
document.getElementById("msg").style.color="red";
}

else if(image1.src.match("on") && image11.src.match("on")){
        document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW) ';
        document.getElementById("showalt").style.visibility = 'visible';
		document.getElementById("msg").style.color="red";
       
    }
 else   if(image1.src.match("on") && image3.src.match("on") && image11.src.match("on") && image16.src.match("on") ){
        document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW)';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="green";
    }
    else   if(image1.src.match("off") && image3.src.match("on") && image11.src.match("on") && image16.src.match("on") ){
        document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for lower order comparator circuit)';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="green";
    }
    else   if(image1.src.match("on") && image3.src.match("on") && image11.src.match("on") && image16.src.match("off") ){
        document.getElementById("msg").innerHTML = 'Please connect GND properly (Make GND to LOW for higher order comparator circuit)';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="green";
    }
    else   if(image1.src.match("off") && image3.src.match("on") && image11.src.match("off") && image16.src.match("off") ){
        document.getElementById("msg").innerHTML = 'Please connect VCC properly (Make VCC to HIGH for lower order comparator circuit)';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="green";
    }
    else   if(image1.src.match("off") && image3.src.match("off") && image11.src.match("off") && image16.src.match("on") ){
        document.getElementById("msg").innerHTML = 'Please connect VCC properly (Make VCC to HIGH for higher order comparator circuit)';
        document.getElementById("showalt").style.visibility = 'visible';
        document.getElementById("msg").style.color="green";
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
    document.getElementById('b5r').style.display="none";
    document.getElementById('b5g').style.display="block";
    Binp7=1	;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
    Binp7=0	;
    }
    ledchng();
}
function a3() {
    var image = document.getElementById('b3');		
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
function a4() {
    var image = document.getElementById('b4');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    Ainp7=1	;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    Ainp7=0	;
    }
    ledchng();
}

function a5() {
    var image = document.getElementById('b5');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b8r').style.display="none";
    document.getElementById('b8g').style.display="block";
    Binp6=1	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b8r').style.display="block";
    document.getElementById('b8g').style.display="none";
    Binp6=0;
    }
    ledchng();
}
function a6() {
    var image = document.getElementById('b6');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b9r').style.display="none";
    document.getElementById('b9g').style.display="block";
    Ainp6=1	;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b9r').style.display="block";
    document.getElementById('b9g').style.display="none";
    Ainp6=0	;
    }
    ledchng();
}
function a7() {
    var image = document.getElementById('b7');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b10r').style.display="none";
    document.getElementById('b10g').style.display="block";
    Ainp5=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b10r').style.display="block";
    document.getElementById('b10g').style.display="none";
    Ainp5=0;
    }
    ledchng();
}
function a8() {
    var image = document.getElementById('b8');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b11r').style.display="none";
    document.getElementById('b11g').style.display="block";
   Binp5=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b11r').style.display="block";
    document.getElementById('b11g').style.display="none";
    Binp5=0;
    }
    ledchng();
}
function a9() {
    var image = document.getElementById('b9');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b12r').style.display="none";
    document.getElementById('b12g').style.display="block";
    Ainp4=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b12r').style.display="block";
    document.getElementById('b12g').style.display="none";
    Ainp4=0;
    }
    ledchng();
}
function a10() {
    var image = document.getElementById('b10');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b13r').style.display="none";
    document.getElementById('b13g').style.display="block";
	Binp4=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b13r').style.display="block";
    document.getElementById('b13g').style.display="none";
	Binp4=0;
    }
    ledchng();
}
function a11() {
    var image = document.getElementById('b11');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b14r').style.display="none";
    document.getElementById('b14g').style.display="block";
		
    } 
else
{
    image.src = "off.png";
    document.getElementById('b14r').style.display="block";
    document.getElementById('b14g').style.display="none";
    
    }
    ledchng();
}
function a12() {
    var image = document.getElementById('b12');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b15r').style.display="none";
    document.getElementById('b15g').style.display="block";
		
    } 
else
{
    image.src = "off.png";
    document.getElementById('b15r').style.display="block";
    document.getElementById('b15g').style.display="none";
    
    }
    ledchng();
}
function a13() {
    var image = document.getElementById('b13');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b16r').style.display="none";
    document.getElementById('b16g').style.display="block";
		
    } 
else
{
    image.src = "off.png";
    document.getElementById('b16r').style.display="block";
    document.getElementById('b16g').style.display="none";
    
    }
    ledchng();
}
function a14() {
    var image = document.getElementById('b14');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b17r').style.display="none";
    document.getElementById('b17g').style.display="block";
   
    } 
else
{
    image.src = "off.png";
    document.getElementById('b17r').style.display="block";
    document.getElementById('b17g').style.display="none";
  
    }
    ledchng();
}

function a15() {
    var image = document.getElementById('b15');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b18r').style.display="none";
    document.getElementById('b18g').style.display="block";
    Binp3=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b18r').style.display="block";
    document.getElementById('b18g').style.display="none";
    Binp3=0;
    }
    ledchng();
}
function a16() {
    var image = document.getElementById('b16');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b19r').style.display="none";
    document.getElementById('b19g').style.display="block";
    	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b19r').style.display="block";
    document.getElementById('b19g').style.display="none";
    
    }
    ledchng();
}
function a17() {
    var image = document.getElementById('b17');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b20r').style.display="none";
    document.getElementById('b20g').style.display="block";
    Ainp3=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b20r').style.display="block";
    document.getElementById('b20g').style.display="none";
    Ainp3=0;
    }
    ledchng();
}
function a18() {
    var image = document.getElementById('b18');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b21r').style.display="none";
    document.getElementById('b21g').style.display="block";
    Binp2=1;	
    } 
else
{
    image.src = "off.png";
    document.getElementById('b21r').style.display="block";
    document.getElementById('b21g').style.display="none";
    Binp2=0;
    }
    ledchng();
}
function a19() {
    var image = document.getElementById('b19');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b22r').style.display="none";
    document.getElementById('b22g').style.display="block";
    Ainp2=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b22r').style.display="block";
    document.getElementById('b22g').style.display="none";
    Ainp2=0;
    }
    ledchng();
}
function a20() {
    var image = document.getElementById('b20');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b23r').style.display="none";
    document.getElementById('b23g').style.display="block";
    Ainp1=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b23r').style.display="block";
    document.getElementById('b23g').style.display="none";
    Ainp1=0;
    }
    ledchng();
}
function a21() {
    var image = document.getElementById('b21');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b24r').style.display="none";
    document.getElementById('b24g').style.display="block";
    Binp1=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b24r').style.display="block";
    document.getElementById('b24g').style.display="none";
    Binp1=0;
    }
    ledchng();
}
function a22() {
    var image = document.getElementById('b22');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b25r').style.display="none";
    document.getElementById('b25g').style.display="block";
    Ainp0=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b25r').style.display="block";
    document.getElementById('b25g').style.display="none";
    Ainp0=0;
    }
    ledchng();
}
function a23() {
    var image = document.getElementById('b23');		
    if (image.src.match("off")) 
{
    image.src = "on.png";
    document.getElementById('b26r').style.display="none";
    document.getElementById('b26g').style.display="block";
    Binp0=1;
    } 
else
{
    image.src = "off.png";
    document.getElementById('b26r').style.display="block";
    document.getElementById('b26g').style.display="none";
    Binp0=0;
    }
    ledchng();
}


/*generate 4bit input A and B combination*/
function generate8bitbinary(){
    var A=[];
    var B=[];
    A.push(Ainp7,Ainp6,Ainp5,Ainp4,Ainp3,Ainp2,Ainp1,Ainp0);
    B.push(Binp7,Binp6,Binp5,Binp4,Binp3,Binp2,Binp1,Binp0);
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
   arr[4]=inputa[4];
   arr[5]=inputa[5];
   arr[6]=inputa[6];
   arr[7]=inputa[7];

   arr[8]=inputb[0];
   arr[9]=inputb[1];
   arr[10]=inputb[2];
   arr[11]=inputb[3];
   arr[12]=inputb[4];
   arr[13]=inputb[5];
   arr[14]=inputb[6];
   arr[15]=inputb[7];

   arr[16]=outputcompare[0];
   arr[17]=outputcompare[1];
   arr[18]=outputcompare[2];
  

	table = document.getElementById("mytable");
        
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 19; q++) {

            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];

        }	
}
