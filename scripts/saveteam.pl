#!/bin/perl

#
# Author: Groesswang/Zunzer (P.I.C.S.  www.pics.co.at  office@pics.co.at)
# Page: saveteam.pl
# Desc: Perlscript zum Speichern der geaenderten Mitarbeiter
# 	www.sar.at
# date: 10-07-2001 gc
#

# -- Umgebung und empfaenger konfigurieren
$len       = $ENV{'CONTENT_LENGTH'};
$remotehost= $ENV{'REMOTE_HOST'};
$remoteaddr= $ENV{'REMOTE_ADDR'};

if ( $len ne "" )
{
	read(STDIN, $buffer,$len);

	@pairs = split(/&/, $buffer);

	foreach $pair (@pairs)
	{
		($name, $value) = split(/=/, $pair);

		$value =~ tr/+/ /;
		$value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;

		if ( defined($FORM{$name}) )
		{
			$FORM{$name} = join(' + ',$FORM{$name},$value);
		}
		else
		{
			$FORM{$name} = $value;
		}
	}
}

	
	open (MYFILE,">../team.js") or
	dienice("Fehler beim Speichern: $!");
	print MYFILE $FORM{'js'};
	print MYFILE "\n";
	close(MYFILE) || die "Fehler beim Erstellen der Datei";



print "Content-Type: text/html\n\n";
print "<HTML><HEAD><TITLE>SAR - Teamwartung</TITLE></HEAD>\n";
print "<BODY bgcolor=\"#FFFFFF\">\n";

print "<br><br>Aenderungen wurden gespeichert!<br><br>";

print "</BODY></HTML>\n";

close (STDOUT);
