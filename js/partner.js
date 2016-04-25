// javascript fuer Skoda Zubehoer
// (c) Ing. Christian Groesswang, P.I.C.S., http://www.pics.co.at
// Version 24-04-2001, gc


var aPartner = new Array();
var gCurrentPartner = 0;			// aktuelle Kategorie

function addF(pName,pStrasse, pOrt, pTelefon, pFax, pEmail, pUrl, pLogo, pMarken)
{
// 		Firmenname, Adresse, PLZ/Ort, Tel, Fax, EMail, WWW-Adr., Logoname, Vertragspartner
//		addF('SAMTC','Alpenstrasse 102-104','5020 Salzburg','0662/63999','','','','','&Ouml;AMTC');

	var newPos=aPartner.length;
	// und die Elemente einfügen
	aPartner[newPos]=new Array(pName,pStrasse, pOrt, pTelefon, pFax, pEmail, pUrl, pLogo, pMarken);
	// 							0		1		2		3		4		5		6	7		8
}

function partnerCreateRow(pID,pBGColor)
{
	// erzeugt eine Zeile des Artikels
	
	var html='';
	html+='<tr><td width="220" bgcolor="#'+pBGColor+'" class="partner'+pBGColor+'">&nbsp;';
	html+='<a href="javascript:partnerShowInfo('+pID+')" class="partner'+pBGColor+'">'+aPartner[pID][0]+'</a>';
	html+='</td></tr>';
	return html;
}
	
function partnerTabelle()
{
	// Gibt die Liste der Artikel der Kategorie aus
	var html='';
	var bgColor='EFEFEF';
	html+='<table cellspacing="0" cellpadding="1" border="0">';
	for (j = 0; j < aPartner.length; j++) 
	{
		if (bgColor=='EFEFEF')
		{
			bgColor='007FFF';
		}
		else
		{
			bgColor='EFEFEF';
		}
		html=html+partnerCreateRow(j,bgColor);
	}
	html+='</td></tr></table>';
	return html;
}


function partnerShowInfo(pID)
{
	// Gibt die Infos zur Felge im Layer aus
	var html='';
	html+='<table cellspacing="0" cellpadding="0" border="0" width="370" bgcolor="#EFEFEF">';
	html+='<tr><td width="370" height="75" class="partnerHead">';
	if (aPartner[pID][7]=='')
	{
		html+='&nbsp;';
	}
	else
	{
		html+='<img src="'+aPartner[pID][7]+'">';
	}
	html+='</td></tr>';
	html+='<tr><td height="40" class="partnerHead">';
	html+=aPartner[pID][0];
	html+='</td></tr>';
	html+='<tr><td height="150" class="partnerDetail" valign="top">';
	html+='<i>('+aPartner[pID][8]+')</i><br>';
	html+=''+aPartner[pID][1]+'<br>';
	html+=''+aPartner[pID][2]+'<br>';
	if (aPartner[pID][3]!='')
	{
		html+='Tel.:'+aPartner[pID][3]+'<br>';
	}
	if (aPartner[pID][4]!='')
	{
		html+='Fax :'+aPartner[pID][4]+'<br><br>';
	}
	if (aPartner[pID][6]!='')
	{
		html+='Internet : <a href="'+aPartner[pID][6]+'" target="_blank" class="partnerDetail">'+aPartner[pID][6]+'</a><br>';
	}
	if (aPartner[pID][5]!='')
	{
		html+='E-Mail : <a href="mailto:'+aPartner[pID][5]+'" class="partnerDetail">'+aPartner[pID][5]+'</a><br>';
	}
	
	html+='</td></tr>';
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

