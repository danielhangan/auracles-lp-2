var showMe 	= false;//true;//

function getQueryParams()
{
    var qs = document.location.search;
    
    qs = qs.split("+").join(" ");
    
    var params = {}, tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;
    
    while (tokens = re.exec(qs))
    {
        params[decodeURIComponent(tokens[1])]
        = decodeURIComponent(tokens[2]);
    }
    
    return params;
}

//var query = getQueryParams(document.location.search);
//alert(query.foo);

function nCDIV( thisDIV, thisParent, thisClass )
{
	//NSLogFunction( "nCDIV *************** " + thisDIV );

    nDIV    ( thisDIV, thisParent );
    fillDIV ( thisDIV, "" );

    if( showMe )
    {
		classDIV	( thisDIV, thisClass + "  showMe" );
		//addActDIV	( thisDIV, noF, noF, testDown, testUp );
	}
	else
	{
		classDIV( thisDIV, thisClass );
	}
	return;
}

function localBGDIV( thisDIV, thisURL )
{
	//NSLogFunction( "localBGDIV( " +thisDIV+ ", " +thisURL+ " )" );

	coverBGDIV( thisDIV, thisURL );
	
	return;
}

function deSpace( str )
{
	var strSplit = str.split( " " )
	
	return strSplit.join( "" );
}

function dePlus( str )
{
	var strSplit = str.split( "+" )
	
	return strSplit.join( " " );
}

function coreHyphen( str )
{
	var strSplit = str.split( " - " )
	
	return strSplit[ 0 ];
}

function spacePlus( str )
{
	var splitSpace = str.split( " " );
	
	if( splitSpace.length > 1 )
	{
		return splitSpace.join( "+" );
	}
	else
	{
		return str;
	}
	
}

function coreElement( str )
{
	var splitCore = str.split( " (" );
	
	return splitCore[ 0 ];
}

function deAndAmp( str )
{
	var splitString = str.split( " &amp; " );
	
	return splitString.join( " & " );
}

//---------------------------------------------------------

function checkSimilarity( s1, s2 )
{
	var longer 	= s1;
	var shorter = s2;

	if ( s1.length < s2.length )
	{
		longer 	= s2;
		shorter = s1;
	}

	var longerLength = longer.length;

	if ( longerLength == 0 )
	{
		return 1.0;
	}

	return ( longerLength - editDistance( longer, shorter ) ) / parseFloat( longerLength );
}

function editDistance( s1, s2 )
{
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

	var costs = new Array();
	for (var i = 0; i <= s1.length; i++)
	{
		var lastValue = i;
		for (var j = 0; j <= s2.length; j++)
		{
			if (i == 0)
			{
				costs[j] = j;
			}
			else
			{
				if (j > 0)
				{
					var newValue = costs[j - 1];
					if (s1.charAt(i - 1) != s2.charAt(j - 1))
					newValue = Math.min(Math.min(newValue, lastValue),
					costs[j]) + 1;
					costs[j - 1] = lastValue;
					lastValue = newValue;
				}
			}
		}
		
		if (i > 0)
		{
			costs[s2.length] = lastValue;
		}
  }
  return costs[s2.length];
}

function returnSortedObject( thisObject )
{
	var sortable = [];
	
	for (var thisKey in thisObject )
	{
		sortable.push( [ thisKey, thisObject[ thisKey ] ] );
	}

	sortable.sort( function( b, a )
	{
		return a[1] - b[1];
	});
	
	var objSorted = {}
	sortable.forEach( function( item )
	{
		objSorted[ item[0] ] = item[ 1 ]
	})
	
	return objSorted;
}

function returnArrayByValue( thisObject )
{
	var sortable = [];
	
	for (var thisKey in thisObject )
	{
		sortable.push( [ thisKey, thisObject[ thisKey ] ] );
	}

	sortable.sort( function( b, a )
	{
		return a[1] - b[1];
	});
	
	return sortable;
}


////////////////////////////////////////////[ ZURB FRAMEWORK ]////////////////////////////////////////////;

function escapeRegExp(str)
{
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace)
{
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function newRow(divName,divParent,divClass)
{
    nDIV(divName,divParent,'','','','','','','','','','','','','',divClass,'','1','visible','', noF, '');
}


function newDIV(divName,divParent,divBG,divContent,divClass,divOpacity,divOverflow,newFunction,passVar)
{
    nDIV(divName,divParent,'','','','','','','','','','',divBG,'',divContent,divClass,'',divOpacity,divOverflow,'', newFunction, passVar)
}

function newIMG(imgName,divParent,imgWidth,imgHeight,imgSRC,imgClass)
{
    var newIMG = document.createElement('img');
    var newName = imgName;
    newIMG.setAttribute('id',newName);
    newIMG.setAttribute('class',imgClass);
    newIMG.src = imgSRC;
    newIMG.style.height=imgHeight;
    newIMG.style.width=imgWidth;
    var newParent = document.getElementById(divParent);
    newParent.appendChild(newIMG);
}

////////////////////////////////////////////[PLATFORM INFO ]////////////////////////////////////////////;

var browserPrefix = 'none';
var browserName = 'none';
var tempX=0
var tempY=0;
var clickMove = 'mousemove';
var clickDown = 'mousedown';
var clickUp = 'mouseup';
var clickOut = 'mouseout';
var j10ajsStore = {};

window.iTD = 'ontouchstart' in document.documentElement;

if(window.iTD==true)
{
    clickMove = 'touchmove';
    clickDown = 'touchstart';
    clickUp = 'touchend';
    clickOut = 'touchend';
};


navigator.sayswho = (function()
                     {
                     var N = navigator.appName, ua = navigator.userAgent, tem;
                     var M = ua.match(/(mobile|opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                     if(M && (tem = ua.match(/version\/([\.\d]+)/i))!= null) M[2] = tem[1];
                     M = M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];
                     M = M[0];
                     
                     if(M == "Mobile") { browserPrefix = "webkit"; browserName = "Safari"; }
                     if(M == "Chrome") { browserPrefix = "webkit"; browserName = "Chrome"; }
                     if(M == "Firefox") { browserPrefix = "moz"; browserName = "Firefox";}
                     if(M == "Safari") { browserPrefix = "webkit"; browserName = "Safari";}
                     if(M == "MSIE") { browserPrefix = "ms"; browserName = "MSIE";}
                     })();

////////////////////////////////////////////[ GENERIC FUNCTIONS ]////////////////////////////////////////////;

function noF()
{
    
};

////////////////////////////////////////////[ TEXT FUNCTIONS ]////////////////////////////////////////////;

function formattedDate( )
{
	var options = { hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today  = new Date();

//	console.log(today.toLocaleDateString("en-US")); // 9/17/2016
//	console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
//	console.log(today.toLocaleDateString("hi-IN", options)); // शनिवार, 17 सितंबर 2016

	return today.toLocaleDateString( "en-US", options );
}


function timeNow( )
{
    var thisDate = new Date();
	return thisDate.getTime( );
}

function returnDateObject()
{
    var thisDate = new Date();
    var year, month, day;
    
    year 		= String(thisDate.getFullYear());
    month 		= String(thisDate.getMonth() + 1);
    
    if( month.length == 1 )
    {
        month 	= "0" + month;
    }
    day 		= String(thisDate.getDate());
    
    if( day.length == 1 )
    {
        day 	= "0" + day;
    }
    return { "year":year, "month":month, "day":day };
	
}

function dbReadyDate()
{
    var thisDate = new Date();
    var year, month, day;
    year = String(thisDate.getFullYear());
    month = String(thisDate.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(thisDate.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}

function partFromDate(thisDate,thisPart)
{
    var dateTimeSplit = thisDate.split(' ');
    var dateSplit = dateTimeSplit[0].split('-');
    var timeSplit = [];
    if(dateTimeSplit.length>1)
    {
        timeSplit = dateTimeSplit[1].split(':');
    }
    
    if(thisPart == 'day')
    {
        return dateSplit[2];
    }
    else if(thisPart == 'month')
    {
        return dateSplit[1];
    }
    else if(thisPart == 'year')
    {
        return dateSplit[0];
    }
    else if(thisPart == 'hour')
    {
        if(timeSplit.length == 3)
        {
            return timeSplit[0];
        }
        else
        {
            return false;
        }
    }
    else if(thisPart == 'minute')
    {
        if(timeSplit.length == 3)
        {
            return timeSplit[1];
        }
        else
        {
            return false;
        }
    }
    else if(thisPart == 'second')
    {
        if(timeSplit.length == 3)
        {
            return timeSplit[2];
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

function getCursorPosition(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var cursorPos = 0;
        var divMove = document.getElementById(thisDIV);
        
        if(document.selection)
        {
            divMove.focus ();
            
            var thisSel = document.selection.createRange ();
            
            thisSel.moveStart ('character', -divMove.value.length);
            
            cursor = thisSel.text.length;
        }
        else if (divMove.selectionStart || divMove.selectionStart == '0')
        {
            cursorPos = divMove.selectionStart;
        }
        
        return (cursorPos);
    }
    else
    {
        return 0;
    }
}

function getTextSelection(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var el = document.getElementById(thisDIV);
        
        var start = 0, end = 0, normalizedValue, range,
        textInputRange, len, endRange;
        
        if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number")
        {
            start = el.selectionStart;
            end = el.selectionEnd;
        }
        else
        {
            range = document.selection.createRange();
            
            if (range && range.parentElement() == el)
            {
                len = el.value.length;
                normalizedValue = el.value.replace(/\r\n/g, "\n");
                
                textInputRange = el.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());
                
                endRange = el.createTextRange();
                endRange.collapse(false);
                
                if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1)
                {
                    start = end = len;
                }
                else
                {
                    start = -textInputRange.moveStart("character", -len);
                    start += normalizedValue.slice(0, start).split("\n").length - 1;
                    
                    if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1)
                    {
                        end = len;
                    }
                    else
                    {
                        end = -textInputRange.moveEnd("character", -len);
                        end += normalizedValue.slice(0, end).split("\n").length - 1;
                    }
                }
            }
        }
        
        var selectionRange = new Object();
        selectionRange[0] = start;
        selectionRange[1] = end;
        
        return selectionRange;
    }
    else
    {
        var selectionRange = new Object();
        selectionRange = [0,0];
        
        return selectionRange;
    }
}

function replaceString(thisString,splitter,joiner)
{
    var splitString=thisString.split(splitter);
    return splitString.join(joiner);
};

function getBackgroundColor( thisDIV )
{
    var divMove = document.getElementById(thisDIV);
    var thisStyle = getCSSStyle( divMove, 'background-color' );
    
    return thisStyle;
}

function sizeText(thisDIV,factor)
{
    var divMove = document.getElementById(thisDIV);
    var thisStyle = getCSSStyle( divMove, 'font' );
    var styleParts = thisStyle.split(' ');
    if(styleParts.length>1)
    {
        var sizeParts = styleParts[3].split('/');
        var fontSizeParts = sizeParts[0].split('px');
        var leadingParts = sizeParts[1].split('px');
        var thisFontSize = Number(fontSizeParts[0]);
        var thisleading = Number(leadingParts[0]);
        styleParts[3] = (thisFontSize*factor)+'px/'+(thisleading*factor)+'px';
        var newFontStyle = styleParts.join(' ');
        divMove.style.font = newFontStyle;
    }
    else
    {
        var fontSizeStyle = window.getComputedStyle(divMove,null).getPropertyValue('font-size');
        var fontSizeParts = fontSizeStyle.split('px');
        var thisFontSize = Number(fontSizeParts[0]);
        divMove.style.fontSize = (thisFontSize*factor)+'px';
        var lineHeightStyle = window.getComputedStyle(divMove,null).getPropertyValue('line-height');
        var lineHeightParts = lineHeightStyle.split('px');
        var thisLineHeight = Number(lineHeightParts[0]);
        divMove.style.lineHeight = (thisLineHeight*factor)+'px';
    }
    //    ////trace(newFontStyle);
}

function fontSize( thisDIV, fontSize )
{
    var divMove = document.getElementById(thisDIV);
    
    if( divMove )
    {
		//console.log( "OLD FONTSIZE:" + divMove.style.fontSize );

		divMove.style.fontSize = ( parseInt( fontSize ) )+'px';
		
		//console.log( "NEW FONTSIZE:" + divMove.style.fontSize );
	}
}

function textAlignDIV(thisDIV,thisAlign)
{
    var divMove = document.getElementById(thisDIV);
    try
    {
        divMove.style.textAlign = thisAlign;
    }
    catch (error)
    {
        
    }
}

function getKeyDown(event)
{
    event = event || window.event;
    return [event.ctrlKey,event.keyCode];
};

function replaceJoiners(thisString)
{
    var sqrCheck = thisString.split('][');
    var sqrReplace = sqrCheck.join(')(');
    var crlyCheck = sqrReplace.split('}{');
    var crlyReplace = crlyCheck.join(')(');
    
    return crlyReplace;
}

function displayNo(thisNo)
{
    if(thisNo > 999)
    {
        if(thisNo > 999999)
        {
            return ((parseInt(thisNo/100000))*0.1).toFixed(1) + ' m';
        }
        else
        {
            return ((parseInt(thisNo/100))*0.1).toFixed(1) + ' k';
        }
    }
    else
    {
        return thisNo;
    }
    
}
////////////////////////////////////////////[ GET INFO FUNCTIONS ]////////////////////////////////////////////;

function getInnerHTML(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.innerHTML;
    }
}

function getInputValue(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.value;
    }
}

function setInputValue(thisDIV,thisValue)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.value = thisValue;
    }
}

