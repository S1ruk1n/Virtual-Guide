;(() => {
    const id = document.getElementById.bind(document);
    const arrow1 = id("arrow__1");
    const arrow2 = id("arrow__2");
    const outer = id("outer");
    const index = id("index");
    const imagesNo = 4;
    
    arrow1.onclick = () => {
      const value = Number(outer.dataset.index);
      if(value <= 1) return;
      outer.dataset.index = value - 1;
      index.innerText = (value - 1) + " of " + imagesNo;
    };
    arrow2.onclick = () => {
      const value = Number(outer.dataset.index);
      console.log(value);
      if(value >= imagesNo) return;
      outer.dataset.index = value + 1;
      index.innerText = (value + 1) + " of " + imagesNo;
    };
    
    arrow1.onmouseenter = () => outer.classList.add("mouse_l");
    arrow2.onmouseenter = () => outer.classList.add("mouse_r");
    arrow1.onmouseleave = () => outer.classList.remove("mouse_l");
    arrow2.onmouseleave = () => outer.classList.remove("mouse_r");
    })();