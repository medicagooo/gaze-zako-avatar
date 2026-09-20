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
for(let ear=0;ear<run('LIMITS.ears');ear++)assert.ok(!/undefined|NaN/.test(run(`renderAvatar({...DEFAULT,hair:15,ears:${ear}})`)),`pig hair ears:${ear}`);
assert.equal(run('PRESETS.white.pupil'),0);
assert.equal(run('PRESETS.white.mouthStyle'),0);
assert.equal(run('DEFAULT.background'),4);
assert.equal(run('DEFAULT.accessory'),8);
assert.equal(run('validConfig({...DEFAULT,mouth:true,mouthStyle:undefined,pupil:undefined}).mouthStyle'),1);
assert.equal(run('validConfig({...DEFAULT,mouthStyle:undefined,pupil:undefined}).pupil'),0);
assert.equal(run('validConfig({...DEFAULT,mouthStyle:undefined,mouth:undefined}).mouthStyle'),0);
for(const [key,count]of [['mouthStyle',11],['pupil',11]]){
 for(const value of [-1,count,1.5,'1',null])assert.equal(run(`validConfig({...DEFAULT,${key}:${JSON.stringify(value)}})`),null);
 for(let i=0;i<count;i++)assert.equal(run(`validConfig({...DEFAULT,${key}:${i}}).${key}`),i);
 assert.equal(run(`new Set(Array.from({length:${count}},(_,i)=>renderAvatar({...DEFAULT,${key}:i}))).size`),count);
}
const frame=ear=>run(`renderAvatar({...DEFAULT,ears:${ear}}).match(/data-character="lower-left" transform="([^"]+)"/)[1]`);
assert.equal(frame(1),frame(2));assert.equal(frame(1),frame(3));
assert.ok(run(`renderAvatar({...DEFAULT,hetero:true,pupil:3}).includes(DEFAULT.rightEye)`));
assert.equal(run('validConfig({...DEFAULT,mouth:true,mouthStyle:0}).mouth'),false);
assert.equal(run('validConfig({...DEFAULT,...PRESETS.moon}).mouthStyle'),1);
assert.equal(run('validConfig({...DEFAULT,...PRESETS.sageGlasses}).pupil'),10);
for(const language of ['zh','en','ja']){
 for(const key of ['hair','ears','accessory','face'])assert.equal(run(`TEXT.${language}.${key==='ears'?'ear':key}Names.length`),run(`LIMITS.${key}`));
 assert.equal(run(`TEXT.${language}.pupilNames.length`),run('EXPRESSION_LIMITS.pupil'));
 assert.equal(run(`PRESET_NAMES.${language}.length`),run('Object.keys(PRESETS).length'));
}
// New hair must compose with every existing ornament, including hair-anchor consumers.
for(const hair of [12,13,14])for(let accessory=0;accessory<run('LIMITS.accessory');accessory++)assert.ok(!/undefined|NaN/.test(run(`renderAvatar({...DEFAULT,hair:${hair},accessory:${accessory}})`)));
for(const key of ['blueBonnet','sakuraRibbon','gemElf','shrineRibbon','mintSailor'])assert.ok(run(`validConfig({...DEFAULT,...PRESETS.${key}})`));
assert.notEqual(run('fingerprint({...DEFAULT,face:11,side:"left"})'),run('fingerprint({...DEFAULT,face:11,side:"right"})'));
assert.notEqual(run('renderAvatar({...DEFAULT,face:11,side:"left"})'),run('renderAvatar({...DEFAULT,face:11,side:"right"})'));
for(const language of ['zh','en','ja'])assert.equal(run(`TEXT.${language}.backgroundNames.length`),run('LIMITS.background'));
console.log('Expression migration, validation, distinct artwork and shared ear framing passed.');