function getInputVal(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.val();
    }
}


function getInputIndex(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.selectedIndex;
    }
}

function setInputIndex(thisDIV, thisValue)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.selectedIndex = thisValue;
    }
}

function setDIVminWidth(thisDIV, thisValue)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.minWidth = thisValue;
    }
}

function setDIVminHeight(thisDIV, thisValue)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.minHeight = thisValue;
    }
}

function setDIVmaxWidth(thisDIV, thisValue)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.maxWidth = thisValue;
    }
}

function setDIVmaxHeight(thisDIV, thisValue)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.maxHeight = thisValue;
    }
}


function getCSSStyle( el, styleProp )
{
    var camelize = function (str)
    {
        return str.replace(/\-(\w)/g, function(str, letter)
                           {
                           return letter.toUpperCase();
                           });
    };
    
    if ( el.currentStyle )
    {
        return el.currentStyle[ camelize( styleProp ) ];
    }
    else if ( document.defaultView && document.defaultView.getComputedStyle )
    {
        return document.defaultView.getComputedStyle( el, null ).getPropertyValue( styleProp );
    }
    else if( window && window.getComputedStyle )
    {
        var sizeStyle = window.getComputedStyle(el,null).getPropertyValue('font-size');
        return sizeStyle;
    }
    else
    {
        return el.style[ camelize( styleProp ) ];
    }
}

function getDIVOpacity(thisDIV)
{
    var divMove = document.getElementById(thisDIV);
    return divMove.style.opacity;
}

function getDIVLeft(thisDIV)
{
    var divMove = document.getElementById(thisDIV);
    return divMove.style.left;
}

function getDIVRight(thisDIV)
{
    var divMove = document.getElementById(thisDIV);
    return divMove.style.right;
}

function getDIVTop(thisDIV)
{
    var divMove = document.getElementById(thisDIV);
    return divMove.style.top;
}

function getDIVBottom(thisDIV)
{
    var divMove = document.getElementById(thisDIV);
    return divMove.style.bottom;
}

function getDIVWidth(thisDIV)
{
    try
    {
        var divMove = document.getElementById(thisDIV);
        var newWidth = divMove.offsetWidth;
        return newWidth;
    }
    catch(err)
    {
        return 10;
    }
}

function getDIVHeight(thisDIV)
{
    try
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.offsetHeight;
    }
    catch(err)
    {
        return 10;
    }
}

function getDIVMargTop(thisDIV)
{
    try
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.style.marginTop;
    }
    catch(err)
    {
        return 0;
    }
}

function getDIVMargLeft(thisDIV)
{
    try
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.style.marginLeft;
    }
    catch(err)
    {
        return 0;
    }
}

function getDIVoffsetLeft(thisDIV)
{
    try
    {
		var divMove = document.getElementById(thisDIV);
		return divMove.offsetLeft;
    }
    catch(err)
    {
        return 0;
    }
}

function getDIVoffsetTop(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.offsetTop;
    }
}

function placeholderDIV(thisDIV,thisMessage)
{
    if(document.getElementById(thisDIV))
    {
		var divMove = document.getElementById(thisDIV);
		divMove.placeholder = thisMessage;
	}
}



////////////////////////////////////////////[ NUMBER FUNCTIONS ]////////////////////////////////////////////;

//function returnSortedArrayByLengthASC( a, b )
//{
//	// ASC  -> a.length - b.length
//	// DESC -> b.length - a.length
//	return a.length - b.length;
//}
//
//function returnSortedArrayByLengthDESC( a, b )
//{
//	// ASC  -> a.length - b.length
//	// DESC -> b.length - a.length
//	return b.length - a.length;
//}

function isEven(thisNo)
{
    var checkNo = Number(thisNo);
    if(checkNo*0.5 == parseInt(checkNo*0.5))
    {
        return true;
    }
    else
    {
        return false;
    }
}

////////////////////////////////////////////[ DIV INTERACTION FUNCTIONS ]////////////////////////////////////////////;


//---------------CHECKS CURRENT TRANSITION PROPERTIES-----------;
function checkTransition(thisDIV)
{
    //alert(thisDIV);
    if(document.getElementById(thisDIV) && browserName != undefined)
    {
        var divCheck = document.getElementById(thisDIV);
        var transformParts = '';
        if(browserPrefix == 'webkit')
        {
            transformParts = divCheck.style.webkitTransform.split(' ');
        }
        else if(browserPrefix == 'moz')
        {
            transformParts = divCheck.style.MozTransform.split(' ');
        }
        else if(browserPrefix == 'ms')
        {
            //transformParts = divCheck.style.transform.split(' ');
            if(divCheck.style.msTransform)
            {
                transformParts = divCheck.style.msTransform.split(' ');
            }
        }
        else
        {
            transformParts = divCheck.style.transform.split(' ');
        }
        
        //alert(transformParts)
        
        return transformParts;
    }
} //return transformParts;

//---------------ADD ACTION-----------;
function addFunc(thisDIV, thisMove, thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.addEventListener(thisMove,thisFunc,false);
        divMove.style.cursor = 'pointer';
    }
};

//---------------REMOVE ACTION-----------;
function remFunc(thisDIV, thisMove, thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.removeEventListener(thisMove,thisFunc,false);
        divMove.style.cursor = 'default';
    }
};

function addTouchStartDIV( thisDIV, touchStart )
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
		
		addDIV.addEventListener( 'touchstart', touchStart, false );
        addDIV.style.pointerEvents = 'auto';
        addDIV.style.cursor = 'pointer';
	}
}

function addTouchEndDIV( thisDIV, touchEnd )
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
		
		addDIV.addEventListener( 'touchend', touchEnd, false );
        addDIV.style.pointerEvents = 'auto';
        addDIV.style.cursor = 'pointer';
	}
}


//---------------ADD MULTIPLE ACTIONS-----------;
function addActDIV(thisDIV,mOver,mOut,mDown,mUp)
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
        if(window.iTD==true)
        {
            //            if(browserName != 'MSIE')
            //            {
            addDIV.addEventListener('touchstart',mDown,false);
            addDIV.addEventListener('touchend',mUp,false);
            //            }
            //            else
            //            {
            //                addDIV.attachEvent('touchstart',mDown,false);
            //                addDIV.attachEvent('touchend',mUp,false);
            //            }
            
        }
        else
        {
            //            if(browserName != 'MSIE')
            //            {
            addDIV.addEventListener('mouseover',mOver,false);
            addDIV.addEventListener('mouseout',mOut,false);
            addDIV.addEventListener('mousedown',mDown,false);
            addDIV.addEventListener('mouseup',mUp,false);
            //            }
            //            else
            //            {
            //                addDIV.attachEvent('mouseover',mOver,false);
            //                addDIV.attachEvent('mouseout',mOut,false);
            //                addDIV.attachEvent('mousedown',mDown,false);
            //                addDIV.attachEvent('mouseup',mUp,false);
            //            }
        }
        addDIV.style.cursor = 'pointer';
        addDIV.style.pointerEvents = 'auto';
    }
}


//---------------REMOVE MULTIPLE ACTIONS-----------;
function remActDIV(thisDIV,mOver,mOut,mDown,mUp)
{
    var remDIV = document.getElementById(thisDIV);
    if(window.iTD==true)
    {
        remDIV.removeEventListener('touchstart',mDown,false);
        remDIV.removeEventListener('touchend',mUp,false);
    }
    else
    {
        remDIV.removeEventListener('mouseover',mOver,false);
        remDIV.removeEventListener('mouseout',mOut,false);
        remDIV.removeEventListener('mousedown',mDown,false);
        remDIV.removeEventListener('mouseup',mUp,false);
    }
    //    remDIV.style.cursor = 'default';
    //    remDIV.style.pointerEvents = 'none';
}

//---------------ADD MOVE ACTIONS-----------
function addMoveActDIV(thisDIV,mMove)
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
        if(window.iTD==true)
        {
            addDIV.addEventListener('touchmove',mMove,false);
        }
        else
        {
            addDIV.addEventListener('mousemove',mMove,false);
        }
        addDIV.style.cursor = 'pointer';
        addDIV.style.pointerEvents = 'auto';
    }
    else
    {
        //alert(thisDIV);
    }
}

function addScrollActDIV(thisDIV,thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
        addDIV.onscroll = thisFunc;
    }
}

function remScrollActDIV(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
        addDIV.onscroll = noF;
    }
}

function newIDDIV(thisDIV,newID)
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
        addDIV.setAttribute('id',newID);
    }
}

//--------------SCROLL DIV TO WINDOW TOP-----;

function getDIVScrollLeft( thisDIV )
{
    if( document.getElementById( thisDIV ) )
    {
        var moveDIV = document.getElementById( thisDIV );
		return moveDIV.scrollLeft;
	}
}


function getDIVScrollTop( thisDIV )
{
    if( document.getElementById( thisDIV ) )
    {
        var moveDIV = document.getElementById( thisDIV );
		return moveDIV.scrollTop;
	}
}

function scrollToDIV( thisDIV, thisOffset )
{
    if( document.getElementById( thisDIV ) )
    {
        var moveDIV = document.getElementById( thisDIV );
		moveDIV.scrollTop = thisOffset;
	}
}

function scrollToTopDIV( thisDIV, thisOffset )
{
    if( document.getElementById( thisDIV ) )
    {
        var moveDIV = document.getElementById( thisDIV );
		moveDIV.scrollTop = thisOffset;
	}
}

function scrollToLeftDIV( thisDIV, thisOffset )
{
    if( document.getElementById( thisDIV ) )
    {
        var moveDIV = document.getElementById( thisDIV );
		moveDIV.scrollLeft = thisOffset;
	}
}

function scrollToTop(thisHit,thisOffset)
{
    store['scrollTo'] = getDIVoffsetTop(thisHit) - thisOffset;
    loopParentHeights(thisHit);
}

function loopParentHeights(thisHit)
{
    var hitPoint = document.getElementById(thisHit);
    
    if(hitPoint.parentNode.id != 'stageContainer')
    {
        store['scrollTo'] = store['scrollTo'] + getDIVoffsetTop(hitPoint.parentNode.id);
        loopParentHeights(hitPoint.parentNode.id);
    }
    else
    {
        linearScroll('stageContainer',store['scrollTo'],250)
    }
}

