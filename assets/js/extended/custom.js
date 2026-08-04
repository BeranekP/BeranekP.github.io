document.addEventListener("DOMContentLoaded", () => {
  console.log("custom js")
  setTimeout(() => {
    document.querySelectorAll(".doneText0 ").
      forEach(el => {
        console.log(el)
        el.style.setProperty("fill", "#000000", "important")
      })
  }, 1000)

});
