//LMSOFT Web Creator Pro, Version:6.0.0.8
//LMSOFT Kernel 90

var projectroot="./";
InitResources2('fr');
var LMObjects = new Array();
var objindex=0;
var fontbase=96.;
//---------------------------------------------------------------------------------------------
try {
if(isValideBrowser(7.00,5.00)) {
//---------------------------------------------------------------------------------------------
LMObjects[objindex++] = LMDiv("Page",1,0,0,null,0,null,null,null,null,0);
defpagewitdh=1000;
LMObjects[objindex++] = LMDiv("PanelHeader",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxHeader",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img1",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img1=FindTagFromId('Img1');
LMObjects[objindex++] = LMImage("Img2",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img2=FindTagFromId('Img2');
LMObjects[objindex++] = LMDiv("PanelMenu",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxMenu",1,1,0,null,0,null,null,null,null,0);
menusystemmodel001Show("Menu1");
LMObjects[objindex++] = LMDiv("Panel1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("PanelCenter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("DecoEdit",1,1,0,null,0,null,null,null,null,0);
if(is.ns) DecoEdit=FindTagFromId('DecoEdit');
LMObjects[objindex++] = LMDiv("PanelBanner",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxBanner",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img7",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img7=FindTagFromId('Img7');
branchlist = new Array();
LMObjects[objindex++] = LMText("Text1",1,1,0,null,0,null,branchlist,null,null);
LMObjects[objindex++] = LMButton("But3",1,1,0,null,0,null,null,null,null,null,0,0,0);
LMObjects[objindex++] = LMDiv("PanelBlocs",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box4",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img3",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img3=FindTagFromId('Img3');
LMObjects[objindex++] = LMDiv("Titre3",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img10",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img10=FindTagFromId('Img10');
LMObjects[objindex++] = LMDiv("Titre2",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img4",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img4=FindTagFromId('Img4');
LMObjects[objindex++] = LMDiv("Titre1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("Box3",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMImage("Img5",1,1,0,null,0,null,null,null,null,0);
if(is.ns) Img5=FindTagFromId('Img5');
LMObjects[objindex++] = LMDiv("Titre4",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("PanelFooter",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter1",1,1,0,null,0,null,null,null,null,0);
LMObjects[objindex++] = LMDiv("BoxFooter2",1,1,0,null,0,null,null,null,null,0);
//---------------------------------------------------------------------------------------------
}
}catch(e) {
alert(e.message);
}
SetBaseColor(0x3f3,0x3f7,0x7c);
LMObjectAnimate();

