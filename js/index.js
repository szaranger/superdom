document.getElementById('apply').onclick = function() {
	console.log(

		DOM.get('A'),
		DOM.get('A').html('A'),
		DOM.get('A').html('A', 'B'),
		DOM.get('B').replace(DOM.get('D'))

	);
};
