/* 
us1.locationiq.com/v1/reverse.php?key=pk.a640e0113a33941722dfa49eed766c02&lat=-37.9060602&lon=145.1941778&format=json
*/

$('#latitude').on('input', function () {
    console.log("Lat: " + $(this).val());
});

$('#longitude').on('input', function () {
    console.log("Long: " + $(this).val());
});
