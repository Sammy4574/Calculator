     let opp='';
    let before='';
    let valone='';
    let valtwo='';
    let finalval='';

    function th(a) {
        if (h1.innerHTML=="0") {
        h1.innerHTML=""
       }

       h1.innerHTML+=a;
    }
    function clr() {
        h1.innerHTML=0;
        h6.innerHTML=""
    }
    function clrall() {
        h1.innerHTML=0;
    }
    function operator(calculate) {
        opp=calculate
        before=h1.innerHTML
        h6.innerHTML=`${before} ${opp}`
        h1.innerHTML=''

        if (h1.innerHTML=before) {
            h1.innerHTML='0'
        }
    }
    function solve() {
        valone=before;
        valtwo=h1.innerHTML;

        if (opp=='+'){
            finalval=Number(valone) + Number(valtwo);
        }

        if (opp=='-'){
            finalval=Number(valone) - Number(valtwo);
        }

        if (opp=='*'){
            finalval=Number(valone) * Number(valtwo);
        }

        if (opp=='/'){
            finalval=Number(valone) / Number(valtwo);
        }

        h6.innerHTML=`${valone} ${opp} ${valtwo} =`
            h1.innerHTML=finalval
    }
    function del() {
        h1.innerHTML=h1.innerHTML.slice(0,-1)
    }