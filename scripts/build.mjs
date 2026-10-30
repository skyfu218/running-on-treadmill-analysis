import{cp,mkdir,readFile,rm,writeFile}from'node:fs/promises';
import{resolve}from'node:path';

const root=resolve(import.meta.dirname,'..');
const dist=resolve(root,'dist');
await rm(dist,{recursive:true,force:true});
await mkdir(resolve(dist,'assets'),{recursive:true});
const core=(await readFile(resolve(root,'analysis-core.js'),'utf8')).replaceAll('export ','');
const app=(await readFile(resolve(root,'app.js'),'utf8'))
  .replace(/^import\{analyzeGait\}from'\.\/analysis-core\.js';\n/m,'')
  .replace(/^import\{PoseLandmarker,FilesetResolver\}from'([^']+)'[^\n]*\n/,(_,url)=>`let PoseLandmarker,FilesetResolver;\nasync function loadMediaPipe(){if(PoseLandmarker)return;({PoseLandmarker,FilesetResolver}=await import('${url}'))}\n`)
  .replace('async function ensurePose(){if(pose)return pose;','async function ensurePose(){if(pose)return pose;await loadMediaPipe();');
const bundle=`(()=>{\n${core}\n${app}\n})();\n`;
await writeFile(resolve(root,'app.bundle.js'),bundle);
for(const file of['index.html','styles.css','app.bundle.js'])await cp(resolve(root,file),resolve(dist,file));
await cp(resolve(root,'assets/tshta-logo.png'),resolve(dist,'assets/tshta-logo.png'));
console.log('Built standalone bundle and dist with 4 public files.');
