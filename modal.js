var time
var timeInterval
var countdown
var timetext

const addDefaultEvents = (options) => {
  Array.from(document.getElementsByClassName("modal-button")).map((b) => {
    var new_element = b.cloneNode(true);
    b.parentNode.replaceChild(new_element, b);

    new_element.addEventListener("click", () => {
      let target = new_element.getAttribute("data-target");
      if (target) {
        let modal = document.getElementById(target);
        if (modal) {
          modal.style.display = "flex";
          let ct = modal.querySelector(".modal-countdown")
          if(ct) {
              countdown = ct
              countdown.setAttribute("data-status","0")
              timetext = countdown.innerHTML
              time = parseInt(countdown.getAttribute("data-time"))
              countdown.innerHTML = timetext + " (" + time + " sn)"
              countdown.classList.remove("modal-done")
              timeInterval = setInterval(()=>{
                  time = time - 1
                  countdown.innerHTML = timetext + " (" + time + " sn)"
                  if(time == 0) {
                      clearInterval(timeInterval)
                      countdown.setAttribute("data-status","1")
                      countdown.innerHTML = timetext
                      countdown.classList.add("modal-done")
                      if(options) {
                        if(options.target == target) {
                          var cd = countdown.cloneNode(true);
                          countdown.parentNode.replaceChild(cd, countdown);
                          cd.addEventListener("click",()=>{
                            options.callback()
                          })
                        }
                      }
                  }
              },1000)
          }
        }
      }
    });
  });
}
addDefaultEvents()

Array.from(document.getElementsByClassName("modal")).map((modal) => {
  let cancel = modal.querySelector(".modal-cancel");
  if (cancel) {
    cancel.addEventListener("click", () => {
      modal.style.display = "none";
      if(timeInterval) {
        clearInterval(timeInterval)
        countdown.innerHTML = timetext
        countdown.classList.remove("modal-done")
    }
    });
    
  } 
  let content = modal.querySelector(".content")
  let type = modal.getAttribute("type")
  if(type && content) {
    content.classList.add(type)
    modal.classList.add(type)
  }
});
