var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyH4bVKrx4D33jcWIQwHqv9wc5KBe17j0bduP1kCp10nU5qWuP2mwyntVZqION_4znUXg/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = "Form has been submitted successfully"
        setTimeout(function(){
            message.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })