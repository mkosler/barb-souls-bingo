function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
}

function generateCard() {
    let cp = [...squares]
    shuffle(cp)
    let card = cp.slice(0, 24)

    for (let i = 0; i < card.length; i++) {
        let el = document.getElementById((i + 1).toString())
        el.innerText = card[i]
        el.addEventListener("click", function () {
            this.classList.toggle("marked")
        })
    }
}

generateCard()