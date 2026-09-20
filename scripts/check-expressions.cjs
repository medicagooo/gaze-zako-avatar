'use strict';
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({localStorage:{getItem:()=>null},navigator:{language:'en'}});
for(const name of ['hair.js','accessories.js','app.js']){
 const source=fs.readFileSync(path.join(root,name),'utf8');
 vm.runInContext(name==='app.js'?source.split("document.querySelector('#language').addEventListener")[0]:source,context);
}
const run=code=>vm.runInContext(code,context);
for(const [key,count]of Object.entries(run('LIMITS'))){
 for(let i=0;i<count;i++)assert.ok(!/undefined|NaN/.test(run(`renderAvatar({...DEFAULT,${key}:${i}})`)),`${key}:${i}`);
}
assert.equal(run('PRESETS.white.pupil'),0);
assert.equal(run('PRESETS.white.mouthStyle'),0);
assert.equal(run('DEFAULT.background'),5);
assert.equal(run('DEFAULT.accessory'),8);
assert.equal(run('validConfig({...DEFAULT,mouth:true,mouthStyle:undefined,pupil:undefined}).mouthStyle'),1);
assert.equal(run('validConfig({...DEFAULT,mouthStyle:undefined,pupil:undefined}).pupil'),0);
assert.equal(run('validConfig({...DEFAULT,mouthStyle:undefined,mouth:undefined}).mouthStyle'),0);
for(const [key,count]of [['mouthStyle',11],['pupil',10]]){
 for(const value of [-1,count,1.5,'1',null])assert.equal(run(`validConfig({...DEFAULT,${key}:${JSON.stringify(value)}})`),null);
 for(let i=0;i<count;i++)assert.equal(run(`validConfig({...DEFAULT,${key}:${i}}).${key}`),i);
 assert.equal(run(`new Set(Array.from({length:${count}},(_,i)=>renderAvatar({...DEFAULT,${key}:i}))).size`),count);
}
const frame=ear=>run(`renderAvatar({...DEFAULT,ears:${ear}}).match(/data-character="lower-left" transform="([^"]+)"/)[1]`);
assert.equal(frame(1),frame(2));assert.equal(frame(1),frame(3));
assert.ok(run(`renderAvatar({...DEFAULT,hetero:true,pupil:3}).includes(DEFAULT.rightEye)`));
assert.equal(run('validConfig({...DEFAULT,mouth:true,mouthStyle:0}).mouth'),false);
assert.equal(run('validConfig({...DEFAULT,...PRESETS.moon}).mouthStyle'),1);
console.log('Expression migration, validation, distinct artwork and shared ear framing passed.');
