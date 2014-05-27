///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////     GPS DEDICATED TO CONDITION MINERALE    ///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 

 
 
    function timeDiff(today, creationTime){ //compare time creationFromCurrentTime
        var diff = (today - Date.parse(creationTime)); // Difference in miliseconds
        var resulJ, resulH, resultat;
        resulJ = diff/86400000;
        resulH = diff/3600000;
        if(resulH<24){
        	if(resulH<1.5){
        		resultat = Math.round(resulH)+" heure";
        		return resultat;
        	}
        	else{
        		resultat = Math.round(resulH)+" heures";
        		return resultat;
        	}
        	
        }
        else{
        	if(resulJ<1.5){
        		resultat = Math.round(resulJ)+" jour";
        		return resultat;
        	}
        	else{
        		resultat = Math.round(resulJ)+" jours";
        		return resultat;
        	}
        }   
    }
    
  