var stepWait;

function linearScroll(thisDIV,finishPoint,thisTime)
{
    store['scrollDIV'] = document.getElementById(thisDIV);
    store['scrollStartPoint'] = store['scrollDIV'].scrollTop;
    store['scrollEndPoint'] =  finishPoint;
    var thisDistance = store['scrollEndPoint']-store['scrollStartPoint'];
    store['scrollStepIncr'] = thisDistance * 0.1;
    store['scrollTimeIncr'] = thisTime * 0.05;
    store['scrollStepNow'] = 0;
    
    stepScroll()
}

function stepScroll()
{
    if(store['scrollStepNow'] < 10)
    {
        store['scrollDIV'].scrollTop = store['scrollDIV'].scrollTop + store['scrollStepIncr'];
        store['scrollStepNow']++;
        stepWait = setTimeout(stepScroll,store['scrollTimeIncr']);
    }
}

///-------EASE SCROLL----;

function horizontalScrollDIV(thisDIV,currPoint,endPoint,scrollTime)
{
    if(endPoint > currPoint)
    {
        var stepValue = (endPoint - currPoint) / 10;
        
        if(stepValue > 0.5)
        {
            if(currPoint + stepValue < endPoint)
            {
                var newPoint = currPoint + stepValue;
                var clientPreview = document.getElementById(thisDIV);
                clientPreview.scrollLeft = newPoint;
                
                var nextStepWait = setTimeout(function(){horizontalScrollDIV(thisDIV,newPoint,endPoint,scrollTime);},scrollTime * 1);
            }
            else
            {
                var clientPreview = document.getElementById(thisDIV);
                clientPreview.scrollLeft = endPoint;
                store['currHorizontalPoint'] = endPoint;
            }
        }
        else
        {
            var clientPreview = document.getElementById(thisDIV);
            clientPreview.scrollLeft = endPoint;
            store['currHorizontalPoint'] = endPoint;
        }
    }
    else
    {
        var stepValue = (currPoint - endPoint) / 10;
        
        if(stepValue > 0.5)
        {
            if(currPoint - stepValue > endPoint)
            {
                var newPoint = currPoint - stepValue;
                var clientPreview = document.getElementById(thisDIV);
                clientPreview.scrollLeft = newPoint;
                
                var nextStepWait = setTimeout(function(){horizontalScrollDIV(thisDIV,newPoint,endPoint,scrollTime);},scrollTime * 1);
            }
            else
            {
                var clientPreview = document.getElementById(thisDIV);
                clientPreview.scrollLeft = endPoint;
                store['currHorizontalPoint'] = endPoint;
            }
        }
        else
        {
            var clientPreview = document.getElementById(thisDIV);
            clientPreview.scrollLeft = endPoint;
            store['currHorizontalPoint'] = endPoint;
        }
    }
}

function verticalScrollDIV(thisDIV,currPoint,endPoint,scrollTime)
{
    //    var clientPreview = document.getElementById(thisDIV);
    //    currPoint = clientPreview.scrollTop;
    
    movDIV(thisDIV,'',0-(endPoint - currPoint),'','','easeOut', scrollTime, '0', noF, '');
    
    //    if(endPoint > currPoint)
    //    {
    //        var stepValue = (endPoint - currPoint) / 100;
    //
    //        if(stepValue > 0.5)
    //        {
    //            if(currPoint + stepValue < endPoint)
    //            {
    //                var newPoint = currPoint + stepValue;
    //                var clientPreview = document.getElementById(thisDIV);
    //                clientPreview.scrollTop = newPoint;
    //
    //                var nextStepWait = setTimeout(function(){verticalScrollDIV(thisDIV,newPoint,endPoint,scrollTime);},1);//scrollTime * 1);
    //
    //                //verticalScrollDIV(thisDIV,newPoint,endPoint,scrollTime);
    //            }
    //            else
    //            {
    //                var clientPreview = document.getElementById(thisDIV);
    //                clientPreview.scrollTop = endPoint;
    //                store['currVerticalPoint'] = endPoint;
    //            }
    //        }
    //        else
    //        {
    //            var clientPreview = document.getElementById(thisDIV);
    //            clientPreview.scrollTop = endPoint;
    //            store['currVerticalPoint'] = endPoint;
    //        }
    //    }
    //    else
    //    {
    //        var stepValue = (currPoint - endPoint) / 10;
    //
    //        if(stepValue > 0.5)
    //        {
    //            if(currPoint - stepValue > endPoint)
    //            {
    //                var newPoint = currPoint - stepValue;
    //                var clientPreview = document.getElementById(thisDIV);
    //                clientPreview.scrollTop = newPoint;
    //
    //                var nextStepWait = setTimeout(function(){verticalScrollDIV(thisDIV,newPoint,endPoint,scrollTime);},10);//,scrollTime * 1);
    //
    //                //verticalScrollDIV(thisDIV,newPoint,endPoint,scrollTime);
    //            }
    //            else
    //            {
    //                var clientPreview = document.getElementById(thisDIV);
    //                clientPreview.scrollTop = endPoint;
    //                store['currVerticalPoint'] = endPoint;
    //            }
    //        }
    //        else
    //        {
    //            var clientPreview = document.getElementById(thisDIV);
    //            clientPreview.scrollTop = endPoint;
    //            store['currVerticalPoint'] = endPoint;
    //        }
    //    }
}


//---------------REMOVE MOVE ACTIONS-----------;
function remMoveActDIV(thisDIV,mMove)
{
    if(document.getElementById(thisDIV))
    {
        var addDIV = document.getElementById(thisDIV);
        if(window.iTD==true)
        {
            addDIV.removeEventListener('touchmove',mMove,false);
        }
        else
        {
            addDIV.removeEventListener('mousemove',mMove,false);
        }
    }
    //    addDIV.style.cursor = 'default';
    //    addDIV.style.pointerEvents = 'none';
    
}

function addKeyUpActDIV(thisDIV,thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onkeyup = thisFunc;
    }
}

function addKeyDownActDIV(thisDIV,thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onkeydown = thisFunc;
    }
}

function addFocusActDIV(thisDIV,thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onfocus = thisFunc;
    }
}

function remFocusActDIV(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onfocus = noF;
    }
}

function addBlurActDIV(thisDIV,thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onblur = thisFunc;
    }
}

function addChangeActDIV(thisDIV,thisFunc)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onchange = thisFunc;
    }
}

////////////////////////////////////////////[ TRIG ]////////////////////////////////////////////;

function getOppAdj(ang,hyp)
{
    var adj = (Math.cos(ang * Math.PI/180) * hyp);
    var opp = (Math.sin(ang * Math.PI/180) * hyp);
    
    return [adj,opp];
}

function getAngle(opp,adj)
{
    var thisAngle = (Math.atan(opp/adj))/(Math.PI/180);
    
    return thisAngle;
}

function getHyp( opp, adj )
{
    var hyp = Math.sqrt((opp * opp) + (adj * adj));
    
    return hyp;
}


////////////////////////////////////////////[ DIV ADJUSTMENT FUNCTIONS ]////////////////////////////////////////////;

function emptyDIV(thisDIV)
{
    try
    {
        if(document.getElementById(thisDIV))
        {
            var divMove = document.getElementById(thisDIV);
            divMove.innerHTML = '';
        }
    }
    catch(err)
    {
        
    }
}

function fillDIV(thisDIV, thisHTML)
{
    try
    {
//        logThis( "FILL:" + thisDIV );
//        
//        if(thisHTML == undefined)
//        {
//            logThis( "HTML:" + thisHTML.substr(0, 20) );
//            logThis( "==========================================" );
//        }

        if(document.getElementById(thisDIV))
        {
            var divMove = document.getElementById(thisDIV);
            divMove.innerHTML = thisHTML;
        }
    }
    catch(err)
    {
        
    }
}

function fillInput(thisDIV, thisValue)
{
    try
    {
        if(document.getElementById(thisDIV))
        {
            var divMove = document.getElementById(thisDIV);
            divMove.value = thisValue;
        }
    }
    catch(err)
    {
        
    }
}

function listToCharSepString( listArray, charSeparator )
{
//	var firstPart 	= "";
//	var finalItem 	= "";
//	var stringList 	= "";
//
//	if( listArray.length > 2 )
//	{
//		finalItem 		= listArray[ listArray.length-1 ];
//		listArray.pop( );
//		firstPart 		= listArray.join( ", " );
//
//		stringList =  firstPart +" "+ andString +" "+ finalItem;
//	}
//	else if( listArray.length == 2 )
//	{
//		firstPart 		= listArray[ 0 ];
//		finalItem		= listArray[ 1 ];
//
//		stringList =  firstPart +" "+ andString +" "+ finalItem;
//	}
//	else
//	{
//		stringList =  listArray[ 0 ];
//	}
	
	return listArray.join( charSeparator );
}

function listToString( listArray, andString )
{
	var firstPart 	= "";
	var finalItem 	= "";
	var stringList 	= "";
	
	if( listArray.length > 2 )
	{
		finalItem 		= listArray[ listArray.length-1 ];
		listArray.pop( );
		firstPart 		= listArray.join( ", " );
		
		stringList =  firstPart +" "+ andString +" "+ finalItem;
	}
	else if( listArray.length == 2 )
	{
		firstPart 		= listArray[ 0 ];
		finalItem		= listArray[ 1 ];
		
		stringList =  firstPart +" "+ andString +" "+ finalItem;
	}
	else
	{
		stringList =  listArray[ 0 ];
	}
	
	return stringList;
}

//-----------ALPHA NUMERIC CHEKS----------------;

function removeSpaces( divID )
{
	//console.log( "removeSpaces( "+divID+" )" );

    var moveDIV 	= document.getElementById( divID );
    var divValue	= moveDIV.value;
    var strSplit	= divValue.split( ' ' );
    
	//console.log( "divValue: "+divValue+"" );
    
    return strSplit.join( '' );
}

function returnAlphaNumeric( str )
{
	var deleteChar = [];
	var fullString = str.toLowerCase();

	for( sAN=str.length-1; sAN>0; sAN-- )
	{
		var cCb = str.charAt( sAN );
		
		if (!(!cCb.match(/[_\W]/)))
		{
			if( cCb!='-' )
			{
				deleteChar.push( sAN );
				
				var firstHalf 	= fullString.substring( 0, sAN);
				var secondHalf 	= fullString.substring( sAN+1, fullString.length );
				
				if(cCb === ' ')
				{
					fullString = firstHalf + '' + secondHalf;
				}
				else
				{
					fullString = firstHalf + secondHalf;
				}
			}
		}
	}

     return fullString;
}

function checkAlphaNumericSpaces(event)
{
    var aN = document.getElementById(event.target.id);
    
    var cCb = aN.value.charAt(aN.value.length-1);
    if(cCb = ' ')
    {
        return;
    }
    else
    {
        if (!(!cCb.match(/[_\W]/)))
        {
            var s = aN.value.substring(0, aN.value.length - 1);
            aN.value = s;
        }
    }
}


function checkAlphaNumeric( event )
{
    var aN = document.getElementById( event.target.id );
    
    var cCb = aN.value.charAt( aN.value.length-1 );
    if ( !(!cCb.match(/[_\W]/)) )
    {
        var s = aN.value.substring(0, aN.value.length - 1);
        aN.value = s;
    }
}

function onlyAlphaNumeric(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.onkeyup = checkAlphaNumeric;
    }
}

function stripAlphaNumeric(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var deleteChar = [];
        
        var aN = document.getElementById(thisDIV);
        
        var fullString = aN.value.toLowerCase();
        
        if(fullString.length>64){fullString = fullString.substring(0, 64);}
        
        for(sAN = aN.value.length-1;sAN>0;sAN--)
        {
            var cCb = aN.value.charAt(sAN);
            if (!(!cCb.match(/[_\W]/)))
            {
                if(cCb!='-')
                {
                    deleteChar.push(sAN);
                    var firstHalf = fullString.substring(0, sAN);
                    var secondHalf = fullString.substring(sAN+1, fullString.length);
                    
                    if(cCb === ' ')
                    {
                        fullString = firstHalf + '-' + secondHalf;
                    }
                    else
                    {
                        fullString = firstHalf + secondHalf;
                    }
                }
            }
        }
        
        aN.value = fullString;
    }
}

