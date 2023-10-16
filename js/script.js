var emri = prompt("Ju lutem jepni emrin tuaj:"); //Eshtë një koncept i zakonshëm në programim që përdoret për të ruajtur dhe manipuluar të dhëna. 
console.log("Emri: " + emri); //Përdoret për të shfaqur informacion në konsolën e shfletuesit.
if (emri === null || emri === "") {                                                 //Eshtë një shprehje kushtuese në gjuhën e programeve
    alert("Ju nuk keni futur emrin."); //Alert eshte kur krijuesi i webit ka nje mesazh per peroduresit apo dhe mund te jet vetem alert
} else {
    
    alert("Miresevini, " + emri + "!");
}
var mosha = prompt("Ju lutem jepni moshën tuaj:");
console.log("mosha:" +mosha);

       
        if (mosha !== null) {  
            mosha = parseInt(mosha); 

            
            if (mosha < 12) {
                alert("Na vjen keq por kjo web-faqe nuk lejohet per personat nen moshen 12 vjeqare<3.");
               
            }
        }