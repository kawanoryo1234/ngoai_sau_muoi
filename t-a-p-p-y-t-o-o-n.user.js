// ==UserScript==
// @name         t-a-p-p-y-t-o-o-n
// @namespace    https://github.com/kawanoryo1234/ngoai_sau_muoi/raw/main/t-a-p-p-y-t-o-o-n.user.js
// @version      2024.12.13
// @description  down t-a-p-p-y-t-o-o-n
// @author       You
// @match        https://www.tappytoon.com/en/chapters/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.tappytoon.com
// @require      https://cdn.jsdelivr.net/npm/@zip.js/zip.js@2.7.53/dist/zip.min.js
// @grant        none
// @downloadURL  https://github.com/kawanoryo1234/ngoai_sau_muoi/raw/main/t-a-p-p-y-t-o-o-n.user.js
// @updateURL    https://github.com/kawanoryo1234/ngoai_sau_muoi/raw/main/t-a-p-p-y-t-o-o-n.meta.js
// ==/UserScript==

(function(f,P){const u=a0P,C=f();while(!![]){try{const N=parseInt(u(0x1bb,'RRu3'))/0x1+-parseInt(u(0x1a6,'Ho*q'))/0x2*(parseInt(u(0x1eb,'a8dh'))/0x3)+-parseInt(u(0x226,'OIa2'))/0x4+-parseInt(u(0x1f0,'M(v@'))/0x5*(parseInt(u(0x1da,'!KwL'))/0x6)+parseInt(u(0x1aa,'OIa2'))/0x7*(parseInt(u(0x1fd,'6pNA'))/0x8)+parseInt(u(0x222,'5*G@'))/0x9+-parseInt(u(0x1a0,'@@EK'))/0xa*(-parseInt(u(0x213,'l7iz'))/0xb);if(N===P)break;else C['push'](C['shift']());}catch(F){C['push'](C['shift']());}}}(a0f,0x55901));let downloading_current=0x0,downloading_total=0x0,image_blobs;function a0f(){const M=['EmogwbldSq','W67cTIuHW6TyW7/dNG','xCoQp8oCnuaBWRHLWPy','DhXaW4jXc3/dOqa6BSkV','bCoxWPZcQtJdPJiS','W5C6W5BdOCoMW6JdONBcRIK','bmoHxuDQW6hcTsP0WQTgvSoC','Ab0eamoNW5xdQW','fmoNquP7W7FcMcn0WRi','WOhcULS+W6K/qCo1ymoCWRtcTCkKdKLubKK0WPyJWRVdPmkEW4K6wCoer8klmqpcI8kqWOFcIxZcRmoUW7WgawtcH1XQ','FCosv8oDpSo7uSkZv1TxW5VdRW','aCkMcJpcPZRcMu9bASkBmuChWOL0WRJcK1DtbSokrCoAEKi3','WPG3W53dP8oGW7q','WOCGW5a','pv3dG392oJFdSSkBW51+','FCk4yaOAFCkDWQ8jW7ldRq','j8kmtYW','WR9Jk8kgWOVcKq','jXJdPt/cOSoTW68','WQ/dSSkcWQiEdNvYFCoAoCkgFG','cmoCWPS','ErNcLZ0/bXJdPSkZW5v4W4TY','W7dcUSoXo1OP','FZW1W5FdP37cH3TN','FWxcLJSU','FSkTW6BdK8kyvN9jtIRdOW','EXtdUcxcNCoTW7HIWQHUW4LBW4tdKLpcOIi1pbddRSo/WPvEDY0rWPWiWQRdHtnaWQ8CBgpcKNtdOXZdT1DUqxO','BMzqW5P9','W4TwlW','imk/BqCl','iCooWQZcNColhWRdMqFcQw5UW6bKW7ddVmoSWPzuymohWOP7W4uWda','W5iKW5ldSSo9W73dRMFdSJuGkX4FlCk8uH1pk14','FMddL8kpW6m','W77cSmo4o1G','WQHSW7BdQ1W','W45/W43dKgyq','yb7cLYK','e8oziqdcGW','jmk+FSkiybmwW7HKWPP3W4NdTmo3WO/dNqurWQFdQvngWQCly8orWPxdVdH/f2KNhtddGmkFBmobmeRdOmovfCk5cmkTrCoQW6KMmha/umkmsSkAzSo/bCktoe9lW6VcHqvnW53dQdFdS8opo8oSfG3dUX3cStD+t8osvLNcSYZcNCoOWRq4W4nfWPiTW50VrhH0WOmUWPPAyJeTbINcNX4wW5b4WQ4ui8kFW656a8kboSkHgcZcHg/dPG7cTvWWxSk8jSohESkBbmksW7StiIpcL1tcRgf2WPxcHmklWONdHGW0WPFdSNTofbhdLMhdPmoIWQShemogcSkeEbldM8oQW5hdO8kTts/cHSkmWOqcsSkSn8k+uI3cGx1VW5ScW6xcMmoQmdvQoSoBvwtcLSo5qxvWWOWCW4bPWOK5WPDwWRlcIrTZWQC1W6FcT8oXc8kSjmkfifHopefVW5r5WQTKW4FdTSodW6JcSSkPq8koW4JdN31nWRtcKCkDfs1roclcRCkeWOZcTCoJWQZcICkFbCk7WPrnx07dGHK0W7pcPSoEWRxdSCoTW6umW7ZcTSoljKJcS8kdWPSDW6GBW7hcLt9QWQ83WOO4W4mtBsBdGWKKlCk7WPyQBSkcWONcHqbMWOrxWP3dL8krWOxdP0lcJbfLWPZdJeFcJSoaW7mtW58yWQNcUv4gxmomWRCYgmoIW6JdR8oYWPOXW4fMutRcPMj9WP/dUSksWPKDpvj9WRWfW6pcM0uXW5RcPmokW7FcM20oh2fxyw7cHCkjn2rsWPhdVd80W68ah8oCWPjEW4qvW4BcTd98WQX5W5pdO083W4r4nmkCEf/dHdldNWxcUmoLpConWRvxt33cKmoSuKNcM8k2WRddKuJcHSo6CWrulSo8WRlcLHZdHwdcHgRcQZtcHdLJW7hcMLvYWRruW5C4W45BiJaNW617W5RdVcJdIs91W5/cISo3W7DDqmokCCkSW4RdTGldVSk0t1xcVbBcV3umct3cKq3dG15dut7cRaSmF8ogcrNcM3ipWRfDWOOAhr9UW7mxWRJcOthdTSowvHhdIupdR8kGW7hdJgZcMf/cHCoexCkHWQifld3dVHddUSkMtmkPW44HhqJcRCk9qJ1ow8oMeCoSn8kZjeOntghcRmo7WRK2Be5YW5RdHhtcM2hdIWb1W7BcLgNcMrRdGIG8y8kWBadcTumsbKFcVmkXW6hcOJ1gWPVcJSkquSk2W7FdHLFcL2v/zxqvj8k9W6pdJZlcQwzDoSowjqhcTG3cNHdcMCoBAfJcT8kkBSkmWOhdRCk3WRnrjmkcW49OWRNdVMTEyKBcV8kZWQywWQHdt8oTWP9HWRv/WRRcT8o4sSorg8o9ca','yCoVr8kVW7DY','ASoVsmk/','mfXYECo4ANdcQa','WQXJkSkD','WQxcNCoVW6BdJuDTxJ44t00saxG','WRnSW7VdT0RcNJDJW7lcT8kLomoSCZNcRSoJW4z0W4PDW79uh8kcWQy5Fmo/W6rFxG','g1j2W7z0aCkMfG','y8orrapdGmohWOVcTCoaWRNcNG','W6OQW6tdV1RdQvi8','CHHNz8ovCW','W7hcUCoZma','jmkaa8ko','ov3dGa0oeXldHSkD','WRFcMCoMW6BdGq','jvqUW7VcQ8klxNeQW7xdHaNcJM/dU3CoWRW8WRPcd2fbW59xyW','dCozpHy','W498W4ZdLa','n8k/W6i','wmotfmoNW650W4RdOCkDW5HTfc9Uymkdlmk4cmoiWOL3haFcMfa','g2e4W5RcJbugEZLiWQ7dN8oLWOeb','jWpdRIFcJa','W7RcQmojW6nfvJq','pZGXW4xdPKtcHhnJW5G','oSkhqmk3WR1UW4xdRSokWOfPtJP7zCkaEmkIeSokW4CIDuJdLv/dIKDDgsxcPHNdMulcQCkXb8onFZBcTeCkWRnVprJcLSkPW53dU8k/wIPAWQRdJCklWRNdTSoEgSkKnCoVpZDmFYJdRuhcSY0TlNNcU8ojW4SjWRGvW6FcQwFcQfZdSmoyW6KCWPZcQmkeW5ddOceXWQdcHSoQW65zWPlcO8kqvZbzhSo3W6qtiYv2W5X5chhdN8oFgSkcWPT2W7JcRWLdW6bHAa8jzCknASo/W6fzaqlcSmoSWOG2WRGFdmkgF8k+iaZdMNJdQGHvgwaPW77dRIddOSo9lG7dHIOGwCo7W5vSpulcJ8kDWPddOwCUo8oKwSoHW6jucu/cQ2KaBdBdTxRdHmo2dsmudZJdG8oFkwDIW4qYW5ifW5tcVCkNW6KUWRBcKeJcQGhcPCk3W7yoi2pcHXGGqrRcTJKpyGtcQbzykSo9eCoWW6b+WQ1IimoVW5eRWRFcLmoZWQhdQfRcS8o9WRVdMu5UBCkTW5WQWODbd8khhxnbkY0hW5RdRSo2qMNcIHBdVCo5WRZdUKJcMCoWDg8/W5NcJL5ZvCopWRLhzNtdMKJcJSo+vY7cNWLbhCkUWRlcOx/dSmkMfqjjomooWQZcOCkzWR87WPBdQvxcMmkHmaX2WP5TW6BcJIHPWOlcQSksWQBcLsDRWR/dM2ibW7VdKSk2m8kUWOfdWRabB18oW6z7tufUW7fIWOCisCkTW6DLoem0oXNdP8ogW6mMBLRcSHKKm8k/W5CICCoJv8kLrSoklvC','Fmo9eGrGjgmKlSooWRrDdq','oHBdUI4','DfJcTW','prNdVJ/cGmoPW7PfW7fRW5Hs','W4fMW4NdOSoCW5/dT2e','eCoMxxpdUgNcG3ukF8kIlW','ybJcHJ81BLlcPCkWW5LIW5bZumkVW5HooSk3rmkEWRVdRtVcHCk1WP7dLCoBfWtdRb/cT8oVDCoSbmk/eaO4nmkbwXusAvqOWP4DWP5LWRddPdKA','W5ZcVfK/W6S/','hSodj8o9u8opW6ySWRZdQq','E8oMaq','W4vIWOVcUCkKWQJdSMpcHt8RlG','lmkBsYNcKLNdO8kauduNrdi','W5L1W5VdGKWyW6H8WQ/dMmol','yXqkf8oN','uCoxemoYW7mQWQBcPSkdW4n+','oSkLzW4CFmkSW6CbW6JdSM8','lvCnW6VcTCkkB1eQW77dIa','W4f5W43dNq','jSkwdCke','f8oDkWFcPCkdW6ldN8o/ury','ArylaCoWW6/dJmohWR0','Ar5JDq','mmk9Cx0usq','m8kmsL/dLgJcH8kgW5juEa','WOqGW5ZdSmoN','lmkftZVcLxldH8kbua','DaqvW6pdNmo/w8oXWONdI0JcMKu','xvW0W7tdK8ofxCo4W4hdVuNcNfm','x2ldVbu','uN7dRrOqtmkABq','nSkvta','n8kKyWucz8kpW6y','bLXXW7XO','W5RcUeqGW6qUqmoUiW','W7aPvmkuWOW','xutcMNtcUq','vSkmkrhcRSkVW7VdMq','W6i/xSkxWOxdH23cLG','Db0DemobW4JdTSo+WPqotG','htxdLConzWldKZqEtmkIWQxcP8oK','W6RcRSok','W5XLW4BdHhyKW6nKWQ/dLColCxm','ogHLiG','W4v1W4ldHhSvW6nPWR4','ocxcN8otWRzOmqxdRmkBWPi','omkjsu7dK2RcVCkTW5rwAfyXW6C','nrVdVIZcH8obW6jZW6H5','DCkNEWGpzmklWR8','WPiPmWCqWP8G','sqiy','Bmo7dGLX','t8ktBmk7eSoPW6aZWQldQCoL','vNZdTq','s8kEBCk2h8k+W4KaWR3dHSoFaG','wmoNv017W6RdJq','WQH3W7RdTvRdGuC5W6hcQW','iCovDSkvW5DyW5FdUmodmgy0d8oG','mCkhn8k+','Emoqf33dK1NdImkArZW6','dSkFWQi1','uG/dRmo3','EhXDW4rXd2a','nWxdSIRcNCoTW5n6W6bNW4LzW5K','W7xdG8kQW7JdGuK','tCoSo8ojnfzZWRP1WPz7WORdTG','dCkzW6jWW5K+yIFcPCobtv0','vCoyuXxdLmoAWOZcTCoaWQu','aCo9nSojmeDtWQrJW5q','W7lcPCoSn1C+WRtdLCo4WRzP','y8oUtCkEW6rLW63dK8olgeebnCorafi','W4RcTSk2eCoVWR/cSCkMudtcUxG','lwbSWP3cPatcLgziW455WPa','fCkEka','WRxdTt4L','ECoGbsb1iK4','Fr7cNG','h1H9W6Tdb8kNdmoFrwO','rgtdOb8b','W67cRSotW71DuJ8','lh5HW5BdSv0','mCkMW7VdNCkF','f8orjX/cGW','ySoiWQ3cLmoleG','WQ7dSZq5W4PHW4VdO8oyWO8Qpva','t1S0W6FdNSoZFCo4W4hdS1JcNvu','xXRdUSoMtd7dHamZyCks','o3HIc8kfhgpcQ8ofW7GheW','mWOacq','ACoiWRFcTSothWNdIetcUxHaW7bgW7tdQCoBW5HAAG','WO4BW53dPmoXW6q','v1ZcGwFcOCoQW7ZdUr/cTLDtpMddL8kRWRe/Fmk9W7jBpttcS2VcVCo2FGz9trdcT8osWQaagSoSr8osWOhcV8oub8k4tCo4W4aKWQxcRCooW78fW5tdOWFdV1ravGqeW7NdM8kJDxZdVchdRCkW','pSkQza','kmoEWQZcGColmqhdLfNdSa','WOJdOmoVuSk7W67dMCkQCHhcGvVcHG','WRHQW6RdPK3dGvCUW7NcOSkVyCoEtrO','mmkNFqGf','WPRdP3xdHhtdQYP4vSkIpa','imk/W7BdOCkyqN4q'];a0f=function(){return M;};return a0f();}function saveBlob(f,P){const G=a0P,C=window[G(0x1e7,'6pNA')][G(0x214,'Ho*q')](f),N=document[G(0x1b6,'zS[H')]('a');N[G(0x1cb,'@@EK')]=C,N[G(0x1d5,'UoR5')]=P,N[G(0x1b2,'7DFt')]['display']='none',document[G(0x1ef,'7AOY')][G(0x20b,'s@dT')](N),N['click'](),N[G(0x1bd,'OQAp')](),window['URL']['revokeObjectURL'](C),image_blobs=null;}function sleep(f){return new Promise(P=>setTimeout(P,f));}const download_not_encrypted=async(f,P,C=0x0)=>{const w=a0P;try{const {token:N,sortKeys:F,locale:Q}=f[w(0x23b,'fyPb')][w(0x1fc,'l7iz')],W=await fetch(f[w(0x1ed,'Ho*q')]+w(0x1ec,'t!h6')+N+w(0x212,'a#eS')+F+w(0x1e5,'UoR5')+Q,{'headers':f['config'][w(0x1e6,'u30B')]}),I=await W[w(0x1ff,'If1y')](),x=I[w(0x239,'L!CQ')][0x0][w(0x201,'OIa2')],X=await fetch(x,{'headers':{'referer':w(0x1b0,'nYlX')}}),l=await X[w(0x1ae,'fyPb')]();image_blobs[w(0x1e0,'sQ!Y')]({'name':f[w(0x1b7,'7DFt')]+'.jpg','blob':l}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();}catch(q){C<0x3&&(C+=0x1,download_not_encrypted(f,P,C));}};function update_status(){const h=a0P;document[h(0x209,'If1y')](h(0x227,'UoR5'))['style'][h(0x1b3,'BBbk')]=h(0x1d9,'[w6$'),document['querySelector'](h(0x231,'L3]8'))[h(0x1ca,'^x)*')]=downloading_current+h(0x1b8,'7DFt')+downloading_total;}function create_status_box(){const j=a0P;let f=document[j(0x1c1,'M(v@')]('div');return f[j(0x22f,'6pNA')]=j(0x21a,'VP7@'),f[j(0x1dc,'^x)*')]=downloading_current+'\x20/\x20'+downloading_total,f;}function create_download_icon(){const J=a0P;let f=document['createElement'](J(0x1d4,'0h)3')),P=document['createElement']('img');P[J(0x1cf,'M(v@')]=J(0x1cc,'%2&D'),P[J(0x20c,'sQ!Y')](J(0x225,'JXca'),J(0x210,'[w6$')),P[J(0x203,'QZMW')][J(0x230,'OIa2')]=J(0x20d,'^x)*'),P[J(0x1e8,'zS[H')][J(0x229,'kwRj')]=J(0x204,'BBbk'),f[J(0x1cd,'0h)3')](P);let C=document[J(0x20a,'9tpa')](J(0x1c7,'fyPb'));C[J(0x1fe,'2a8V')]=J(0x220,'t!h6'),C[J(0x23c,'OIa2')]=J(0x1bc,'OIa2'),document[J(0x20e,'a#eS')](J(0x228,'M(v@'))[0x0]['appendChild'](C);let N=document[J(0x1f6,'VP7@')](J(0x1bf,'zS[H'));N['className']=J(0x1a7,'@@EK'),N[J(0x1ab,'qIVQ')]['display']='flex',N['style'][J(0x1e3,'0h)3')]='center',N[J(0x238,'9kec')][J(0x1e4,'7DFt')]=J(0x19e,'rYMm'),N[J(0x23a,'Ho*q')][J(0x1af,'L3]8')]=J(0x1f5,'qIVQ'),N[J(0x1d8,'Me@d')][J(0x1a4,'cmIt')]=J(0x1db,'Me@d'),N['style'][J(0x20f,'JXca')]='10000',N[J(0x203,'QZMW')][J(0x1de,'BBbk')]=J(0x205,'6pNA'),N['style'][J(0x1f2,'s@dT')]=J(0x1f1,'L3Nr'),N[J(0x235,'UoR5')]['transform']=J(0x1b1,'ubtb');let F=create_status_box();const Q=document[J(0x21e,'t!h6')](J(0x233,'D%Ip'));Q[J(0x1c2,'fyPb')]=J(0x1b5,'nYlX'),document[J(0x1a9,'5*G@')][J(0x1c6,'LLtx')](Q),N[J(0x216,'IfEJ')](f),N[J(0x1fa,'L!CQ')](F);let W=document[J(0x1d1,'9tpa')]('body'),I=W[J(0x1be,'a8dh')];return W[J(0x1c5,'UoR5')](N,I),N;}function a0P(f,P){const C=a0f();return a0P=function(N,F){N=N-0x19d;let Q=C[N];if(a0P['ABrpRI']===undefined){var W=function(q){const O='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let b='',g='';for(let T=0x0,a,E,o=0x0;E=q['charAt'](o++);~E&&(a=T%0x4?a*0x40+E:E,T++%0x4)?b+=String['fromCharCode'](0xff&a>>(-0x2*T&0x6)):0x0){E=O['indexOf'](E);}for(let Y=0x0,S=b['length'];Y<S;Y++){g+='%'+('00'+b['charCodeAt'](Y)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(g);};const l=function(q,O){let b=[],k=0x0,g,T='';q=W(q);let a;for(a=0x0;a<0x100;a++){b[a]=a;}for(a=0x0;a<0x100;a++){k=(k+b[a]+O['charCodeAt'](a%O['length']))%0x100,g=b[a],b[a]=b[k],b[k]=g;}a=0x0,k=0x0;for(let E=0x0;E<q['length'];E++){a=(a+0x1)%0x100,k=(k+b[a])%0x100,g=b[a],b[a]=b[k],b[k]=g,T+=String['fromCharCode'](q['charCodeAt'](E)^b[(b[a]+b[k])%0x100]);}return T;};a0P['kQeTxC']=l,f=arguments,a0P['ABrpRI']=!![];}const I=C[0x0],x=N+I,X=f[x];return!X?(a0P['plYrYU']===undefined&&(a0P['plYrYU']=!![]),Q=a0P['kQeTxC'](Q,F),f[x]=Q):Q=X,Q;},a0P(f,P);}const throttlePromises=async(f,P)=>{const i=a0P;while(f[i(0x224,'JXca')]>0x0){await Promise[i(0x1ea,'QZMW')](f['splice'](0x0,P)[i(0x234,'5wHn')](C=>C())),await sleep(0xc8);}},on_heartbeat_css=()=>{const H=a0P;let f=document[H(0x1df,'fyPb')](H(0x21d,'JXca'));!f&&(f=document[H(0x1f4,'7DFt')](H(0x1b2,'7DFt')),f['setAttribute']('id',H(0x1e1,'fyPb')),document[H(0x19f,'rYMm')][H(0x1c4,'nYlX')](f)),f[H(0x1c9,'!KwL')]=H(0x19d,'VP7@');},off_heartbeat_css=()=>{const n=a0P,f=document[n(0x22d,'OIa2')](n(0x1b4,'6pNA'));f[n(0x1a5,'SYCH')]='';};((async()=>{const r=a0P,f=create_download_icon();f[r(0x1fb,'rYMm')](r(0x215,'UoR5'),async()=>{const L=r;on_heartbeat_css();const P=document[L(0x21c,'rs]o')][L(0x1d2,'QZMW')],C=P[L(0x1d6,'cmIt')](/\/(\w+)\/chapters\/(\d+)/),N=C[0x1],F=C[0x2],Q=L(0x1a3,'Ho*q'),W=JSON['parse'](document['querySelector'](L(0x1dd,'s@dT'))['textContent'])[L(0x1ce,'JXca')][L(0x1b9,'7DFt')][L(0x206,'L3]8')][L(0x21f,'^x)*')],I=W['Authorization'],x=W[L(0x1d0,'9tpa')],X={'Authorization':I,'X-Device-Uuid':x},l=await fetch(Q+L(0x1f9,'VP7@')+F,{'headers':X}),q=await l[L(0x1c8,'5*G@')]();let O;q[L(0x207,'!KwL')]?O=q[L(0x218,'SYCH')]+0x1+'\x20'+q['title']:O=L(0x1d7,'OQAp');const b=JSON[L(0x23d,'!KwL')](document['querySelector'](L(0x1ee,'rYMm'))[L(0x202,'cmIt')])['props'][L(0x21b,'D%Ip')][L(0x1d3,'QZMW')][L(0x22e,'L!CQ')][''+q['comicId']][L(0x1ac,'LLtx')];let k;b?k=await fetch(Q+L(0x221,'OQAp')+F+L(0x223,'RRu3')+N,{'headers':X}):k=await fetch(Q+L(0x232,'7DFt')+F+L(0x237,'JXca')+N,{'headers':X});const g=await k['json'](),{totalFilesCount:T,token:a,files:E}=g,o=[];for(const [Y,S]of E[L(0x1f3,'D%Ip')]()){o[L(0x1a1,'kwRj')]({'name':(''+(Y+0x1))[L(0x217,'L3]8')](0x3,'0'),'source_url':Q+L(0x236,'a#eS'),'config':{'headers':X,'searchParams':{'token':a,'sortKeys':''+S[L(0x22a,'7DFt')],'locale':N}}});}if(o[L(0x208,'a#eS')]>0x0){downloading_total=o['length'],downloading_current=0x0,image_blobs=[];const m=o[L(0x211,'UoR5')]((R,U)=>()=>download_not_encrypted(R,U));await throttlePromises(m,0x4);const p=new zip[(L(0x1f8,'SYCH'))](L(0x1a2,'qIVQ')),v=new zip['ZipWriter'](p);image_blobs[L(0x200,'zS[H')](async R=>{const z=L;await v[z(0x22c,'rs]o')](R[z(0x1ad,'!KwL')],new zip['BlobReader'](R[z(0x1a8,'L!CQ')]));});const e=await v[L(0x1c3,'^x)*')]();saveBlob(e,O+'.zip');}});})());