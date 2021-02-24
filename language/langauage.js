let language = 

translation = {
    "en-US": "Hello World!",
    "es-ES": "Hola mundo!"
    //...
}
console.log(translation[language])

if (language == "en-US") {
    console.log("Hello World!")
} else if (language == "es-ES") {
    console.log("Hola mundo!")
}

switch(language) {
    case "en-US":
        console.log("Hello World!")
        break
    case "es-ES":
        console.log("Hola mundo!")
        break
    default:
        console.log("???")        
}