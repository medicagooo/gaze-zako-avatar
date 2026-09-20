'use strict';
// Shared by the blossom ornament and the fixed, non-rotating sakura background.
function sakuraFlower(x,y,color,scale=1){
  return `<g transform="translate(${x} ${y}) scale(${scale})">${[0,72,144,216,288].map(angle=>`<g transform="rotate(${angle})">${path('M0 0C-31-9-45-41-18-64L-7-56 3-68C32-43 29-13 0 0Z',color,'stroke="#d0b6bd" stroke-width="2"')}<path d="M0-8 0-42" stroke="#d6c781" stroke-width="3"/>${ellipse(0,-40,3.5,3.5,'#d6c781')}</g>`).join('')}${ellipse(0,0,11,11,'#e1cf83')}</g>`;
}

function gemCirclet(color){
  const silver='#dfdeea',edge='#9393aa';
  return `<g data-ornament="circlet" stroke="${edge}" stroke-width="3" stroke-linejoin="round">${path('M322 398Q407 350 484 381L485 276Q552 280 581 339Q602 296 655 302L608 384Q697 379 772 442L716 429Q632 402 553 483Q456 385 322 421ZM510 383 552 437 597 395 557 364Z',silver,'fill-rule="evenodd"')}${path('M553 464 580 527 550 602 524 533Z',color)}${path('M553 474 552 548 531 532Z',tone(color,48),'stroke="none"')}${path('M552 548 573 528 550 589Z',tone(color,-27),'stroke="none"')}</g>`;
}

// IDs 22-28 use rear passes for hats/ribbons and front passes for pins/circlets.
// All ornament colors derive from accessoryColor; no external image dependencies.
function referenceFiveAccessory(s,layer){
 const id=s.accessory,c=s.accessoryColor,dark=tone(c,-28),pale=tone(c,24),white='#fff8f4';
 const tails=(x,y,flip=1)=>`<g transform="translate(${x} ${y}) scale(${flip} 1)">${path('M0 0Q108 180 78 415L25 368-12 407Q30 201-30 15Z',c)}${path('M3 19Q64 183 47 338L33 315Q52 167 3 19Z',pale)}</g>`;
 if(id===22){
  if(layer==='rear')return path('M163 487Q91 258 284 205Q562 105 779 295Q853 384 869 615L790 585Q616 318 264 397Z',c)+path('M670 328Q803 419 842 565L854 912 795 955 791 600Z',pale)+tails(806,535);
  const flower=`<g transform="translate(279 358) rotate(-14)">${[-90,0,90,180].map(angle=>`<g transform="rotate(${angle})">${path('M0 0Q-53-38 0-111Q57-39 0 0Z',c)}${path('M0-7Q-26-35 0-66Q23-32 0-7Z',dark)}</g>`).join('')}${ellipse(0,0,17,18,dark)}</g>`;
  return path('M174 435Q257 269 430 280Q571 268 648 344Q677 374 703 385L825 437 849 518','none','stroke="#e7f3ff" stroke-width="16" stroke-linecap="round"')+flower+`<g transform="translate(833 527) rotate(3)">${path('M0-7Q-72-85-65-15Q-95 63-8 27Q71 87 66 10Q77-64 0-7Z',c,`stroke="${dark}" stroke-width="3"`)}${ellipse(-21,6,5,6,'#ffffff')}${ellipse(24,6,5,6,'#ffffff')}<path d="M-5 18q5 10 10 0q5 10 10 0" fill="none" stroke="white" stroke-width="2"/></g>`;
 }
 if(id===23){
  if(layer==='rear')return tails(221,507,-1)+tails(784,497)+bow(475,292,c,1.38);
  return path('M221 514Q242 317 486 314Q721 314 793 533','none',`stroke="${c}" stroke-width="13"`)+sakuraFlower(796,534,'#fff3f4',1.03)+bow(229,486,c,.48);
 }
 if(id===24){
  if(layer==='rear')return bow(217,386,c,1.08)+bow(802,418,c,1.06)+tails(193,458,-1)+tails(828,473)+path('M121 618 162 687 118 752 164 828 143 850 94 751 140 686 102 633ZM873 620 851 686 895 752 866 838 889 815 915 751 874 685 894 630Z','#dcf9ff');
  return gemCirclet(c);
 }
 if(id===25){
  if(layer==='rear'){
   const wing=(flip)=>`<g transform="translate(500 389) scale(${flip} 1)">${path('M-8 7Q-151-109-360-99L-375-17-359 51-373 105-335 192-116 99Z',white)}${path('M-9 9Q-167-85-320-87L-330-24-316 50-325 106-296 166-110 89Z',c)}<path d="M-292-74-268-45-289-19-263 10-281 39-253 69-270 100-244 133" fill="none" stroke="${white}" stroke-width="11"/>${[-46,12,70].map(y=>ellipse(-306+(y+46)/7,y,5,5,white)).join('')}</g>`;
   return wing(1)+wing(-1)+tails(204,509,-1)+tails(802,509);
  }
  const cuff=(x,y)=>`<g transform="translate(${x} ${y})">${path('M-42-65-30-83-15-69 0-85 16-69 34-78 43-57 35 54 46 69 19 82 3 69-17 84-42 73-34 48Z',white)}${path('M-38-48H38L29 48H-30Z',c)}<path d="M-30 27H30" stroke="${white}" stroke-width="7"/></g>`;
  return cuff(205,799)+cuff(829,815);
 }
 if(id===26){
  if(layer==='rear'){
   const striped=(x,y,flip)=>`<g transform="translate(${x} ${y}) scale(${flip} 1)">${path('M0 5Q-86-151-124-119Q-156-64-51 31Q-146 34-137 113Q-52 119 1 44L50 250 79 197Q45 77 10 17Z',c)}${path('M-129-83Q-82-70-43 12L-57 20Q-102-47-134-52ZM-132 65Q-78 48-21 29L-28 45Q-79 70-133 86ZM24 81 38 81 64 176 55 193Z',white)}</g>`;
   return striped(211,465,1)+striped(817,548,-1);
  }
  return `<g transform="translate(0 55) rotate(-12 444 308)">${path('M307 327 312 245Q334 202 442 198Q542 201 565 241L572 325Z',c)}${path('M312 286Q439 261 568 287L570 304Q439 281 310 307Z',white)}${ellipse(439,220,111,29,pale)}<g transform="translate(442 258)" stroke="#efd28a" stroke-width="7" fill="none"><circle cy="-25" r="9"/><path d="M0-16V30M-29 8Q0 56 29 8M-15-7H15M-29 8-31 24M29 8 31 24"/></g></g>`;
 }
 if(layer==='rear')return '';
 if(id===27)return sakuraFlower(788,523,c,1.05);
 if(id===28)return gemCirclet(c);
 return '';
}

