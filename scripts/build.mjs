import{cp,mkdir,rm}from'node:fs/promises';
import{resolve}from'node:path';

const root=resolve(import.meta.dirname,'..');
const dist=resolve(root,'dist');
await rm(dist,{recursive:true,force:true});
await mkdir(resolve(dist,'assets'),{recursive:true});
for(const file of['index.html','styles.css','app.js','analysis-core.js'])await cp(resolve(root,file),resolve(dist,file));
await cp(resolve(root,'assets/tshta-logo.png'),resolve(dist,'assets/tshta-logo.png'));
console.log('Built dist with 5 public files.');