function alphaNumericise(event)
{
    stripAlphaNumeric(event.target.id);
}


//---------------REMOVE DIV-----------;
function remDIV(thisDIV)
{
    try
    {
        var delDIV = document.getElementById(thisDIV);
        delDIV.parentNode.removeChild(delDIV);
    }
    catch(err)
    {
        
    }
}

function remDIVWait(thisDIV,funcWait)
{
    store['remDIV'+thisDIV] = setTimeout(function(){remDIV(thisDIV);}, Number(funcWait));
    
}

//--------------NEW ELEMENTS-------------;

function getIMGSize(imgURL)
{
    nDIV('imgMeasure','stageContainer','0px','0px','100%','0%','','','','','','','transparent','','<img id="iMeasureIMG" src="'+imgURL+'">','articleHolder','relative','1','visible','0',noF,'');
    var origWidth = getDIVWidth('iMeasureIMG');
    var origHeight = getDIVHeight('iMeasureIMG');
    var deleteDIV = document.getElementById( 'imgMeasure' );
    deleteDIV.parentNode.removeChild(deleteDIV);
    
    return [origWidth, origHeight];
}


function nIMG(imgName,divParent,imgWidth,imgHeight,imgContent, newFunction, passVar)
{
    var newIMG = document.createElement('img');
    var newName = imgName;
    newIMG.setAttribute('id',newName);
    newIMG.onload = newFunction;
    newIMG.src = imgContent;
    newIMG.style.height=imgHeight;
    newIMG.style.width=imgWidth;
    var newParent = document.getElementById(divParent);
    newParent.appendChild(newIMG);
    
}

function srcDIV(thisDIV,newSRC)
{
    if( document.getElementById(thisDIV) )
    {
        var divMove = document.getElementById(thisDIV);
        divMove.src=newSRC;
    }
    
}

function getDIVsrc(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.src;
    }
    
}

function getDIVBG(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        return divMove.style.background;
    }
    
}

function appendDIVtoDIV(thisDIV,thisAppend)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.appendChild(thisAppend);
    }
    else
    {
        if(document.getElementById('//traceID'))
        {
            //trace('**FAIL appendDIVtoDIV : '+divName);
        }
    }
    
}

function appendDIV(thisDIV,thisAppend)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        if(document.getElementById(thisAppend))
        {
            var divAppend = document.getElementById(thisAppend);
            divMove.appendChild(divAppend);
        }
        else
        {
            //trace('****'+thisAppend+'****');
        }
    }
    else
    {
        if(document.getElementById('//traceID'))
        {
            ////trace('**FAIL appendDIVtoDIV : '+divName);
        }
    }
    
}

function getDIVStyle( thisDIV )
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById( thisDIV );
        var divCSS = getComputedStyle( divMove );
        return divCSS;
    }
}

function getDIVClassName( thisDIV )
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById( thisDIV );
        var divCSSName = divMove.className;//children[0].
        return divCSSName;
    }
}

function classDIV(thisDIV,newClass)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.setAttribute('class',newClass);
    }
}

function floatDIV(thisDIV,newFloat)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.cssFloat = newFloat;
    }
}

function titleDIV(thisDIV,divTitle)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.setAttribute('title',divTitle);
    }
}

function nSPAN(divName,divParent)
{
    if(document.getElementById(divParent))
    {
        var newSPAN = document.createElement('span');
        var newName = divName;
        newSPAN.setAttribute('id',newName);
        var newParent = document.getElementById(divParent);
        newParent.appendChild(newSPAN);
    }
}

//---------------------------------; //

function checkDIV( divName )
{
    if( document.getElementById( divName ) )
    {
		return true;
    }
    else
    {
		return false;
	}
}

//---------------NEW DIV-----------;


function nStartDIV( divName, parentName, divClass )
{
    if( document.getElementById( parentName ) )
    {
        var newDIV 		= document.createElement( 'div' );
        var newName	 	= divName;
        
        newDIV.setAttribute( 'id',	newName );
        newDIV.setAttribute( 'class',divClass );

		var parentDIV 	= document.getElementById( parentName );
		
		//parentDIV.prepend( newDIV );
		
		parentDIV.insertBefore( newDIV, parentDIV.firstChild );
	}
}

// nDIV('name','parent','Wpx','Hpx','Lpx','Tpx','R','B','ML','MR','MT','MB','transparent','','hello','class','absolute','1','hidden','1');
function nDIV( divName,divParent,divWidth,divHeight,divL,divT,divR,divB,divML,divMT,divMR,divMB,divBG,divF,divContent,divClass,divPos,divOpacity,divOverflow,divZ, newFunction, passVar )
{
    //    if(divName!='readOut'){//trace('nDIV passVar='+passVar);};
    
    if(document.getElementById('traceID'))
    {
        ////trace('nDIV : '+divName);
    }
    
    if( checkDIV( divName ) )
    {
		return;
	}
    
    if(document.getElementById(divParent))
    {
        //        if(document.getElementById('//traceID'))
        //        {
        //            //trace('**FAIL nDIV : '+divName);
        //        }
        //
        //    }
        //    else
        //    {
        var newDIV = document.createElement('div');
        var newName = divName;
        newDIV.setAttribute('id',newName);
        newDIV.setAttribute('class',divClass);
        newDIV.innerHTML = divContent;
        newDIV.style.position=divPos;
        newDIV.style.height=divHeight;
        newDIV.style.width=divWidth;
        newDIV.style.left=divL;
        newDIV.style.right=divR;
        newDIV.style.top=divT;
        newDIV.style.bottom=divB;
        newDIV.style.marginLeft = divML;
        newDIV.style.marginRight = divMR;
        newDIV.style.marginTop = divMT;
        newDIV.style.marginBottom = divMB;
        newDIV.style.background = divBG;
        newDIV.style.cssFloat = divF;
        newDIV.style.opacity = divOpacity;
        newDIV.style.overflow = divOverflow;
        newDIV.style.zIndex = divZ;
        newDIV.style.webkitTransformStyle='preserve-3d';
        newDIV.style.MozTransformStyle='preserve-3d';
        //newDIV.style.msTransformStyle='preserve-3d';
        newDIV.style.transformStyle='preserve-3d';
        var newParent = document.getElementById(divParent);
        newParent.appendChild(newDIV);
        //    j10ajsStore[divName+'Timer'] = setTimeout(function(){
        //                                              newFunction.apply(this,passVar);
        //                                              },200);
    }
    else
    {
        if(document.getElementById('traceID'))
        {
            trace('nDIV missing '+divParent);
        }
    }
};

//---------------NEW DIV-----------;// nDIV('name','parent','Wpx','Hpx','Lpx','Tpx','R','B','ML','MR','MT','MB','transparent','','hello','class','absolute','1','hidden','1');
function nFlatDIV(divName,divParent,divWidth,divHeight,divL,divT,divR,divB,divML,divMT,divMR,divMB,divBG,divF,divContent,divClass,divPos,divOpacity,divOverflow,divZ, newFunction, passVar)
{
    
    if(document.getElementById('//traceID'))
    {
        ////trace('nFlatDIV : '+divName);
    }
    
    if(document.getElementById(divParent))
    {
        var newDIV = document.createElement('div');
        var newName = divName;
        newDIV.setAttribute('id',newName);
        newDIV.setAttribute('class',divClass);
        newDIV.innerHTML = divContent;
        newDIV.style.position=divPos;
        newDIV.style.height=divHeight;
        newDIV.style.width=divWidth;
        newDIV.style.left=divL;
        newDIV.style.right=divR;
        newDIV.style.top=divT;
        newDIV.style.bottom=divB;
        newDIV.style.marginLeft = divML;
        newDIV.style.marginRight = divMR;
        newDIV.style.marginTop = divMT;
        newDIV.style.marginBottom = divMB;
        newDIV.style.backgroundColor = divBG;
        newDIV.style.cssFloat = divF;
        newDIV.style.opacity = divOpacity;
        newDIV.style.overflow = divOverflow;
        newDIV.style.zIndex = divZ;
        var newParent = document.getElementById(divParent);
        newParent.appendChild(newDIV);
        //    j10ajsStore[divName+'Timer'] = setTimeout(function(){
        //                                              newFunction.apply(this,passVar);
        //                                              },200);
    }
};

function nTextArea(divName,divParent,divWidth,divHeight,divL,divT,divR,divB,divML,divMT,divMR,divMB,divBG,divF,divPlaceholder,divClass,divPos,divOpacity,divOverflow,divZ, newFunction, passVar)
{
    if(document.getElementById(divParent))
    {
        var newDIV = document.createElement('textarea');
        var newName = divName;
        newDIV.setAttribute('id',newName);
        newDIV.setAttribute('class',divClass);
        newDIV.placeholder = divPlaceholder;
        newDIV.style.position=divPos;
        newDIV.style.height=divHeight;
        newDIV.style.width=divWidth;
        newDIV.style.left=divL;
        newDIV.style.right=divR;
        newDIV.style.top=divT;
        newDIV.style.bottom=divB;
        newDIV.style.marginLeft = divML;
        newDIV.style.marginRight = divMR;
        newDIV.style.marginTop = divMT;
        newDIV.style.marginBottom = divMB;
        newDIV.style.backgroundColor = divBG;
        newDIV.style.cssFloat = divF;
        newDIV.style.opacity = divOpacity;
        newDIV.style.overflow = divOverflow;
        newDIV.style.zIndex = divZ;
        var newParent = document.getElementById(divParent);
        newParent.appendChild(newDIV);
    }
};

function nInputArea(divName,divParent,divWidth,divHeight,divL,divT,divR,divB,divML,divMT,divMR,divMB,divBG,divF,divPlaceholder,divClass,divPos,divOpacity,divOverflow,divZ, newFunction, passVar)
{
    if(document.getElementById(divParent))
    {
        var newDIV = document.createElement('input');
        var newName = divName;
        newDIV.setAttribute('id',newName);
        newDIV.setAttribute('class',divClass);
        newDIV.placeholder = divPlaceholder;
        newDIV.style.position=divPos;
        newDIV.style.height=divHeight;
        newDIV.style.width=divWidth;
        newDIV.style.left=divL;
        newDIV.style.right=divR;
        newDIV.style.top=divT;
        newDIV.style.bottom=divB;
        newDIV.style.marginLeft = divML;
        newDIV.style.marginRight = divMR;
        newDIV.style.marginTop = divMT;
        newDIV.style.marginBottom = divMB;
        newDIV.style.backgroundColor = divBG;
        newDIV.style.cssFloat = divF;
        newDIV.style.opacity = divOpacity;
        newDIV.style.overflow = divOverflow;
        newDIV.style.zIndex = divZ;
        var newParent = document.getElementById(divParent);
        newParent.appendChild(newDIV);
    }
};

function nInputBasic( divName, divParent, divPlaceholder, divClass )
{
    if(document.getElementById(divParent))
    {
        var newDIV = document.createElement('input');
        var newName = divName;
        newDIV.setAttribute('id',newName);
        newDIV.setAttribute('class',divClass);
        newDIV.placeholder = divPlaceholder;
        var newParent = document.getElementById(divParent);
        newParent.appendChild(newDIV);
    }
};



//---------------NEW CANVAS-----------;// nCanvas('Name','Parent','transparent','class','1','1')
function nCanvas(cName,divParent,divBG,divClass,divOpacity,divZ)
{
    var divParent = document.getElementById(divParent);
    var c = document.createElement('canvas');
    c.className  = divClass;
    c.id  = cName;
    //    c.style.position = divPos;
    c.setAttribute('width', divParent.offsetWidth);
    c.setAttribute('height', divParent.offsetHeight);
    //    c.setAttribute('left', '0px');
    //    c.setAttribute('top', '0px');
    c.style.opacity = divOpacity;
    c.style.backgroundColor = divBG;
    c.style.zIndex = divZ;
    divParent.appendChild(c);
}

