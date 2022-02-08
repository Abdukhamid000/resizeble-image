const myDiv = document.querySelector(".myDiv");
const res = document.querySelector(".res");
const res2 = document.querySelector(".res2");

myDiv.addEventListener("mousedown", mousedown);

let isResizing = true;
function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevX = e.clientX;
  let prevY = e.clientY;

  res.innerHTML = "X:" + prevX + " " + ("Y:" + prevY);
  function mousemove(e) {
    if (!isResizing) {
      let newX = prevX - e.clientX;
      let newY = prevY - e.clientY;

      res2.innerHTML = "X:" + newX + " " + ("Y:" + newY);

      const rect = myDiv.getBoundingClientRect();

      myDiv.style.left = rect.left - newX + "px";
      myDiv.style.top = rect.top - newY + "px";

      prevX = e.clientX;
      prevY = e.clientY;
    }
  }

  function mouseup(e) {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

const resizers = document.querySelectorAll(".resizers");
let target;
for (const resize of resizers) {
  resize.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    target = e.target;
    let prevX = e.clientX;
    let prevY = e.clientY;

    console.log(target);

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = myDiv.getBoundingClientRect();

      if (target.classList.contains("b")) {
        console.log("sdf");
        myDiv.style.width = rect.width - (prevX - e.clientX) + "px";
        myDiv.style.height = rect.height - (prevY - e.clientY) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup(e) {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}
