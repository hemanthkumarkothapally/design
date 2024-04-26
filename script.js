document.getElementById('landForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var landWidth = parseInt(document.getElementById('landWidth').value);
    var landHeight = parseInt(document.getElementById('landHeight').value);

    fetch('/generate_building', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'landWidth=' + landWidth + '&landHeight=' + landHeight
    })
    .then(response => response.json())
    .then(data => {
        var buildingOutput = document.getElementById('buildingOutput');
        buildingOutput.innerHTML = `<h2>Generated Building Design</h2>
                                    <p>Type: ${data.building_type}</p>
                                    <p>Floors: ${data.floors}</p>
                                    <p>Area: ${data.area} square meters</p>`;
    })
    .catch(error => console.error('Error:', error));
});