function nCircle(cParent,xPos,yPos,cRad,strokeCol,strokeWidth,fillCol,cCTX)
{
    //var canvasName = cName;
    //nCanvas(canvasName,radioName,'transparent','','1','1');
    var thisParent = document.getElementById(cParent);
    var ctx = thisParent.getContext(cCTX);
    ctx.beginPath();
    ctx.arc(xPos,yPos,cRad,0,2*Math.PI);
    ctx.strokeStyle=strokeCol;
    ctx.lineWidth=Number(strokeWidth);
    ctx.stroke();
    ctx.fillStyle=fillCol;
    ctx.fill();
}

function nArc(cParent,xPos,yPos,cRad,cArc,strokeCol,strokeWidth,fillCol,cCTX)
{
    var thisParent = document.getElementById(cParent);
    var ctx = thisParent.getContext(cCTX);
    ctx.beginPath();
    ctx.arc(xPos,yPos,cRad,0,(2*Math.PI)*Number(cArc));
    ctx.strokeStyle=strokeCol;
    ctx.lineWidth=Number(strokeWidth);
    ctx.stroke();
    ctx.fillStyle=fillCol;
    ctx.fill();
}

function createParentCTX( canvasName, canvasParent, width, height )
{
    var canvas = document.createElement( "canvas" );
    canvas.setAttribute( "id", canvasName );
    var scratch = document.getElementById( canvasParent );
    scratch.appendChild( canvas );
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    return ctx;
}


//---------------TRANSFORM DIV ON XYZ AXIS-----------;
function tranDIV(thisDIV, thisX, thisY, thisZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    var newX = thisX;
    var newY = thisY;
    var newZ = thisZ;
    var thisRotX = 0;
    var thisRotY = 0;
    var thisRotZ = 0;
    var thisSX = 1;
    var thisSY = 1;
    var thisSZ = 1;
    var divMove = document.getElementById(thisDIV);
    var transformParts = checkTransition(thisDIV);
    for(var tP=0;tP<transformParts.length;tP++)
    {
        var tPE = transformParts[tP].split('(');
        if(tPE[0]=='translateX'){var tPEV = tPE[1].split('px)');newX = Number(tPEV[0])+Number(thisX);};
        if(tPE[0]=='translateY'){var tPEV = tPE[1].split('px)');newY = Number(tPEV[0])+Number(thisY);};
        if(tPE[0]=='translateZ'){var tPEV = tPE[1].split('px)');newZ = Number(tPEV[0])+Number(thisZ);};
        if(tPE[0]=='rotateX'){var tPEV = tPE[1].split('deg)');thisRotX = tPEV[0];};
        if(tPE[0]=='rotateY'){var tPEV = tPE[1].split('deg)');thisRotY = tPEV[0];};
        if(tPE[0]=='rotateZ'){var tPEV = tPE[1].split('deg)');thisRotZ = tPEV[0];};
        if(tPE[0]=='scaleX'){var tPEV = tPE[1].split(')');thisSX = Number(tPEV[0]);};
        if(tPE[0]=='scaleY'){var tPEV = tPE[1].split(')');thisSY = Number(tPEV[0]);};
        if(tPE[0]=='scaleZ'){var tPEV = tPE[1].split(')');thisSZ = Number(tPEV[0]);};
    }
    
    mDIV(thisDIV, newX+'px', newY+'px', newZ+'px', thisRotX, thisRotY, thisRotZ, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar);
    
    return;
};

//---------------ROTATE TO EXACT ANGLE-----------;
function rotToDIV(thisDIV, thisRotX, thisRotY, thisRotZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    //if(thisDIV!='readOut'){//trace('rotToDIV thisDIV='+thisDIV);};
    var thisX = '0px';
    var thisY = '0px';
    var thisZ = '0px';
    var newRotX = Number(thisRotX);
    var newRotY = Number(thisRotY);
    var newRotZ = Number(thisRotZ);
    var thisSX = 1;
    var thisSY = 1;
    var thisSZ = 1;
    var divMove = document.getElementById(thisDIV);
    var transformParts = checkTransition(thisDIV);
    
    try
    {
		for(var tP=0;tP<transformParts.length;tP++)
		{
			var tPE = transformParts[tP].split('(');
			if(tPE[0]=='translateX'){var tPEV = tPE[1].split(')');thisX = tPEV[0];};
			if(tPE[0]=='translateY'){var tPEV = tPE[1].split(')');thisY = tPEV[0];};
			if(tPE[0]=='translateZ'){var tPEV = tPE[1].split(')');thisZ = tPEV[0];};
			if(tPE[0]=='rotateX'){var tPEV = tPE[1].split('deg)');newRotX = Number(thisRotX);};
			if(tPE[0]=='rotateY'){var tPEV = tPE[1].split('deg)');newRotY = Number(thisRotY);};
			if(tPE[0]=='rotateZ'){var tPEV = tPE[1].split('deg)');newRotZ = Number(thisRotZ);};
			if(tPE[0]=='scaleX'){var tPEV = tPE[1].split(')');thisSX = tPEV[0];};
			if(tPE[0]=='scaleY'){var tPEV = tPE[1].split(')');thisSY = tPEV[0];};
			if(tPE[0]=='scaleZ'){var tPEV = tPE[1].split(')');thisSZ = tPEV[0];};
		}
    }
	catch( err ){ };
    
    mDIV(thisDIV, thisX, thisY, thisZ, newRotX, newRotY, newRotZ, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar)
    
    return;
};

//---------------ROTATE BY ANGLE (± CURRENT)----------;
function rotDIV(thisDIV, thisRotX, thisRotY, thisRotZ, maxX, maxY, maxZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    var thisX = '0px';
    var thisY = '0px';
    var thisZ = '0px';
    var newRotX = Number(thisRotX);
    var newRotY = Number(thisRotY);
    var newRotZ = Number(thisRotZ);
    var thisSX = 1;
    var thisSY = 1;
    var thisSZ = 1;
    var divMove = document.getElementById(thisDIV);
    var transformParts = checkTransition(thisDIV);

    try
    {
		for(var tP=0;tP<transformParts.length;tP++)
		{
			var tPE = transformParts[tP].split('(');
			if(tPE[0]=='translateX'){var tPEV = tPE[1].split(')');thisX = tPEV[0];};
			if(tPE[0]=='translateY'){var tPEV = tPE[1].split(')');thisY = tPEV[0];};
			if(tPE[0]=='translateZ'){var tPEV = tPE[1].split(')');thisZ = tPEV[0];};
			if(tPE[0]=='rotateX')
			{
				var tPEV = tPE[1].split('deg)');
				newRotX = Number(tPEV[0])+Number(thisRotX);
				if(maxX!='')
				{
					if(newRotX>maxX){newRotX = Number(tPEV[0]);}else if(newRotX<(0-maxX)){newRotX = Number(tPEV[0]);};
				}
			};
			if(tPE[0]=='rotateY')
			{
				var tPEV = tPE[1].split('deg)');
				newRotY = Number(tPEV[0])+Number(thisRotY);
				if(maxY!='')
				{
					if(newRotY>maxY){newRotY = Number(tPEV[0]);}else if(newRotY<(0-maxY)){newRotY = Number(tPEV[0]);};
				}
			};
			if(tPE[0]=='rotateZ')
			{
				var tPEV = tPE[1].split('deg)');
				newRotZ = Number(tPEV[0])+Number(thisRotZ);
				if(maxZ!='')
				{
					if(newRotZ>maxZ){newRotZ = Number(tPEV[0]);}else if(newRotZ<(0-maxZ)){newRotZ = Number(tPEV[0]);};
				}
			};
			if(tPE[0]=='scaleX'){var tPEV = tPE[1].split(')');thisSX = tPEV[0];};
			if(tPE[0]=='scaleY'){var tPEV = tPE[1].split(')');thisSY = tPEV[0];};
			if(tPE[0]=='scaleZ'){var tPEV = tPE[1].split(')');thisSZ = tPEV[0];};
		}
	}
	catch( err ){ };
    
    mDIV(thisDIV, thisX, thisY, thisZ, newRotX, newRotY, newRotZ, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar)
    
    return;
};

function rotDIVWait(thisDIV, thisRotX, thisRotY, thisRotZ, maxX, maxY, maxZ, funcWait, easeNo, durationTime, endWait, newFunction, passVar)
{
    store['rotDIV'+thisDIV] = setTimeout(function(){rotDIV(thisDIV, thisRotX, thisRotY, thisRotZ, maxX, maxY, maxZ, easeNo, durationTime, endWait, newFunction, passVar);}, Number(funcWait));
};


//---------------SCALE DIV-----------;
function scaDIV(thisDIV, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    var thisX = '0px';
    var thisY = '0px';
    var thisZ = '0px';
    var thisRotX = 0;
    var thisRotY = 0;
    var thisRotZ = 0;
    var newSX = thisSX;
    var newSY = thisSY;
    var newSZ = thisSZ;
    var divMove = document.getElementById(thisDIV);
    var transformParts = checkTransition(thisDIV);
    if(transformParts != undefined)
    {
        for(var tP=0;tP<transformParts.length;tP++)
        {
            var tPE = transformParts[tP].split('(');
            if(tPE[0]=='translateX'){var tPEV = tPE[1].split(')');thisX = tPEV[0];};
            if(tPE[0]=='translateY'){var tPEV = tPE[1].split(')');thisY = tPEV[0];};
            if(tPE[0]=='translateZ'){var tPEV = tPE[1].split(')');thisZ = tPEV[0];};
            if(tPE[0]=='rotateX'){var tPEV = tPE[1].split('deg)');thisRotX = tPEV[0];};
            if(tPE[0]=='rotateY'){var tPEV = tPE[1].split('deg)');thisRotY = tPEV[0];};
            if(tPE[0]=='rotateZ'){var tPEV = tPE[1].split('deg)');thisRotZ = tPEV[0];};
            if(tPE[0]=='scaleX'){var tPEV = tPE[1].split(')');newSX = Number(tPEV[0])*Number(thisSX);};
            if(tPE[0]=='scaleY'){var tPEV = tPE[1].split(')');newSY = Number(tPEV[0])*Number(thisSY);};
            if(tPE[0]=='scaleZ'){var tPEV = tPE[1].split(')');newSZ = Number(tPEV[0])*Number(thisSZ);};
        }
    }
    
    mDIV(thisDIV, thisX, thisY, thisZ, thisRotX, thisRotY, thisRotZ, newSX, newSY, newSZ, easeNo, durationTime, endWait, newFunction, passVar)
    
    return;
};