// Reference-inspired ensembles have rear and front passes so ribbon tails never
// cover the face. All shapes stay inside the same character transform as the hair.
function referenceAccessory(s, layer) {
  if (s.accessory >= 22) return referenceFiveAccessory(s, layer);
  if (s.accessory >= 10) return layer === 'front' ? sampleAccessory(s) : '';
  const moon = s.accessory === 9;
  if (s.accessory !== 8 && !moon) return '';
  const color = s.accessoryColor, dark = tone(color, -30), pale = tone(color, 30);
  let out = '';
  if (layer === 'rear') {
    if (!moon) {
      out += path('M467 345C365 236 180 185 103 179C77 262 92 365 155 459L445 400Z',color);
      out += path('M510 344C628 258 803 260 890 276C923 354 901 465 856 517L557 423Z',color);
      out += path('M108 184 153 198 166 236 116 252 148 281 111 298 147 331 105 349Z','#eef7ff');
      out += path('M881 280 891 317 856 340 894 370 858 393 886 425 859 469 822 424Z','#eef7ff');
      out += path('M822 626 953 551 927 617 850 687ZM839 695 984 726 958 786 853 752Z',pale);
      out += path('M822 626 890 605 927 617 850 687ZM839 695 912 750 958 786 853 752Z',dark);
      out += path('M890 605 953 551 902 566ZM912 750 984 726 941 726Z','#f4fcff');
      out += path('M845 759 927 906 884 964 826 809Z',color);
      out += path('M845 759 887 873 927 906 880 883Z',pale);
    } else {
      out += path('M730 490Q831 342 927 340Q994 472 916 630L990 712 948 777 819 700Z',dark);
      out += path('M865 652 1001 785 941 827 859 756 914 922 846 909 803 701Z',color);
      out += `<g stroke="${tone(color,-47)}" stroke-width="5" fill="none"><path d="M814 421Q849 443 819 484T822 542M854 416Q810 457 861 485M787 484Q833 514 788 552M854 525Q800 555 838 594"/></g>`;
      out += `<g transform="translate(931 742) scale(.8)" fill="none" stroke="#e9cf8e" stroke-width="3">${[0,1,2].map(i=>`<g transform="translate(${i*35} ${i%2*14})"><path d="M0 0C-28-28-43 15-20 30C-10 53 21 39 23 18C44-6 12-23 0 0ZM0 0C-18-3-16 21 1 22C21 20 14 0 0 0ZM-6 8Q8 1 10 14L0 21Z"/></g>`).join('')}</g>`;
    }
    return out;
  }
  if (!moon) {
    out += path('M477 341C380 263 285 306 243 359C285 432 402 450 477 341Z',tone(s.hairColor,20));
    out += path('M533 347C625 267 738 310 789 379C733 448 619 446 533 347Z',tone(s.hairColor,17));
    out += path('M489 339C514 298 491 233 414 249C506 174 609 291 532 337Z',tone(s.hairColor,25));
    out += ellipse(506,346,28,23,s.hairColor);
  } else {
    out += `<path d="M211 485C238 267 696 221 805 511" fill="none" stroke="#dfdbf0" stroke-width="44"/>`;
    for(let i=0;i<10;i++) {
      const angle=(-165+i*17)*Math.PI/180, x=506+305*Math.cos(angle), y=520+208*Math.sin(angle);
      out += `<g transform="translate(${x} ${y}) rotate(${angle*180/Math.PI+90})">${path('M-43 8-47-37Q-48-53-26-55L22-55Q47-53 47-37L43 8Z','#faf8ff')}${path('M25-54Q44-47 45-35L40 8H23Z','#dfdbf0')}</g>`;
    }
    out += `<path d="M211 496C254 300 700 274 805 521" fill="none" stroke="${dark}" stroke-width="15"/>`;
    out += path('M258 441C288 365 364 317 451 314C344 359 312 399 292 471Z','#7ba8bc');
    out += path('M636 333C732 371 785 469 787 581C761 478 711 389 636 333Z','#7ba8bc');
    out += `<g transform="translate(907 621) rotate(-12)">${path('M17-38C-33-54-63 7-24 34C-2 50 27 36 37 17C1 34-22-7 17-38Z','#e7c980')}<g transform="translate(13 -7) scale(.43)">${star(0,0,'#f2d992')}</g></g>`;
  }
  return out;
}

