'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const ledger=JSON.parse(read('BRANCHES.md'));
const events=new Map();
for(const record of ledger.records){
 const state=JSON.parse(read(record));
 for(const field of ['purpose','requirements','constraints','acceptance','status','integration','evidence','next'])assert.ok(field in state,field);
 const eventPath=path.posix.join(path.posix.dirname(record),'events.jsonl');
 const entries=read(eventPath).trim().split(/\r?\n/).map(JSON.parse);
 assert.equal(new Set(entries.map(e=>e.id)).size,entries.length);
 const task=path.posix.basename(path.posix.dirname(record));
 for(const e of entries){events.set(`${task}:${e.id}`,e);events.set(`${eventPath}#${e.id}`,e);}
 for(const p of state.evidence.paths)assert.ok(fs.existsSync(path.join(root,p)),p);
}
for(const id of ledger.pending)assert.equal(events.get(id)?.type,'operation',id);
for(const c of ledger.changes){assert.ok(events.has(c.request));assert.ok(fs.existsSync(path.join(root,c.details)));for(const p of c.evidence)assert.ok(fs.existsSync(path.join(root,p)));}
console.log('Registry JSON, required fields, evidence paths, event uniqueness and pending intents validated.');