//---------------SCALE DIV-----------;
function  scaToDIV(thisDIV, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    var thisX = '0px';
    var thisY = '0px';
    var thisZ = '0px';
    var thisRotX = 0;
    var thisRotY = 0;
    var thisRotZ = 0;
    var newSX = 1;//thisSX;
    var newSY = 1;//thisSY;
    var newSZ = 1;//thisSZ;
    
    if(thisSX!=''){newSX = thisSX;}
    if(thisSY!=''){newSY = thisSY;}
    if(thisSZ!=''){newSZ = thisSZ;}
    
    var divMove = document.getElementById(thisDIV);
    var transformParts = checkTransition(thisDIV);
    if(transformParts != undefined)
    {
        for(var tP=0;tP<transformParts.length;tP++)
        {
            var tPE = transformParts[tP].split('(');
            if(tPE[0]=='translateX'){var tPEV = tPE[1].split(')');thisX = tPEV[0];};
            if(tPE[0]=='translateY'){var tPEV = tPE[1].split(')');thisY = tPEV[0];};
            if(tPE[0]=='translateZ'){var tPEV = tPE[1].split(')');thisZ = tPEV[0];};
            if(tPE[0]=='rotateX'){var tPEV = tPE[1].split('deg)');thisRotX = tPEV[0];};
            if(tPE[0]=='rotateY'){var tPEV = tPE[1].split('deg)');thisRotY = tPEV[0];};
            if(tPE[0]=='rotateZ'){var tPEV = tPE[1].split('deg)');thisRotZ = tPEV[0];};
            if(tPE[0]=='scaleX'){var tPEV = tPE[1].split(')'); if(thisSX!=''){newSX = Number(thisSX);};};
            if(tPE[0]=='scaleY'){var tPEV = tPE[1].split(')'); if(thisSY!=''){newSY = Number(thisSY);};};
            if(tPE[0]=='scaleZ'){var tPEV = tPE[1].split(')'); if(thisSZ!=''){newSZ = Number(thisSZ);};};
        }
    }
    
    mDIV(thisDIV, thisX, thisY, thisZ, thisRotX, thisRotY, thisRotZ, newSX, newSY, newSZ, easeNo, durationTime, endWait, newFunction, passVar)
    
    return;
};


//---------------CHANGE SIZE OF DIV (%)-----------;//---sizPCIV('thisDIV', 'thisW', 'thisH', 'linear', '0', '0', noF, '');
function sizPCDIV(thisDIV, thisW, thisH, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        if(thisW!=''){divMove.style.width = thisW+'%';};
        if(thisH!=''){divMove.style.height = thisH+'%';};
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            newFunction(passVar);
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
    }
    
    return;
};

//---------------CHANGE SIZE OF DIV (PX)-----------;//---sizDIV('thisDIV', 'thisW', 'thisH', 'linear', '0', '0', noF, '');
function sizDIV(thisDIV, thisW, thisH, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        if(thisW!=''){divMove.style.width = thisW+'px';};
        if(thisH!=''){divMove.style.height = thisH+'px';};
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);

            if( newFunction )
            {
				newFunction(passVar);
			}
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
    }
    else
    {
        //trace('no div');
    }
    
    return;
};

function posDIV(thisDIV, thisPOS)
{
	if( document.getElementById( thisDIV ) )
    {
		var divMove = document.getElementById(thisDIV);
		divMove.style.position = thisPOS;
	}
}

function autoHeightDIV(thisDIV)
{
	if( document.getElementById( thisDIV ) )
    {
		var divMove = document.getElementById(thisDIV);
		divMove.style.height = 'auto';
	}
}

function autoWidthDIV(thisDIV)
{
	if( document.getElementById( thisDIV ) )
    {
		var divMove = document.getElementById(thisDIV);
		divMove.style.width = 'auto';
	}
}


function fullHeightDIV(thisDIV)
{
	if( document.getElementById( thisDIV ) )
    {
		var divMove = document.getElementById(thisDIV);
		divMove.style.height = '100%';
	}
}

function overflowDIV(thisDIV,overflowStyle)
{
	if( document.getElementById( thisDIV ) )
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.overflow = overflowStyle;
    }
}

function addDIVOverflowY(thisDIV,overflowStyle)
{
	if( document.getElementById( thisDIV ) )
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.overflowY = overflowStyle;
    }
}

function aDelayDIV( thisDIV, thisDelay )
{
	if( document.getElementById( thisDIV ) )
    {
		var divMove = document.getElementById( thisDIV );
		divMove.style.animationDelay = thisDelay + "s";
	}
}

//---------------MOVE DIV (%)-----------;
function movPCDIV(thisDIV, thisL, thisT, thisR, thisB, easeNo, durationTime, endWait, newFunction, passVar)
{
    var divMove = document.getElementById(thisDIV);
    divMove.style.webkitTransitionTimingFunction = easeNo;
    divMove.style.webkitTransitionDuration = ''+durationTime+'s';
    
    //--FF
    divMove.style.MozTransitionTimingFunction = easeNo;
    divMove.style.MozTransitionDuration = ''+durationTime+'s';
    //--IE
    divMove.style.msTransitionTimingFunction = easeNo;
    divMove.style.msTransitionDuration = ''+durationTime+'s';
    //--O
    //--others
    divMove.style.transitionTimingFunction = easeNo;
    divMove.style.transitionDuration = ''+durationTime+'s';
    
    if(thisL!=''){divMove.style.left= thisL+'%';};
    if(thisT!=''){divMove.style.top = thisT+'%';};
    if(thisR!=''){divMove.style.right = thisR+'%';};
    if(thisB!=''){divMove.style.bottom = thisB+'%';};
    
    function goFunc()
    {
        divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
        divMove.removeEventListener('MozTransitionEnd',goFunc,false);
        if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
        divMove.removeEventListener('oTransitionEnd',goFunc,false);
        divMove.removeEventListener('transitionend',goFunc,false);
        newFunction(passVar);
    }
    
    if(browserName != 'MSIE')
    {
        divMove.addEventListener('webkitTransitionEnd',goFunc,false);
        divMove.addEventListener('MozTransitionEnd',goFunc,false);
        divMove.addEventListener('oTransitionEnd',goFunc,false);
        divMove.addEventListener('transitionend',goFunc,false);
    }
    else
    {
        divMove.attachEvent('MSTransitionEnd',goFunc,false);
    }
    
    return;
};


//---------------MOVE DIV (PX)-----------;
function movDIV(thisDIV, thisL, thisT, thisR, thisB, easeNo, durationTime, endWait, newFunction, passVar)
{
    ////trace('movDIV('+thisDIV+'....)');
    
    if(passVar == undefined){passVar = '';};
    
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        if(thisL!=''){divMove.style.left= thisL+'px';};
        if(thisT!=''){divMove.style.top = thisT+'px';};
        if(thisR!=''){divMove.style.right = thisR+'px';};
        if(thisB!=''){divMove.style.bottom = thisB+'px';};
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            if(newFunction != undefined && newFunction != '')
            {
                newFunction(passVar);
            }
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
        
    }
    
    return;
};

//---------------MULTIPLE ANIMATION OF DIV-----------;

function aDIV(thisDIV, thisX, thisY, thisZ, thisRotX, thisRotY, thisRotZ, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    //    if(document.getElementById(thisDIV))
    //    {
    //        var divMove = document.getElementById(thisDIV);
    //
    ////        divMove.style.transformStyle = 'preserve-3D';
    ////        divMove.style.webkitTransitionTimingFunction = easeNo;
    ////        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
    ////        divMove.style.webkitTransform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisZ+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
    ////        //--FF
    ////        divMove.style.MozTransitionTimingFunction = easeNo;
    ////        divMove.style.MozTransitionDuration = ''+durationTime+'s';
    ////        divMove.style.MozTransform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisY+')  rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
    ////        //--IE
    ////        divMove.style.msTransitionTimingFunction = easeNo;
    ////        divMove.style.msTransitionDuration = ''+durationTime+'s';
    ////        divMove.style.msTransform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisY+')  rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
    ////        //--O
    ////        divMove.style.OTransform = 'translateX('+thisX+') translateY('+thisY+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) scaleX('+thisSX+') scaleY('+thisSY+')';
    ////        //--others
    ////        divMove.style.transitionTimingFunction = easeNo;
    ////        divMove.style.transitionDuration = ''+durationTime+'s';
    //
    //
    //        var player = divMove.animate([
    //                                     {
    //
    //                                      transform = 'translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)'
    //
    //                                     },
    //
    //                                     {
    //
    //                                      transform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisZ+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')'
    //
    //                                     }
    //
    //
    //                                     ], durationTime * 1000);
    //
    //        player.addEventListener('finish', function()
    //                                {
    //
    //                                target.style.transform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisZ+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
    //
    //                                });
    //
    ////        if(newFunction != undefined)
    ////        {
    ////            function goFunc()
    ////            {
    ////                divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
    ////                divMove.removeEventListener('MozTransitionEnd',goFunc,false);
    ////                if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
    ////                divMove.removeEventListener('oTransitionEnd',goFunc,false);
    ////                divMove.removeEventListener('transitionend',goFunc,false);
    ////                newFunction(passVar);
    ////            }
    ////
    ////            if(browserName != 'MSIE')
    ////            {
    ////                divMove.addEventListener('webkitTransitionEnd',goFunc,false);
    ////                divMove.addEventListener('MozTransitionEnd',goFunc,false);
    ////                divMove.addEventListener('oTransitionEnd',goFunc,false);
    ////                divMove.addEventListener('transitionend',goFunc,false);
    ////            }
    ////            else
    ////            {
    ////                divMove.attachEvent('MSTransitionEnd',goFunc,false);
    ////            }
    ////        }
    //
    //    }
    return;
};


function mZDIV(thisDIV, thisZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById( thisDIV );
        divMove.style.transformStyle = 'preserve-3D';
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        divMove.style.webkitTransform = 'translateZ('+thisZ+')';
	}
}

//---------------MULTIPLE TRANSORM OF DIV-----------;
function mDIV(thisDIV, thisX, thisY, thisZ, thisRotX, thisRotY, thisRotZ, thisSX, thisSY, thisSZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.transformStyle = 'preserve-3D';
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        divMove.style.webkitTransform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisZ+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        divMove.style.MozTransform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisY+')  rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        divMove.style.msTransform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisY+')  rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')';
        //--O
        divMove.style.OTransform = 'translateX('+thisX+') translateY('+thisY+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) scaleX('+thisSX+') scaleY('+thisSY+')';
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        divMove.style.transform = 'translateX('+thisX+') translateY('+thisY+') translateZ('+thisZ+') rotateX('+thisRotX+'deg) rotateY('+thisRotY+'deg) rotateZ('+thisRotZ+'deg) scaleX('+thisSX+') scaleY('+thisSY+') scaleZ('+thisSZ+')'
        
        if(newFunction != undefined)
        {
            function goFunc()
            {
                divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
                divMove.removeEventListener('MozTransitionEnd',goFunc,false);
                if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
                divMove.removeEventListener('oTransitionEnd',goFunc,false);
                divMove.removeEventListener('transitionend',goFunc,false);
                newFunction(passVar);
            }
            
            if(browserName != 'MSIE')
            {
                divMove.addEventListener('webkitTransitionEnd',goFunc,false);
                divMove.addEventListener('MozTransitionEnd',goFunc,false);
                divMove.addEventListener('oTransitionEnd',goFunc,false);
                divMove.addEventListener('transitionend',goFunc,false);
            }
            else
            {
                divMove.attachEvent('MSTransitionEnd',goFunc,false);
            }
        }
        
    }
    return;
};

//---------------CHANGE MARGIN OF DIV (%)-----------;
function margPCDIV(thisDIV, thisML, thisMT, thisMR, thisMB, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
		var divMove = document.getElementById(thisDIV);
		divMove.style.webkitTransitionTimingFunction = easeNo;
		divMove.style.webkitTransitionDuration = ''+durationTime+'s';
		
		//--FF
		divMove.style.MozTransitionTimingFunction = easeNo;
		divMove.style.MozTransitionDuration = ''+durationTime+'s';
		//--IE
		divMove.style.msTransitionTimingFunction = easeNo;
		divMove.style.msTransitionDuration = ''+durationTime+'s';
		//--O
		//--others
		divMove.style.transitionTimingFunction = easeNo;
		divMove.style.transitionDuration = ''+durationTime+'s';
		
		if(thisML!=''){divMove.style.marginLeft= thisML+'%';};
		if(thisMT!=''){divMove.style.marginTop = thisMT+'%';};
		if(thisMR!=''){divMove.style.marginRight = thisMR+'%';};
		if(thisMB!=''){divMove.style.marginBottom = thisMB+'%';};
		
		function goFunc()
		{
			divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
			divMove.removeEventListener('MozTransitionEnd',goFunc,false);
			if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
			divMove.removeEventListener('oTransitionEnd',goFunc,false);
			divMove.removeEventListener('transitionend',goFunc,false);
			newFunction(passVar);
		}
		
		if(browserName != 'MSIE')
		{
			divMove.addEventListener('webkitTransitionEnd',goFunc,false);
			divMove.addEventListener('MozTransitionEnd',goFunc,false);
			divMove.addEventListener('oTransitionEnd',goFunc,false);
			divMove.addEventListener('transitionend',goFunc,false);
		}
		else
		{
			divMove.attachEvent('MSTransitionEnd',goFunc,false);
		}
	}
    
    return;
};

