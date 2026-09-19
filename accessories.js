'use strict';
// Reference-inspired ensembles have rear and front passes so ribbon tails never
// cover the face. All shapes stay inside the same character transform as the hair.
function referenceAccessory(s, layer) {
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
