import fs from 'node:fs/promises';
const tabs = await (await fetch('http://127.0.0.1:9233/json')).json();
const ws = new WebSocket(tabs.find(t => t.type === 'page').webSocketDebuggerUrl);
await new Promise(r => ws.onopen = r);
let sequence = 0;
const pending = new Map(), errors = [], results = [];
ws.onmessage = ({data}) => { const m = JSON.parse(data); if(m.id){pending.get(m.id)?.(m);pending.delete(m.id);} if(m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.text); };
const call = (method, params = {}) => new Promise((resolve,reject) => {const id=++sequence;pending.set(id,m => m.error ? reject(m.error) : resolve(m.result));ws.send(JSON.stringify({id,method,params}));});
const run = async expression => (await call('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true})).result?.value;
const wait = () => new Promise(r => setTimeout(r,350));
const check = (name,pass) => {results.push({name,pass:!!pass}); if(!pass) process.exitCode=1;};
await call('Runtime.enable');await call('Page.enable');
await call('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await call('Page.navigate',{url:'http://localhost:5173'});
await new Promise(r => setTimeout(r,1900));
await run('document.fonts.ready.then(() => true)');
const count = await run("document.querySelectorAll('[data-doodle]').length");
check('seven doodles registered',count === 7);
for(let i=0;i<count;i++) {
 await run(`document.querySelectorAll('[data-doodle]')[${i}].scrollIntoView({behavior:'instant',block:'center'})`);
 await new Promise(r=>setTimeout(r,2100));
 check(`doodle ${i+1} draws on entry`,await run(`document.querySelectorAll('[data-doodle]')[${i}].classList.contains('doodle-visible') && [...document.querySelectorAll('[data-doodle]')[${i}].querySelectorAll('path')].every(p => parseFloat(getComputedStyle(p).strokeDashoffset) === 0)`));
}
await call('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
check('reduced motion leaves every mark visible',await run("[...document.querySelectorAll('[data-doodle] path')].every(p => parseFloat(getComputedStyle(p).strokeDashoffset) === 0 && getComputedStyle(p).animationName === 'none')"));
await call('Emulation.setEmulatedMedia',{features:[]});
for(const width of [320,390,768,1440]) {
 await call('Emulation.setDeviceMetricsOverride',{width,height:844,deviceScaleFactor:1,mobile:width<800});await wait();
 check(`${width}px no overflow`,await run('document.documentElement.scrollWidth <= innerWidth'));
}
check('no runtime errors',errors.length===0);
console.log(JSON.stringify({results,errors},null,2));ws.close();