//---------------CHANGE MARGIN OF DIV (PX)-----------;
function padDIV(thisDIV, thisML, thisMT, thisMR, thisMB, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        if(thisML!=''){divMove.style.paddingLeft= thisML+'px';};
        if(thisMT!=''){divMove.style.paddingTop = thisMT+'px';};
        if(thisMR!=''){divMove.style.paddingRight = thisMR+'px';};
        if(thisMB!=''){divMove.style.paddingBottom = thisMB+'px';};
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            newFunction(passVar);
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
    }
    return;
};

//---------------CHANGE MARGIN OF DIV (PX)-----------;
function margDIV(thisDIV, thisML, thisMT, thisMR, thisMB, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        if(thisML!=''){divMove.style.marginLeft= thisML+'px';};
        if(thisMT!=''){divMove.style.marginTop = thisMT+'px';};
        if(thisMR!=''){divMove.style.marginRight = thisMR+'px';};
        if(thisMB!=''){divMove.style.marginBottom = thisMB+'px';};
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            
            if( newFunction )
            {
				newFunction(passVar);
			}
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
    }
    return;
};

//---------------CHANGE BACKGROUND OF DIV-----------;
function bgDIV(thisDIV, thisBG, easeNo, durationTime, endWait, newFunction, passVar)
{
    ////trace('bgDIV('+thisDIV+', '+thisBG+', '+easeNo+', '+durationTime+', '+endWait+', '+newFunction+', '+passVar+')');
    
    if(document.getElementById(thisDIV))
    {
        if(thisBG!='')
        {
            var divMove = document.getElementById(thisDIV);
            divMove.style.webkitTransitionTimingFunction = easeNo;
            divMove.style.webkitTransitionDuration = ''+durationTime+'s';
            
            //--FF
            divMove.style.MozTransitionTimingFunction = easeNo;
            divMove.style.MozTransitionDuration = ''+durationTime+'s';
            //--IE
            divMove.style.msTransitionTimingFunction = easeNo;
            divMove.style.msTransitionDuration = ''+durationTime+'s';
            //--O
            //--others
            divMove.style.transitionTimingFunction = easeNo;
            divMove.style.transitionDuration = ''+durationTime+'s';
            
            divMove.style.background = thisBG;
            
        };
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            if(newFunction){newFunction(passVar);};
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
        
    }
    
    return;
};

function bgColDIV(thisDIV, thisBG, easeNo, durationTime, endWait, newFunction, passVar)
{
    ////trace('bgDIV('+thisDIV+', '+thisBG+', '+easeNo+', '+durationTime+', '+endWait+', '+newFunction+', '+passVar+')');
    
    if(document.getElementById(thisDIV))
    {
        if(thisBG!='')
        {
            var divMove = document.getElementById(thisDIV);
            divMove.style.webkitTransitionTimingFunction = easeNo;
            divMove.style.webkitTransitionDuration = ''+durationTime+'s';
            
            //--FF
            divMove.style.MozTransitionTimingFunction = easeNo;
            divMove.style.MozTransitionDuration = ''+durationTime+'s';
            //--IE
            divMove.style.msTransitionTimingFunction = easeNo;
            divMove.style.msTransitionDuration = ''+durationTime+'s';
            //--O
            //--others
            divMove.style.transitionTimingFunction = easeNo;
            divMove.style.transitionDuration = ''+durationTime+'s';
            
            divMove.style.backgroundColor = thisBG;
            
        };
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            if(newFunction){newFunction(passVar);};
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
        
    }
    
    return;
};

//---------------------------------------------------------------------------;

var srcCount = 0;
var srcList = new Array();

function imgDetail( url )
{
	//--- url is full css bg url i.e "url( urlstring )"
	var srcLocation = url.substring(5, 9);
	
	if( srcLocation == "http" )
	{
		var urlElementsSplit = url.split( " " );
		var justURL = urlElementsSplit[ 1 ];
		
		if (justURL && justURL.length > 0)
		{
			var varSplit 	= justURL.split( "?u=" );
			var thisURL 	= varSplit[0];
			
			srcList.push( thisURL );
			
//			//--- NSLOG ALL NEW DOWNLOADS
//			var img = new Image();
//			if( varSplit.length == 1 )
//			{
//				img.onload = function()
//				{
//					srcCount++;
//					NSLog( "--------------------- > NEW SRC: " + srcCount + " [" + justURL + "]" );
//				}
//			}
//			else
//			{
//				img.onload = function()
//				{
//					NSLog( "--------------------- > SRC: " + " [" + justURL + "]" );
//				}
//			}
//			img.src = thisURL;
		}
		
		//NSLog( "SRC LIST:" + srcList.join( "," ) );
	}
	
	return;
}

function coverBGDIV( thisDIV, thisBG )
{
    if(document.getElementById(thisDIV))
    {
        var divMoveL = document.getElementById(thisDIV);
        divMoveL.style.background= thisBG;
        divMoveL.style.backgroundRepeat = 'no-repeat';
        divMoveL.style.backgroundPosition = '50% 50%';
        divMoveL.style.backgroundSize = 'cover';
        //logThis("coverBGDIV("+thisDIV+","+thisBG+")");
        
        imgDetail( thisBG );
    }
}

function fullBGDIV( thisDIV, thisBG, easeNo, durationTime )
{
    if(document.getElementById(thisDIV))
    {
		var divMove = document.getElementById( thisDIV );
		
		divMove.style.webkitTransitionTimingFunction 	= easeNo;
		divMove.style.webkitTransitionDuration 			= ''+durationTime+'s';
		
		//--FF
		divMove.style.MozTransitionTimingFunction 		= easeNo;
		divMove.style.MozTransitionDuration 			= ''+durationTime+'s';
		//--IE
		divMove.style.msTransitionTimingFunction 		= easeNo;
		divMove.style.msTransitionDuration 				= ''+durationTime+'s';
		//--O
		//--others
		divMove.style.transitionTimingFunction 			= easeNo;
		divMove.style.transitionDuration 				= ''+durationTime+'s';
        
        //var divMove = document.getElementById(thisDIV);
        divMove.style.background		= thisBG;
        divMove.style.backgroundRepeat 	= 'no-repeat';
        divMove.style.backgroundPosition = '50% 50%';
        divMove.style.backgroundSize 	= 'cover';
        //logThis("centreBGDIV("+thisDIV+","+thisBG+")");
    }
    else
    {
        
    }
}

function centreBGDIV(thisDIV,thisBG)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.background= thisBG;
        divMove.style.backgroundRepeat = 'no-repeat';
        divMove.style.backgroundPosition = '50% 50%';
        divMove.style.backgroundSize = 'auto 100%';
        //logThis("centreBGDIV("+thisDIV+","+thisBG+")");
    }
}

function topBGDIV(thisDIV,thisBG)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.background= thisBG;
        divMove.style.backgroundRepeat = 'no-repeat';
        divMove.style.backgroundPosition = '0% 0%';
        divMove.style.backgroundSize = '100% auto';
        //logThis("centreBGDIV("+thisDIV+","+thisBG+")");
    }
    else
    {
        
    }
}

//--------------------------------------------------------------------------------------;


//---------------CHANGE OPACITY OF DIV-----------;
function oDIV(thisDIV, thisO, easeNo, durationTime, endWait, newFunction, passVar)
{
    ////trace(passVar);
    
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        
        function goFunc()
        {
            ////trace('oDIV -'+divMove.id);
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            if(newFunction){newFunction(passVar);};
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
        
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        divMove.style.opacity= thisO;
        
    }
    else
    {
        //console.log('ERROR oDIV:'+thisDIV);
    }
    return;
};

function oDIVWait(thisDIV, thisO, funcWait, easeNo, durationTime, endWait, newFunction, passVar)
{
    store['oDIV'+thisDIV] = setTimeout(function(){oDIV(thisDIV, thisO, easeNo, durationTime, endWait, newFunction, passVar);}, Number(funcWait));
}




//---------------CHANGE OPACITY OF DIV-----------;
function zIndexDIV(thisDIV, thisZ, easeNo, durationTime, endWait, newFunction, passVar)
{
    ////trace(passVar);
    
    var divMove = document.getElementById(thisDIV);
    divMove.style.webkitTransitionTimingFunction = easeNo;
    divMove.style.webkitTransitionDuration = ''+durationTime+'s';
    
    //--FF
    divMove.style.MozTransitionTimingFunction = easeNo;
    divMove.style.MozTransitionDuration = ''+durationTime+'s';
    //--IE
    divMove.style.msTransitionTimingFunction = easeNo;
    divMove.style.msTransitionDuration = ''+durationTime+'s';
    //--O
    //--others
    divMove.style.transitionTimingFunction = easeNo;
    divMove.style.transitionDuration = ''+durationTime+'s';
    
    divMove.style.zIndex= thisZ;
    
    function goFunc()
    {
        divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
        divMove.removeEventListener('MozTransitionEnd',goFunc,false);
        if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
        divMove.removeEventListener('oTransitionEnd',goFunc,false);
        divMove.removeEventListener('transitionend',goFunc,false);
        newFunction(passVar);
    }
    
    if(browserName != 'MSIE')
    {
        divMove.addEventListener('webkitTransitionEnd',goFunc,false);
        divMove.addEventListener('MozTransitionEnd',goFunc,false);
        divMove.addEventListener('oTransitionEnd',goFunc,false);
        divMove.addEventListener('transitionend',goFunc,false);
    }
    else
    {
        divMove.attachEvent('MSTransitionEnd',goFunc,false);
    }
    
    return;
};


//---------------CENTER A DIV IN WIDTH OF PARENT-----------;
function centerXDIV(thisDIV, easeNo, durationTime, endWait, newFunction, passVar)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        divMove.style.left= '50%';
        divMove.style.marginLeft = (0-(divMove.offsetWidth*0.5))+'px';
        
        function goFunc()
        {
            divMove.removeEventListener('webkitTransitionEnd',goFunc,false);
            divMove.removeEventListener('MozTransitionEnd',goFunc,false);
            if(browserName == 'MSIE'){divMove.detachEvent('MSTransitionEnd',goFunc,false);};
            divMove.removeEventListener('oTransitionEnd',goFunc,false);
            divMove.removeEventListener('transitionend',goFunc,false);
            newFunction(passVar);
        }
        
        if(browserName != 'MSIE')
        {
            divMove.addEventListener('webkitTransitionEnd',goFunc,false);
            divMove.addEventListener('MozTransitionEnd',goFunc,false);
            divMove.addEventListener('oTransitionEnd',goFunc,false);
            divMove.addEventListener('transitionend',goFunc,false);
        }
        else
        {
            divMove.attachEvent('MSTransitionEnd',goFunc,false);
        }
        
    }
    
    return;
};

//---------------SHOW DIV-----------;
function fadeInDIV( thisDIV )
{
    if( document.getElementById( thisDIV ) )
    {
		var divMove = document.getElementById( thisDIV );

		var oVal = window.getComputedStyle( divMove ).getPropertyValue( "opacity" );
    
		divMove.style.opacity = 0;
    
		divMove.style.visibility = 'visible';
		
		oDIV( thisDIV, oVal, "linear", 4 );
    }
}


