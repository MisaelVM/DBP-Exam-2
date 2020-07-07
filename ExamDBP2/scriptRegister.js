$(document).ready(function() {
	$("#submit").click(function(e) {
		e.preventDefault();
		var form_name = document.getElementById("name").value;
		var form_description = document.getElementById("description").value;
		var sendInfo = {
			"name": form_name,
			"description": form_description
		};
		console.log("Name: " + form_name + " Description: " + form_description);
		$.ajax({
			url: "http://localhost:8080/CategoryRestService/Add",
			type: 'PUT',
			dataType: "json",
			contentType : "application/json",
			data: JSON.stringify(sendInfo),
			success: function (msg) {
               if (msg) {
                   alert(form_name + " successfully registered");
                   console.log("Category successfully registered");
               } else {
                   alert("could not save " + form_name);
                   console.log("Something went wrong, the category was not registered");
               }
           },
		});
	});
});