//function to validate user credentials
function validCrendentials(email,password){
    const validEmail = "akolsharon@gmail.com"
    const validPassword ="22/U/5723@2024"

//control statement to check the validity of user credentials
    if(email=== validEmail && password === validPassword){
        console.log(`User email is ${email}, Login successfully!`)
    }else{
        console.log('Incorrect user credentials!')
    }
}

//valid user credententails
validCrendentials("akolsharon@gmail.com","22/U/5723@2024")