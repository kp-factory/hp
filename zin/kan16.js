kao16 = new Array();
//js-Kao-16 (C)Kiyoshi Zin, 2000
kao16[0] = "( ÅLÉ¶ÅM)ÅÙ";
kao16[1] = "( ÅLÅ§ÅM)ÅÙ";
kao16[2] = "( ÅLÉçÅM)ÅÙ";
kao16[3] = "( ÅLÉ∆ÅM)ÅÙ";
kao16[4] = "( ÅLÅõÅM)ÅÙ";
kao16[5] = "( ÅLÅóÅM)ÅÙ";
kao16[6] = "( ÅLÉ√ÅM)ÅÙ";

k16 = 0; kt16 = 0; ktt16 = 0; ks16 = 500;
  function laykao16(){
    if(document.getElementById){
      document.getElementById('kan16').innerHTML=kao16[k16];
    } else 
    if(document.all){
      document.all('kan16').innerHTML=kao16[k16];
    } else 
    if(document.layers) {
       with(document.layers['kan16'].document){
         open();
         write(kao16[k16]);
         close();
      }
    }

 if (k16<kao16.length-1) { k16++; } else { k16=0; }
      kt16 = setTimeout("laykao16()",ks16);
   }
 ktt16 = setTimeout("laykao16()",ks16);

