document.getElementById("text")
    .addEventListener("change", function() {
        input = document.getElementById("text")
        text = input.value
        document.getElementById("lenght").innerText = text.lenght
    })