//---------------SHOW DIV-----------;
function showDIV(thisDIV, immediate )
{
    if(document.getElementById( thisDIV ))
    {
		var divMove = document.getElementById( thisDIV );

		if( immediate )
		{
			divMove.style.opacity = 1;							//--- 010821
			divMove.style.visibility = 'visible';
		}
		else
		{
			var oVal = window.getComputedStyle( divMove ).getPropertyValue( "opacity" ); 	//--- 010821
		
			divMove.style.opacity = 0;							//--- 010821
		
			divMove.style.visibility = 'visible';
			
			var wait = setTimeout( function()					//--- 010821
			{
				oDIV( thisDIV, oVal, "easeIn", 0.5 );			//--- 010821
				
			}, 10);
		}
    }
}

//---------------HIDE DIV-----------;
function hideDIV(thisDIV, immediate)
{
    if(document.getElementById(thisDIV))
    {
		//var divMove = document.getElementById(thisDIV);
		//divMove.style.visibility = 'hidden';
		
		//--------- 080722
		
		var divMove = document.getElementById( thisDIV );

		if( immediate )
		{
			//divMove.style.opacity = 0;
			divMove.style.visibility = 'hidden';
		}
		else
		{
			var oVal = window.getComputedStyle( divMove ).getPropertyValue( "opacity" );
		
			oDIV( thisDIV, 0, "easeIn", 0.5 );
			
			var wait = setTimeout( function()
			{
				divMove.style.visibility = 'hidden';
				
				oDIV( thisDIV, oVal, "easeIn", 0 );

			}, 500);
		}
    }
}

function displayHideDIV( thisDIV, immediate)
{
    if( document.getElementById( thisDIV ) )
    {
		//--------- 080722
		
		var divMove = document.getElementById( thisDIV );

		if( immediate )
		{
			//divMove.style.visibility = 'hidden';
			divMove.style.display = "none";
		}
		else
		{
			var oVal = window.getComputedStyle( divMove ).getPropertyValue( "opacity" );
		
			oDIV( thisDIV, 0, "easeIn", 0.5 );
			
			var wait = setTimeout( function()
			{
				//divMove.style.visibility = 'hidden';
				divMove.style.display = "none";
				
				oDIV( thisDIV, oVal, "easeIn", 0 );

			}, 500);
		}
    }
}


function displayNoneDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "none";
//        clearTimeout(hideDIVTimer);
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

function displayBlockDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "block";
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

function displayInlineDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "inline";
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

function displayInitialDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "initial";
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

function displayInheritDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "inherit";
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

function displayInlineBlockDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "inline-block";
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

function displayFlexDIV(thisDIV, thisWait)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.display = "flex";
    }
    else
    {
        ////trace('** hideDiv : NO DIV');
    }
}

//-------------------------------------------------------;
//------------------------------FILTERS------------------;
//-------------------------------------------------------;

//------------FILTER BLUR-------------;
function addFilterBlurDIV(thisDIV,filterVAR)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.WebkitFilter = "blur("+filterVAR+"px)"; //px
        divMove.style.filter = "blur("+filterVAR+"px)";
    }
}

//------------FILTER HUE-------------;
function addFilterHueDIV(thisDIV,filterVAR)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        
        divMove.style.WebkitFilter = "hue-rotate("+filterVAR+"deg)"; //deg
        divMove.style.filter = "hue-rotate("+filterVAR+"deg)";
    }
}

//------------FILTER SATURATE-------------;
function addFilterSaturateDIV(thisDIV,filterVAR,easeNo, durationTime)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        divMove.style.WebkitFilter = "saturate("+filterVAR+"%)"; //%
        divMove.style.filter = "saturate("+filterVAR+"%)"; //%
    }
}

//------------FILTER GREYSCALE-------------;
function addFilterGreyscaleDIV(thisDIV,filterVAR)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.style.WebkitFilter = "greyscale("+filterVAR+"%)"; //%
        moveDIV.style.filter = "greyscale("+filterVAR+"%)"; //%
    }
}

//------------REMOVE FILTERS-------------;
function remFilterDIV(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var moveDIV = document.getElementById(thisDIV);
        moveDIV.style.WebkitFilter = "initial"; //deg
        moveDIV.style.filter = "initial";
    }
}

//-------------------------------------------------------;
//-------------------------------------------------------;
//-------------------------------------------------------;

//---------------ADD PADDING-----------;
function paddDIV(thisDIV,thisPad)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.padding = thisPad;
    }
}

//---------------ADD PADDING TOP-----------;
function paddingTopDIV(thisDIV,thisPad)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.paddingTop = thisPad;
    }
}

//---------------ADD COLOR TO TEXT-----------;
function textColDIV(thisDIV,bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.color = bCol;
    }
}

//---------------GET DIV COLOR TO TEXT-----------;
function getBGColDIV( thisDIV )
{
    if( document.getElementById( thisDIV ) )
    {
        var divMove = document.getElementById( thisDIV );
        
		var bgCol = window.getComputedStyle( divMove, null ).getPropertyValue('background-color');

        //var bgCol = divMove.style.backgroundColor;
        
        return bgCol;
    }
}

//---------------CHANGE LINK COLORS-------;

function colAllLinkTags(tag,hex)
{
    var links = document.getElementsByTagName(tag);
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;
            links[i].style.textDecoration = 'none';
        }
    }
}


//---------------ADD GLOW TO TEXT-----------;
function textGlowDIV(thisDIV,bWidth,bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.textShadow = "0px 0px "+bWidth+"px "+bCol;
    }
}


//---------------ADD GLOW TO DIV-----------;
function glowDIV(thisDIV,bWidth,bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.boxShadow = "0px 0px "+bWidth+"px "+bCol;
    }
}

//---------------ADD GLOW TO DIV-----------;
function slowGlowDIV(thisDIV,bWidth,bCol,easeNo,durationTime)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransitionTimingFunction = easeNo;
        divMove.style.webkitTransitionDuration = ''+durationTime+'s';
        
        //--FF
        divMove.style.MozTransitionTimingFunction = easeNo;
        divMove.style.MozTransitionDuration = ''+durationTime+'s';
        //--IE
        divMove.style.msTransitionTimingFunction = easeNo;
        divMove.style.msTransitionDuration = ''+durationTime+'s';
        //--O
        //--others
        divMove.style.transitionTimingFunction = easeNo;
        divMove.style.transitionDuration = ''+durationTime+'s';
        
        divMove.style.boxShadow = "0px 0px "+bWidth+"px "+bCol;
    }
}


//---------------ADD CORNER TO DIV-----------;
function cornerDIV(thisDIV,cRad)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.borderRadius = cRad;
    }
}

//---------------ADD BORDER TO DIV-----------;
function borderDIV(thisDIV,bWidth,bStyle,bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.borderWidth = bWidth;
        divMove.style.borderStyle = bStyle;
        divMove.style.borderColor = bCol;
    }
}

//---------------ADD BORDER TO DIV SIDE-----------;
function borderLeftDIV(thisDIV, bWidth, bStyle, bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.borderLeft = bWidth + " " + bStyle + " " + bCol;
    }
}

function borderRightDIV(thisDIV, bWidth, bStyle, bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.borderRight = bWidth + " " + bStyle + " " + bCol;
    }
}

function borderBottomDIV(thisDIV, bWidth, bStyle, bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.borderBottom = bWidth + " " + bStyle + " " + bCol;
    }
}

function borderTopDIV(thisDIV, bWidth, bStyle, bCol)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.borderTop = bWidth + " " + bStyle + " " + bCol;
    }
}

//---------------ADD FOCUS TO DIV-----------;
function focusDIV(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.focus();
    }
}

//---------------REMOVE FOCUS FROM DIV-----------;
function blurDIV(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.blur();
    }
}

//---------------PRESERVE 3D---------------------;
function p3DDIV(thisDIV)
{
    if(document.getElementById(thisDIV))
    {
        var divMove = document.getElementById(thisDIV);
        divMove.style.webkitTransformStyle = 'preserve-3d';
        divMove.style.mozTransformStyle = 'preserve-3d';
        divMove.style.msTransformStyle = 'preserve-3d';
        divMove.style.transformStyle = 'preserve-3d';
    }
}


function randHexCol(minHex,maxHex)
{
    var randColR = rHexUnit(minHex,maxHex);
    var randColG = rHexUnit(minHex,maxHex);
    var randColB = rHexUnit(minHex,maxHex);
    return '#'+randColR+''+randColG+''+randColB+'';
}

function rHexUnit(minHex,maxHex)
{
    var thisUnit = Math.floor((Math.random()*(maxHex-minHex))+minHex).toString(16);
    if(thisUnit.length==1){thisUnit='0'+thisUnit;};
    return thisUnit;
}

function randRGBa(minVal,maxVal,aVal)
{
    var unitR = Math.floor((Math.random()*(maxVal-minVal))+minVal);
    var unitG = Math.floor((Math.random()*(maxVal-minVal))+minVal);
    var unitB = Math.floor((Math.random()*(maxVal-minVal))+minVal);
    return 'rgba('+unitR+','+unitG+','+unitB+','+aVal+')';
}

////////////////////////////////////////////[ SCREEN MOVEMENT FUNCTIONS ]////////////////////////////////////////////;

function getDefaultMouseXY(event)
{
	if (browserPrefix=="MSIE")
	{
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	}
	else
	{
		if(clickMove=='touchmove')
		{
			var touch = event.touches[0];
			tempX= touch.pageX;
			tempY= touch.pageY;
		}
		else
		{
			tempX = event.pageX;
			tempY = event.pageY;
		}
	}
	if (tempX < 0){tempX = 0;};
	if (tempY < 0){tempY = 0;};

	return true;
}; // changes tempX / tempY;

var startX1 = 0;
var startX2 = 0;
var startY1 = 0;
var startY2 = 0;

function startTouches( event )
{
	if( event.touches )
	{
		if( event.touches.length > 1 )
		{
			startX1 = event.touches[ 0 ].pageX;
			startX2 = event.touches[ 1 ].pageX;
			startY1 = event.touches[ 0 ].pageY;
			startY2 = event.touches[ 1 ].pageY;
			
			return true;
		}
	}
	
	return false;
}

function touchDistance( event )
{
	if( event.touches )
	{
		if( event.touches.length > 1 )
		{
			var startOpp = startY1 - startY2;
			var startAdj = startX1 - startX2;
			var startHyp = getHyp( startOpp, startAdj );
		
			var x1 = event.touches[ 0 ].pageX;
			var x2 = event.touches[ 1 ].pageX;

			var y1 = event.touches[ 0 ].pageY;
			var y2 = event.touches[ 1 ].pageY;

			var opp 	= y1 - y2;
			var adj 	= x1 - x2;
			var moveHyp = getHyp( opp, adj );
			
			readOut( moveHyp + " | " + startHyp );

			return moveHyp - startHyp;
		}
	}
	
	return false;
}

function getMouseXY(event)
{
    if (browserPrefix=="MSIE")
    {
        tempX = event.clientX + document.body.scrollLeft;
        tempY = event.clientY + document.body.scrollTop;
    }
    else
    {
        if(clickMove=='touchmove')
        {
            var touch = event.touches[0];
            tempX= touch.pageX;
            tempY= touch.pageY;
        }
        else
        {
            tempX = event.pageX;
            tempY = event.pageY;
        }
    }
    if (tempX < 0){tempX = 0;};
    if (tempY < 0){tempY = 0;};
    
    event.preventDefault();
    
    return true;
}; // changes tempX / tempY;


function getLiveMouseXY( event )
{
    //event.preventDefault();
    if (browserPrefix=="MSIE")
    {
        tempX = event.clientX + document.body.scrollLeft;
        tempY = event.clientY + document.body.scrollTop;
    }
    else
    {
        if(clickMove=='touchmove' && event.touches )
        {
            var touch = event.touches[0];
            tempX= touch.pageX;
            tempY= touch.pageY;
        }
        else
        {
            tempX = event.pageX;
            tempY = event.pageY;
        }
    }
    if (tempX < 0){tempX = 0;};
    if (tempY < 0){tempY = 0;};
    return true;
}; // changes tempX / tempY;


