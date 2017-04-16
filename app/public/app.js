function myFunction(element) {

		var newName = $("#name").val();
		var newPhoto = $("#photo").val();	

		//==========================================
		//Creating an Array from our user's Choices
		//==========================================
			var newArray = [];
			
			for( i= 1; i <= element; i++){
				var sel = 'sel' + i;
				var select = document.getElementById(sel);
				for( var j = 0; j < select.length; j++) {
					if( select[j].selected) {
						newArray.push(select.value);
					}
				}
			}
		console.log(newArray);
		

		//==========================================
		//Parsing the Array into Integers
		//==========================================
		var result = newArray.map(function (x) {
			return parseInt(x, 10);
		});
		
		console.log(result);

		//==========================================
		//Adding the numbers up to one sum
		//==========================================
		function getSum(total, num) {
			return total + num;
		}
		function sumFunction(item) {
			return result.reduce(getSum);
		}
		
		console.log(sumFunction());
		
		console.log(newName);
		console.log(newPhoto);
		
		//=========================================
		//Creating Model out of Information
		//=========================================
		var newAnswer = {
			name: newName,
			photo: newPhoto,
			scores: result,
			total: sumFunction()
		};

		//Send an AJAX POST w/ Jquery
		$.post("api/answer", newAnswer)
		// on sucess run callback
		.done(function(data) {
			console.log(data);
		});
		//Empty our name and photo input boxes:
		$("#name").val("");
		$("#photo").val("");
		
		};
		