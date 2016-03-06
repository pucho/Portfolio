$( document ).ready(function() {
		if ($("._main").length.text == undefined){
			$("._main").load("https://raw.githubusercontent.com/pucho/pucho.github.io/master/partials/_main.html");
		}

		// Load resume on resume click
		$("._main").on("click", "#resume", function(){
			$("._main").load("https://raw.githubusercontent.com/pucho/pucho.github.io/master/partials/_resume.html");
		});
		//Load main on click
		$("._main").on("click", "#back", function(){
			$("._main").load("https://raw.githubusercontent.com/pucho/pucho.github.io/master/partials/_main.html");
		});
		//Change cursor on mouseover
		$("._main").on("mouseover", "#resume", function(){
			$('#resume').css('cursor', 'pointer');
		});
    $("._main").on("mouseover", "#back", function(){
			$('#back').css('cursor', 'pointer');
		});
});
