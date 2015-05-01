/* This file looks for a link to a thumbnail on the Full Results display. It replaces it with the link with the thumbnail, removes the link, and adds a link to the newly created image. */
$(document).ready(function(){
	$("span.EXLDetailsLinksTitle > a").each(function(i){
		var isthumb = $(this).html().trim();
		if (isthumb == "View Thumbnail"){
			var thumbvalue = $(this).attr('href');
			$("span.EXLDetailsLinksTitle").last().append('<img id="islandthumb">');
			$("#islandthumb").attr("src",thumbvalue);
			$(this).remove();
		}
	});
	var aretherethumbs = $('#islandthumb').length;
	if (aretherethumbs == 1){
		$("span.EXLDetailsLinksTitle > a").each(function(i){
			var isthistheitem = $(this).html().trim();
			if (isthistheitem == "View Item"){
				var linktothumb = $(this).attr('href');
				$("span.EXLDetailsLinksTitle").last().append('<a id="linktothumb"></a>');
				$("#linktothumb").attr("href",linktothumb);
				$("#islandthumb").appendTo("#linktothumb");
			}	
		});
	}
});