// IDs append to existing choices so saved avatars retain their original accessories.
function sampleAccessory(s) {
  const c=s.accessoryColor;
  if(s.accessory===21){
    const edge=tone(c,-95);
    return `<g transform="translate(280 486) rotate(-4)" stroke="${edge}" stroke-width="4" stroke-linejoin="round">${path('M-7 4-58 52Q-72 56-78 38L-88 7-22-13ZM12 3 71 20 76 47Q75 57 56 59L15 24Z',c)}${path('M-12-5Q-90-72-87-29L-85 3Q-82 20-18 7ZM12-5Q80-57 83-16Q90 22 56 34Q43 39 13 8Z',c)}<rect x="-15" y="-17" width="30" height="34" rx="7" fill="${c}"/>${path('M-72 68H77V77H-72ZM-73 104H76V113H-73Z',c)}</g>`;
  }
  if(s.accessory===20){
    const ribbon=(x,y,scale)=>`<g transform="translate(${x} ${y}) scale(${scale})">${path('M-8-5Q-75-93-98-65L-113-32Q-112-21-19 9L-52 93Q-8 88 29 101Q42 32 12 3Z',c)}${ellipse(0,0,15,17,tone(c,-8))}</g>`;
    return ribbon(227,420,.85)+ribbon(809,638,.7)+`<g transform="rotate(-3 280 552)">${path('M245 519Q263 525 325 521L326 547Q288 541 242 545Z',c)}${path('M247 560Q281 570 326 563L329 589Q281 580 244 584Z',c)}</g>`;
  }
  if(s.accessory===16)return `<g transform="translate(275 510) rotate(-15)">${path('M20-53C-57-53-73 41-6 55Q31 58 49 28C-13 46-41-17 20-53Z',c)}</g>`;
  if(s.accessory===17)return path('M266 494Q273 440 321 461M321 461 334 509','none','stroke="#779875" stroke-width="8"')+ellipse(263,513,25,27,c)+ellipse(334,524,25,27,c)+path('M313 461Q320 425 356 448Q343 473 313 461Z','#88ad84');
  if(s.accessory===18){let out='';for(let i=0;i<11;i++){const x=240+i*51,y=385+Math.pow(i-5,2)*4;out+=ellipse(x,y,19,21,c)+ellipse(x-5,y-6,5,6,'#ffffff');}return out;}
  if(s.accessory===19)return path('M272 540Q183 541 186 468L229 499Q187 436 211 413L249 479Q226 418 252 408L297 513Q307 534 272 540Z',c)+ellipse(290,529,16,19,tone(c,-24));
  if(s.accessory===10) return bow(288,511,c,.4)+bow(302,564,c,.4);
  if(s.accessory===11) return bow(246,431,c,.55)+`<g stroke="${c}" stroke-width="10" stroke-linecap="round"><path d="M234 485 283 490M240 513 288 518"/></g>`;
  if(s.accessory===12) return `<g transform="translate(278 513) rotate(-14)">${path('M-37-16Q-55-36-61-13Q-73 8-47 13L-21 11 21 11 47 13Q73 8 61-13Q55-36 37-16Z',c)}</g>`;
  if(s.accessory===13) return bow(237,540,c,.35)+bow(760,552,c,.35)+`<g fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"><path d="M710 481l16-13 15 14 17-12M719 510l16-13 15 14 17-12"/></g>`;
  if(s.accessory===14) return path('M698 471 724 459 752 554 727 563Z',c)+path('M684 525 782 510 789 532 691 548Z',c)+ellipse(730,547,17,18,c);
  if(s.accessory===15) {
    let out='<path d="M579 322Q750 362 798 530" fill="none" stroke="'+c+'" stroke-width="27"/>';
    for(let i=0;i<8;i++)out+=ellipse(599+i*26,330+i*i*3,22,29,c,`transform="rotate(${-25+i*10} ${599+i*26} ${330+i*i*3})"`);
    return out+`<g stroke="${c}" stroke-width="11"><path d="M261 497 318 519M267 529 310 481"/></g>`;
  }
  return '';
}
