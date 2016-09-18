function menusystemmodel001Show(mnuname) {
	x=0;y=0;
	z_index++;
	var MenuSystemItems = null;
	var miindex= 0;
	var preventopti;
	var index= z_index;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem2",0,0,152,31,0,0,null,0,null,null,null,null,projectroot+"menusystemmodel001/menusystemitem0.png",projectroot+"menusystemmodel001/menusystemitem0_over.png",null, "cursor:inherit;position:absolute;left:57px;top:9px;font-weight:0;font-family:Verdana;font-size:9pt;color:rgb(255,255,255);", "cursor:inherit;position:absolute;left:57px;top:9px;font-weight:0;font-family:Verdana;font-size:9pt;color:rgb(255,255,255);", "вмвмв");
	preventopti = "./menusystemmodel001/menusystemitem0.png";
	preventopti = "./menusystemmodel001/menusystemitem0_over.png";
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem3",0,30,152,31,0,0,null,0,null,null,null,null,projectroot+"menusystemmodel001/menusystemitem1.png",projectroot+"menusystemmodel001/menusystemitem1_over.png",null, "cursor:inherit;position:absolute;left:53px;top:8px;font-weight:0;font-family:Verdana;font-size:9pt;color:rgb(255,255,255);", "cursor:inherit;position:absolute;left:53px;top:8px;font-weight:0;font-family:Verdana;font-size:9pt;color:rgb(255,255,255);", "вмвмвм");
	preventopti = "./menusystemmodel001/menusystemitem1.png";
	preventopti = "./menusystemmodel001/menusystemitem1_over.png";
	var MenuSystemModel001_MNU1 = new LMMenu(mnuname, "MenuSystemModel001_MNU1",x+250,y+0,152,61,0,0,null,0,null,MenuSystemItems,0);
	LMObjects[objindex++]= MenuSystemModel001_MNU1;

	MenuSystemItems = new Array();
	miindex=0;
	MenuSystemItems[miindex++] = new LMMenuItemStruct(mnuname + "_MenuItem1",0,0,250,30,0,0,null,0,null,null,null,null,projectroot+"menusystemmodel001/menusystemitem2.png",projectroot+"menusystemmodel001/menusystemitem2_over.png",MenuSystemModel001_MNU1, "cursor:inherit;position:absolute;left:102px;top:8px;font-weight:0;font-family:Verdana;font-size:9pt;color:rgb(255,255,255);", "cursor:inherit;position:absolute;left:102px;top:8px;font-weight:0;font-family:Verdana;font-size:9pt;color:rgb(255,255,255);", "свсвсвс");
	preventopti = "./menusystemmodel001/menusystemitem2.png";
	preventopti = "./menusystemmodel001/menusystemitem2_over.png";
	var MenuSystemModel001_MNU2 = new LMMenu(mnuname, mnuname,x+0,y+0,250,30,1,0,null,0,null,MenuSystemItems,1);
	LMObjects[objindex++]= MenuSystemModel001_MNU2;

	AddAnchorTagToObject(mnuname);
	RegisterMainMenu(MenuSystemModel001_MNU2);

	ReIndexMenu(MenuSystemModel001_MNU2, index);

}
