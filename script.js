document.querySelectorAll('.plant').forEach(plant => {
    plant.addEventListener('click', () => {
        const name = plant.dataset.name;
        const scientific = plant.dataset.scientific;
        const uses = plant.dataset.uses;
        const origin = plant.dataset.origin;
        
        document.getElementById('plant-details').innerHTML = `
            <strong>${name}</strong> (${scientific})<br>
            Uses: ${uses}<br>
            Origin: ${origin}
        `;
    });
});

function filterByType(type) {
    // Add filtering logic based on the type selected
    alert(`Filter by: ${type}`);
}
