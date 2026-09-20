'use strict';
// Front-hair artwork shares the existing face and accessory anchors. Each lock is
// a closed vector shape, so palette changes and standalone SVG export stay exact.
function illustratedHair(style, color) {
  if(style===15){
    const pig='#f8d7bd',pink='#ef9eaa';
    return path('M155 390Q116 268 208 215Q310 195 330 302Q285 360 205 408Z',pig)+path('M184 353Q164 286 216 260Q269 249 282 307Q246 339 184 353Z',pink)+path('M760 456Q796 354 879 362Q944 401 913 492Q873 543 803 513Z',pig)+path('M806 473Q826 402 881 408Q919 424 904 470Q891 505 861 492Q844 484 851 463Q857 448 874 455Q863 462 868 473Q879 483 889 468Q902 444 884 432Q845 423 833 482Z',pink)+ellipse(500,918,102,65,pink)+ellipse(466,918,14,20,'#6f3d4e')+ellipse(534,918,14,20,'#6f3d4e')+path('M390 358Q428 283 490 342Q535 260 588 347Q628 294 670 368Q604 397 535 379Q465 402 390 358Z',color);
  }
  // Feathered and curved reference cuts share long-hair anchors and rear layers.
  if(style===13||style===14){
    const shade=tone(color,-22),shine=tone(color,12);
    let out=illustratedHair(2,color);
    out+=path('M306 395Q447 268 626 349Q761 405 783 659L728 767Q743 590 652 463Q717 660 667 741Q616 727 599 671L610 750Q548 746 503 689L505 745Q449 715 421 638L412 704Q365 644 390 494Q299 621 207 680L267 555Q208 605 179 636Q191 476 306 395Z',color);
    out+=path('M497 343Q400 429 409 612Q431 469 517 379ZM586 374Q660 498 644 666Q672 528 586 374Z',shine);
    out+=path('M484 426Q437 568 505 745L487 674Q452 547 484 426ZM579 446Q623 625 610 750L590 696Q597 579 579 446Z',shade);
    if(style===13)out+=path('M256 449Q143 595 167 793L206 845 191 777 237 810Q209 715 250 625L283 550Q229 606 214 632ZM785 528Q892 742 811 910L774 945 792 883 747 913Q799 804 785 528Z',color);
    else out+=path('M257 536Q156 750 244 914Q271 957 318 956Q196 1007 179 846Q155 666 257 536ZM771 530Q886 743 821 933Q794 998 725 1003Q803 958 786 874Q825 754 771 530Z',color)+path('M229 580Q184 749 212 847M802 623Q847 788 813 888','none',`stroke="${shine}" stroke-width="13" stroke-linecap="round"`);
    return out;
  }
  // Reference fringe has blunt separated tips and a long swept left section.
  // It uses the same face/accessory anchors and rear silhouette as long straight hair.
  if(style===12){
    const edge=tone(color,-35),shade=tone(color,-19);
    let out=path('M164 780C109 615 119 414 325 337C556 247 781 341 835 546Q903 765 844 1000L783 1067Q821 859 769 657Q492 466 251 638L235 920Q155 862 164 780Z',shade);
    out+=path('M392 333C680 275 795 429 786 654L719 693L666 691L608 687L550 680L488 673L428 673L420 467Q358 602 229 697L247 498Z',color);
    out+=path('M171 705C126 509 212 360 405 323C605 278 783 367 827 559Q859 698 802 885Q786 933 739 956Q792 860 766 634L731 703L690 705Q711 608 688 533Q702 650 674 700L631 702Q660 589 635 488Q651 621 614 695L573 697Q616 568 586 437Q607 590 551 691L507 693Q553 537 524 395Q510 547 469 676L428 679Q478 526 448 409Q371 588 229 697Q203 812 245 887Q169 844 171 705Z',color,`stroke="${edge}" stroke-width="3" stroke-linejoin="round"`);
    out+=path('M402 342Q261 433 205 629M492 337Q340 409 279 557M668 374Q797 505 808 699','none',`stroke="${edge}" stroke-width="4" stroke-linecap="round"`);
    return out;
  }
  if(style>=8){
    const baseStyle=[0,3,6,4][style-8],shade=tone(color,-24);
    let out=illustratedHair(baseStyle,color);
    if(style===8)out+=path('M678 347Q367 260 164 614Q382 633 539 428Q468 591 384 646Q619 615 678 347Z',color)+path('M607 366Q384 388 238 555Q453 446 607 366Z',tone(color,14));
    if(style===9)out+=path('M190 553 294 566 296 805 182 805ZM711 570 811 552 838 805 721 805Z',color)+path('M200 581V783M739 597 754 783','none',`stroke="${shade}" stroke-width="9"`);
    if(style===10)for(const side of [185,825]){for(let i=0;i<7;i++)out+=ellipse(side+(i%2?13:-13),700+i*51,43,38,i%2?shade:color);out+=bow(side,1040,tone(color,-45),.4);}
    if(style===11)for(const side of [183,822])for(let i=0;i<6;i++){out+=ellipse(side+(i%2?20:-10),595+i*74,57,61,color);out+=path(`M${side-20} ${575+i*74}q-35 40 10 55`,'none',`stroke="${shade}" stroke-width="8" stroke-linecap="round"`);}
    return out;
  }
  const base = color, shade = tone(color, -22), deep = tone(color, -38), shine = tone(color, 14);
  let art = path('M156 793C110 602 135 410 340 334C553 249 776 350 832 532C929 678 917 825 879 951L804 975C859 808 767 654 716 570C594 465 334 471 258 625C221 713 216 793 230 851Z', shade);
  // Move side locks progressively outward below the crown; bangs/eyes retain their anchors.
  const openCheek = svg => `<g transform="matrix(1 0 .12 1 -39.6 0)">${svg}</g>`;
  const swept = [
    ['M505 331C359 309 189 413 164 611C151 686 156 737 177 774C166 626 273 612 371 492C337 568 285 631 250 660C387 619 481 508 505 331Z', base],
    ['M496 337C414 404 394 490 421 616C434 673 464 702 496 714L480 650C509 702 548 719 588 730L578 677L604 695C652 612 659 434 543 349Z', base],
    ['M545 338C653 348 764 444 794 584C819 703 799 811 744 870L789 852C766 914 736 936 702 948C794 955 854 881 864 784C897 584 794 365 602 333Z', base],
    ['M516 345C462 398 435 477 440 548C458 459 490 420 528 382C557 473 556 559 549 607C576 520 579 417 549 354Z', tone(color,7)],
    ['M482 344C349 370 242 455 194 591C248 488 336 452 414 399C359 457 320 493 292 508C390 471 459 405 482 344Z', tone(color,7)],
    ['M624 372C743 470 787 628 760 766C805 661 784 463 624 372Z', shine],
    ['M603 441C644 541 619 646 588 730L578 677C610 592 618 519 603 441Z', shade],
    ['M765 727C788 815 757 889 702 948C768 925 800 871 809 817Z', shade]
  ];
  if (style === 1 || style === 3) {
    art += path('M164 681C120 470 259 324 463 320C687 291 848 443 847 661L799 904L754 877L735 605C688 632 626 635 577 619L555 582L544 626C462 644 354 634 288 612L263 895L181 874Z', base);
    for (const [d,c] of [
      ['M464 337C342 373 275 460 247 575C304 495 351 470 400 425Z',shine],
      ['M512 337C469 435 459 542 474 630L499 630C483 510 505 413 539 345Z',shade],
      ['M577 345C631 422 657 525 647 632L670 627C684 509 642 407 577 345Z',shade],
      ['M301 417C239 556 241 748 263 895L229 874C204 685 219 520 301 417Z',shine],
      ['M706 437C786 541 793 726 754 877L785 890C829 711 786 518 706 437Z',shade]
    ]) art += path(d,c);
  } else {
    const transform=style===0?'translate(0 -12)':style===5?'translate(0 -6)':'translate(0 0)';
    art += `<g transform="${transform}">${swept.map(([d,c],i)=>[2,5,7].includes(i)?openCheek(path(d,c)):path(d,c)).join('')}</g>`;
  }
  if ([2,3,4,6].includes(style)) {
    art += '<g transform="matrix(1 0 .12 1 -39.6 0)">';
    art += path('M795 586C869 724 792 864 822 978C831 1019 859 1056 894 1079C831 1080 803 1038 787 1007L802 1082C724 1031 743 953 749 886C710 942 695 975 659 982C742 899 771 749 750 662Z',base);
    art += path('M798 669C830 785 779 891 791 977C764 926 786 838 784 795C776 880 743 944 708 957C759 876 780 778 775 699Z',shade);
    art += path('M807 988C815 1026 846 1061 869 1070C831 1066 805 1031 794 1010Z',deep);
    art += '</g>';
  }
  if (style===4) {
    art+=path('M811 706C861 755 807 820 830 870C860 929 831 987 804 1015C874 985 891 924 857 872C833 832 892 772 842 727Z',shine);
  }
  if ([0,5,6,7].includes(style)) {
    art+=path('M491 345C536 255 517 186 424 205C520 136 641 244 537 335Z',shine);
  }
  return art;
}
