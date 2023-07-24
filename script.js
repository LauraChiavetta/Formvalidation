function errorName(){
    let nome=document.form.nome; //salvo riferimento input
    let check = new RegExp('^[a-z]{3,15}$','i');//valori accettati
    let errorname = document.getElementById("errnom");//salva il riferimento allo span
    if(!check.test(nome.value)){
        nome.style.backgroundColor="red"
        errorname.innerHTML = "inserisci un nome valido"
        errorname.style.color="red"
        return false;

    }else{
        errorname.innerHTML = ""
        nome.style.backgroundColor="green";
        return true;
    }
}
function erroreCf(){
    let cf=document.form.cf;
    let check= new RegExp('^[a-z]{6}[0-9]{2}[a-z][0-9]{2}[a-z][0-9]{3}[a-z]$','i');
    let errorCf= document.getElementById("errcf")
    if(!check.test(cf.value)){  
        cf.style.backgroundColor="red"
        errorCf.innerHTML = "inserisci un cf valido"
        errorCf.style.color="red"
        return false;

    }else{
        errorCf.innerHTML = ""
        cf.style.backgroundColor="green";
        return true;
    }
}
function erroreCom(){
    let comune = document.form.comune
    let check = new RegExp ('^[a-z]{3,15}$','i')
    let errorCom = document.getElementById("errcom")
    console.log(comune.value);
    if(!check.test(comune.value)){
        comune.style.backgroundColor="red"
        errorCom.innerHTML = "inserisci un comune valido"
        errorCom.style.color="red"
        return false;
    }else{
        comune.style.backgroundColor="green";
        errorCom.innerHTML = ""
        return true;
    }
    
}
function errorGenere(){
    let genere = document.form.genere
    let genererr = document.getElementById("genereErr")
    if(genere.value!=='F' && genere.value!=='M'){
        genererr.innerHTML="Seleziona il sesso";
        genererr.style.color="red";
        return false;
    }else{
        genererr.innerHTML=""
        return true;
    }
}
function errorUsername(){
    let user = document.form.user
    let check = new RegExp ('^[a-z]{3,15}$')
    let usererr = document.getElementById("erruser")
    if(!check.test(user.value)){
        user.style.backgroundColor="red"
        usererr.innerHTML = "inserisci un username valido"
        usererr.style.color="red"
        return false;
    }else{
        user.style.backgroundColor="green";
        usererr.innerHTML = ""
        return true;
    }
}
function errorPassword(){
    let password = document.form.password
    let check = new RegExp ('^(?=.[@$!%?&])[a-z0-9@$!%*?&]{8,20}$', 'i');
    let errpass = document.getElementById("errpass")
    if(!check.test(password.value)){
        password.style.backgroundColor="red"
        errpass.innerHTML = "inserisci una password valida"
        errpass.style.color="red"
        return false;
    }else{
        password.style.backgroundColor="green";
        errpass.innerHTML = ""
        return true;
    }
}
function errorCognome(){
    let cognome = document.form.cognome
    let check = new RegExp('^[a-z]{3,15}$', 'i')
    let errcogn = document.getElementById("errcogn")
    if(!check.test(cognome.value)){
        cognome.style.backgroundColor="red"
        errcogn.innerHTML = "inserisci un cognome valido"
        errcogn.style.color="red"
        return false;
    }else{
        cognome.style.backgroundColor="green";
        errcogn.innerHTML = ""
        return true;
    }
}
function errorNazione(){
    let nazione= document.form.nazione
    let errnaz = document.getElementById("errnaz")
    if(nazione.value=="0"){
        errnaz.innerHTML="Inserisci una nazione valida"
        errnaz.style.color= "red"
        return false;
    }else{
        errnaz.innerHTML=""
        return true;
    }
}
function errorData(){
    let data = document.form.data
    let errdata = document.getElementById("errdata")
    let data_oggi = new Date();// imposta di default la data di oggi
    if (data.value ==""){
        errdata.innerHTML="Inserisci la data di nascita "
        errdata.style.color="red"
        return false;
    }
    let dataInserita = new Date (data.value) //una nuova data con quella inseriat
    let diff = data_oggi - dataInserita;
    let eta = diff / (1000 * 60 * 60 * 24 * 365.25); //calcola in anni millisecodni
    if (eta<18){
        errdata.innerHTML="Hai meno di 18 anni"
        errdata.style.color ="red"
        return false;
    }else{
        errdata.innerHTML=""
        return true;
    }
}
function errorEmail (){
    let email = document.form.email
    let check = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
    let erremail = document.getElementById("erremail")
    if(!check.test(email.value)){
        
            email.style.backgroundColor="red"
            erremail.innerHTML = "inserisci un'email valida"
            erremail.style.color="red"
            return false;
        }else{
            email.style.backgroundColor="green";
            erremail.innerHTML = ""
            return true;
        }
    }
function errorConfPass(){
    let pass1 = document.form.password
    let pass2 = document.form.confpass
    let errconf = document.getElementById("errconf")

    if (pass2.value==""||pass1.value!= pass2.value){
        pass2.style.backgroundColor= "red"
        errconf.innerHTML ="Le password non coincidono"
        errconf.style.color ="red"
        return false;
    }else{
        pass2.style.backgroundColor="green"
        errconf.innerHTML=""
        return true;
    }
}

let comuni;
    fetch('https://mocki.io/v1/88176bd1-039f-4f1e-ae6e-56e3e86b5c44')
        .then((Response) => Response.json())
        .then((json) => {
            comuni = json.comune;
            
            console.log(comuni); // Visualizza i dati JSON nella console
          })

function autocompletamento(){
 let datalist = document.getElementById("sugger")   
 let city = document.form.comune
 let suggerimento = comuni.filter((citta)=>
 citta.toLowerCase().startsWith(city.value.toLowerCase())
 );//filtra le citta inserite con quelle del json tramite la prima lett
 datalist.innerHTML = '';//pulire l alista
 suggerimento.forEach((citta) => {//per ogni suggerimento crea un opzione
    let option = document.createElement('option');
    option.value = citta; //assegna il valore della citta filtrata
    datalist.appendChild(option);// e lo rende figlio della lista
  });
}

function registrati(){
    console.log("Funzione registrati() chiamata.")
    let errorForm = document.getElementById("errform")
    let array = [
       errorName,
       errorCognome,
       errorData,
       errorConfPass,
       errorNazione,
       errorEmail,
       errorGenere,
       erroreCom,
       erroreCf,
       errorUsername,
       errorPassword
    ];
    let risultati = [];
    for (let i = 0; i < array.length; i++) {
        risultati[i]=array[i]();
        
    }
    if(risultati.includes(false)){
        errorForm.innerHTML="Registrazione non avvenuta";
        errorForm.style.color = "red";
        return false;
    }
    errorForm.innerHTML= "Registrazione avvenuta con successo";
    errorForm.style.color="green"
    
    return true;
   
}
function validazione() {
    let valida = registrati(); 
  
    if (valida) {
      
      document.form.submit();
    }
  }
