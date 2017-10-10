$(function(){
	console.log("Common js loaded")

	//Scenes
	localStorage.setItem("memorygame", JSON.stringify({
		scenes: "splash"
	}))

	$(".btn-start").on("click", function () {
		localStorage.setItem("memorygame", JSON.stringify({
			scenes: "play"
		}))

		$(".logo").animate({"top": "20px"})
		$(".logo h1").animate({"font-size": "40px"})
		$(".logo .row .col-12:nth-child(1)").addClass("col-6 text-center text-md-left")
		$(".logo .row .col-12:nth-child(2)").addClass("col-6 text-center text-md-right")
	})

})