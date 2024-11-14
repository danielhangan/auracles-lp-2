
var wW 	= window.innerWidth;
var wH 	= window.innerHeight;

var bodyCopy = "Auracles empowers music makers worldwide to finally connect, verify and manage their assets and information, to fill the most critical gap in the business of music.<br><br>Launching on <b>December 9, 2024</b>, Auracles invites music makers to collectively contribute to the structured, transparent layer-of-truth for works and contributors.<br><br>With AI accelerating the need for music data provenance, this timely initiative led by Imogen Heap will make ethical practices easy for current and future services.<br><br><br>Want to be part of the launch?";

function NSLog( message )
{
	console.log( message );
}

function setup( )
{
	nCDIV		( "mainColumn", 			"mainContainer", 		"mainColumn" );
	nCDIV		( "mainColumnContainer", 	"mainColumn", 			"mainColumnContainer" );
	
	nCDIV		( "auracleBrand", 			"mainColumnContainer", 		"auracleBrand" );
	coverBGDIV	( "auracleBrand", 			"url( img/auracles.png )" );
	
	nCDIV		( "mainBody", 				"mainColumnContainer", 	"mainBody" );

	nCDIV		( "mainCopy", 				"mainBody", 			"mainCopy" );
	fillDIV		( "mainCopy", 				bodyCopy );

	nCDIV		( "hostButton", 			"mainBody", 			"hostButton" );
	fillDIV		( "hostButton", 			"Yes! Tell me more" );
	addActDIV	( "hostButton", 			noF, noF, noF, goHost );

	addCircles( );
	
	checkHeight( );
}

function addCircles( )
{
	var circles = 4;

	for( var c=0; c<circles; c++ )
	{
		var cRad 	= 640 + (200 * c);
		var cMarg 	= 0 - (cRad * 0.5);
		var cO 		= 1 / (c + 0.25);

		nCDIV	( "auracleCircle-"+c, 		"auracleBrand", 		"auracleCircle pulseMove" );
		sizDIV	( "auracleCircle-"+c,		cRad, 	cRad	);
		margDIV	( "auracleCircle-"+c,		cMarg,	cMarg	);
		oDIV	( "auracleCircle-"+c,		cO );
	}
}

function goHost( )
{
	window.open( "https://launch.auracles.io/" );
}

function checkHeight( )
{
	var bodyHeight = getDIVHeight( "mainBody" );
	
	if( bodyHeight < ( wH / 0.8 ) )
	{
		classDIV( "auracleBrand", 	"auracleBrand auracleBrandLower" );
		classDIV( "mainBody", 		"mainBody mainBodyLower" );
	}
}
