"use strict";function u(){return{validate:n=>{const r=Array.from(n,Number);let i=0;for(let t=0;t<=r.length-1;t++){let e=r[t];t%2===0&&(e*=2,e>9&&(e-=9)),i+=e}return i%10===0}}}module.exports=u;
