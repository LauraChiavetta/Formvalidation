function sendForm(){

    var errForm = document.getElementById("errForm")
    var functionsToCheck = [
        checkName,
        checkSurname,
        checkNullSex,
        checkNullNatio,
        checkEmail,
        checkPassword,
        checkDate,
        checkCity,
        checkCF,
        checkUsername,
        checkSamePwd
    ]; //le funzioni le metto all'interno dell'errore

    

   
    if (functionsToCheck.includes(false)) {
        errForm.innerHTML = "Qualcosa è andato storto";
        errForm.style.color = "red";
        return false;
    }

    // Se tutte le verifiche hanno successo, continua l'esecuzione
    // del codice successivo qui

    errForm.innerHTML = "";
    return true;
}
    

    