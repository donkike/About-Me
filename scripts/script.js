$(document).ready(function() {
	
	// sets mask on top of the page
	function setMask() {
		var maskHeight = $(document).height(); // get window sizes for mask
		var maskWidth = $(window).width();
		$('#mask').css({'width': maskWidth, 'height': maskHeight}); // set mask size
		$('#mask').fadeIn(1000); // fade effects
		$('#mask').fadeTo('slow', 0.8);
	};
	
	function closeEdit() {
		$("div#edit").animate({'margin-top':'-500px'}, 400);
		$("#edit").hide(400);
	};
	
	// drags up/down menu
	$("div#drag-menu").click(function() {
		if ($("div#menu-options").is(":hidden")) {
			$("div#menu-options").animate({'margin-top':'0'}, 600);
			$("div#menu-options").show();
		} else {
			$("div#menu-options").animate({'margin-top':'-60px'}, 400);
			$("div#menu-options").hide(400);
		}
	});
	
	// link to show a modal dialog
	$("a[name=modal]").click(function(e) {
		e.preventDefault(); // override default behavior
		var id = $(this).attr('href'); // get div element which is the modal dialog
		setMask();
		var winH = $(window).height(); // get window sizes for modal dialog
		var winW = $(window).width();
		$(id).css('top', winH / 2 - $(id).height() / 2); // set position of modal dialog
		$(id).css('left', winW / 2 - $(id).width() / 2);
		$(id).fadeIn(2000); // effects
	});
	
	// close modal dialog
	$("a.close-about").click(function(e) {
		e.preventDefault();
		$("#mask, #about").hide();
	});
	
	// open edit menu
	$("a[name=slide]").click(function(e) {
		e.preventDefault();
		id = $(this).attr('href');
		setMask();
		var winW = $(window).width();
		$(id).css('left', winW / 2 - $(id).width() / 2);
		$(id).animate({'margin-top':'0'}, 1000);
		$(id).show();
	});
	
	// change content position
	$("div#edit td").click(function() {
		var opt = $(this).attr('name');
		$("div#edit td").removeClass();
		$(this).addClass('selected');
		$("div#content").removeClass();
		$("div#content").addClass(opt);
	});
	
	// change text align
	$("div#edit input[name=text-align]").click(function() {
		var opt = $(this).attr('value');
		$("div#content-info").removeClass();
		$("div#content-info").addClass(opt);
	});
	
	// close edit menu with accept
	$("div#edit a").click(function() {
		var re = /^#[a-fA-F0-9]{3,6}$/
		var color = $("div#color input").val();
		if (color) {			
			if (color.match(re)) {
				$("div#content p").css({'color':color});			
			} else {
				alert("No ingresó un color válido. Debe comenzar por '#', seguido de 3 o 6 dígitos hexadecimales.");
				$("div#color input").val("");
			}
		}
		closeEdit();
		$("#mask").hide();
	});
	
	// close anything when mask is clicked
	$("#mask").click(function() {
		if ($("#about").is(":visible")) {
			$("#about").hide();
		}
		if ($("#edit").is(":visible")) {			
			closeEdit();
		}
		$(this).hide();
	});
});