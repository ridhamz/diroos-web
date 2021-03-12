function send_c(){
			retour = false;
			if($("#objet").val() == ""){
				$("#msg_contact").html("Choisir le sujet de votre message !");
			}else if($("#nom-ent").val() == ""){
				$("#msg_contact").html("Taper le nom de votre entreprise");
			}else if($("#nom_f").val() == "" || isAlpha($("#nom_f").val())){
				$("#msg_contact").html("Taper votre nom, il doit être alphabétique");
			}else if($("#prenom_f").val() == "" || isAlpha($("#prenom_f").val())){
				$("#msg_contact").html("Taper votre prénome, il doit être alphabétique");
			}else if($("#pays").val() == ""){
				$("#msg_contact").html("Choisir votre pays !");
			}else if(!bonmail_c(document.getElementById("mail").value)){
				$("#msg_contact").html("Taper un e-mail valid");
			}else if($("#tel").val() == "" || isNaN($("#tel").val())){
				$("#msg_contact").html("Taper votre numéro de téléphone, il doit être numérique");
			}else if($("#Description").val() == ""){
				$("#msg_contact").html("Taper votre message");
			}else{
				retour = true;
			}
			return retour;
		}