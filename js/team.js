// javascript fuer Skoda Zubehoer
// (c) Ing. Christian Groesswang, P.I.C.S., http://www.pics.co.at
// Version 24-04-2001, gc


var aTeam = new Array();
var gCurrentteam = 0;			// aktuelle Kategorie

function addF(pName,pFunktion, pBild)
{

	var newPos=aTeam.length;
	// und die Elemente einfügen
	aTeam[newPos]=new Array(pName,pFunktion, pBild);
	// 							0		1		2		3		4		5		6	7		8
}

function teamCreateCell(pID,pBGColor)
{
	// erzeugt eine Zelle 
	
	var html='';
	html+='<td width="145" bgcolor="#'+pBGColor+'" class="team'+pBGColor+'">&nbsp;';
	html+='<a href="javascript:teamShowInfo('+pID+')" class="team'+pBGColor+'">'+aTeam[pID][0]+'</a>';
	html+='</td>';
	return html;
}
	

function teamTabelle()
{
	var html='';
	var bgColor='EFEFEF';
	html+='<table cellspacing="1" cellpadding="1" border="0">';
	for (j = 0; j < aTeam.length; j++) 
	{
		aktNr = j+1;
		
		if (j % 2 == 0)
		{
			if (bgColor=='EFEFEF')
			{
				bgColor='007FFF'
			}
			else
			{
				bgColor='EFEFEF'
			}
		}	
		
		if (aktNr % 2 == 1)	html+='<tr>';
		html=html+teamCreateCell(j,bgColor);
		if (aktNr % 2 == 1)	html+='<td class="ar7w" width="5">&nbsp;</td>';
		if (aktNr % 2 == 0)	html+='</tr>';
	}
	html+='</table>';
	return html;
}


function teamShowInfo(pID)
{
	// Gibt die Infos zur Felge im Layer aus
	var html='';
	html+='<table cellspacing="0" cellpadding="0" border="0" width="300" bgcolor="#EFEFEF">';
	html+='<tr><td width="120" height="160">';
	if (aTeam[pID][2]=='')
	{
		html+='<img src="fotos/kein.gif" width="120" height="160" alt="'+aTeam[pID][0]+'">';
	}
	else
	{
		html+='<img src="fotos/'+aTeam[pID][2]+'" width="120" height="160" alt="'+aTeam[pID][0]+'">';
	}
	html+='</td>';
	html+='<td width="180" class="teamDetail" align="center" style="border-left:1px solid #CCCCCC;">';
	html+='<span class="teamHead">'+aTeam[pID][0]+'</span><br>';
	html+=aTeam[pID][1]+'<br>';
	html+='</td>';
	html+='</tr>';
	html+='</table>';
	dDetail=new DynLayer("divDetail");
	dDetail.write(html);
}



function html2text(pHtml)
{
	// wandelt die HTML-Umlaute in normale um
	var altText='';
	altText=pHtml;
	altText = altText.replace(/&Auml;/,"Ä");
	altText = altText.replace(/&Ouml;/,"Ö");
	altText = altText.replace(/&Uuml;/,"Ü");
	altText = altText.replace(/&auml;/,"ä");
	altText = altText.replace(/&ouml;/,"ö");
	altText = altText.replace(/&uuml;/,"ü");
	altText = altText.replace(/&szlig;/,"ß");
	return altText;
}	

