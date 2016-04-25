// Image Loading/Changing functions
// copyright 2000 Ing. Christian Groesswang
// contact   : http://www.pics.co.at, office@pics.co.at
// last edit : 15-03-2000
// In order to use this code you must keep this disclaimer

function preloadImage(imgObj,imgSrc) 
{
	if (document.images) 
	{
		eval(imgObj+' = new Image()')
		eval(imgObj+'.src = "'+imgSrc+'"')
	}
}

function changeImage(layer,imgName,imgObj) 
{
	if (document.images) 
	{
		if (document.layers && layer!=null) 
		{	
			eval('document.layers["'+layer+'"].document.images["'+imgName+'"].src = "'+imgObj+'"');
		}
		else 
		{
			eval('document.images["'+imgName+'"].src = "'+imgObj+'"');
		}
	}
}

