function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3:
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bПутин\b/g, "Щизоид");
	v = v.replace(/\bпутин\b/g, "щизоид");
	v = v.replace(/\bPutin\b/g, "Щизоид");
	v = v.replace(/\bputin\b/g, "щизоид");
  v = v.replace(/\bПутина\b/g, "Щизоида");
  v = v.replace(/\bпутина\b/g, "щизоида");
  v = v.replace(/\bPutina\b/g, "Щизоида");
  v = v.replace(/\bputina\b/g, "щизоида");
	v = v.replace(/\bВладимир\b/g, "Старый");
  v = v.replace(/\bвладимир\b/g, "старый");
  v = v.replace(/\bVladimir\b/g, "Старый");
  v = v.replace(/\bvladimir\b/g, "старый");
	textNode.nodeValue = v;
}

walk(document.body);


//HIHIHIHAHAHAH GFY