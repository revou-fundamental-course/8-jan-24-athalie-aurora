document.getElementById('btnPersegi').addEventListener('click', function () {
    document.getElementById('formulaExplanation').innerText = ' Luas: Sisi * Sisi\nKeliling: 4 * Sisi';
});

// document.getElementById('btnPersegiPanjang').addEventListener('click', function () {
//     document.getElementById('formulaExplanation').innerText = 'Rumus Persegi Panjang: \nLuas: Panjang * Lebar\nKeliling: 2 * (Panjang + Lebar)';
// });

document.getElementById('btnHitung').addEventListener('click', function () {
    var sisi = parseFloat(document.getElementById('inputSisi').value);
    var selectedCalculation = document.getElementById('selectCalculation').value;
    var result;

    if (selectedCalculation === 'luas') {
        result = (selectedCalculation === 'luas') ? sisi * sisi : 2 * (sisi + sisi);
    } else if (selectedCalculation === 'keliling') {
        result = (selectedCalculation === 'keliling') ? 4 * sisi : 2 * (sisi + sisi);
    }

    document.getElementById('resultText').innerText = 'Hasil ' + selectedCalculation + ': ' + result;

    // Visualisasi
    visualizeResult(selectedCalculation, result, sisi);
});


document.getElementById('btnReset').addEventListener('click', function () {
    resetForm();
});

function resetForm() {
    document.getElementById('inputSisi').value = ''; // Atur ulang input
    document.getElementById('resultText').innerText = ''; // Bersihkan hasil
    document.getElementById('visualization').innerHTML = ''; // Bersihkan visualisasi
    document.getElementById('formulaExplanation').innerText = ''; // Bersihkan penjelasan rumus
}



function visualizeResult(calculation, result, sisi) {
    var visualizationContainer = document.getElementById('visualization');
    visualizationContainer.innerHTML = ''; // Bersihkan visualisasi sebelumnya

    var visualizationElement = document.createElement('div');
    visualizationElement.className = 'visualization-box';
    visualizationElement.style.width = sisi + 'px';
    visualizationElement.style.height = sisi + 'px';

    visualizationContainer.appendChild(visualizationElement);

    var explanationText = document.createElement('p');
    // explanationText.innerText = 'Contoh Visualisasi: ' + calculation + ' ' + result;
    visualizationContainer.appendChild(explanationText);
}
