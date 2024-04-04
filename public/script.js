const getCraftsJSON = async () => {
    const url =
      "./crafts.json";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    console.log(response);

  };

  const showCrafts = async () => {
    const crafts = await getCraftsJSON();
    const craftsRow = document.getElementById("row");

    const columnOne = document.createElement("div");
    columnOne.classList.add("column");
    columnOne.setAttribute("id", "column-one");

    const columnTwo = document.createElement("div");
    columnTwo.classList.add("column");
    columnTwo.setAttribute("id", "column-two");

    const columnThree = document.createElement("div");
    columnThree.classList.add("column");
    columnThree.setAttribute("id", "column-three");

    const columnFour = document.createElement("div");
    columnFour.classList.add("column");
    columnFour.setAttribute("id", "column-four");


    
    for (let i=0; i < crafts.length; i++) {
        
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.setAttribute("id", "myModal");
        
        if(i >= 0 && i <= 3) {
            columnOne.append(getCraftsImage(crafts[i]));
            modal.append(getCraftsModal(crafts[i]));
            columnOne.append(modal);
        } else if (i >= 4 && i <= 7) {
            columnTwo.append(getCraftsImage(crafts[i]));
            modal.append(getCraftsModal(crafts[i]));
            columnTwo.append(modal);

        } else if (i >= 8 && i <= 11) {
            columnThree.append(getCraftsImage(crafts[i]));
            modal.append(getCraftsModal(crafts[i]));
            columnThree.append(modal);

        } else if (i >= 12 && i <= 15) {
            columnFour.append(getCraftsImage(crafts[i]));
            modal.append(getCraftsModal(crafts[i]));
            columnFour.append(modal);
            
        }

        craftsRow.append(columnOne);
        craftsRow.append(columnTwo);
        craftsRow.append(columnThree);
        craftsRow.append(columnFour);

  };
  }

  const getCraftsImage = (craft) => {

    let image = document.createElement("img");
    image.src = craft.image;
    image.classList.add("craft-image");

    image.addEventListener("click", () => {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";

      const span = document.getElementsByClassName("close")[0];
      span.onclick = function() {
        modal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }

    });

    return image;
    
  }

  const getCraftsModal = (craft) => {

    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    
    let imageSide = document.createElement("div");
    imageSide.classList.add("image-side");

    let image = document.createElement("img");
    image.src = craft.image;
    imageSide.append(image);
    modalContent.append(imageSide);

    let textSide = document.createElement("div");
    textSide.classList.add("text-side");

    let h2 = document.createElement("h2");
    h2.textContent = craft.name;
    textSide.append(h2);

    let p = document.createElement("p");
    p.textContent = craft.description;
    textSide.append(p);

    let ul = document.createElement("ul");
    for (let i = 0; i < craft.supplies.length; i++) {
      let li = document.createElement("li");
      li.textContent = craft.supplies[i];
      ul.append(li);
    }
    textSide.append(ul);
    modalContent.append(textSide);

    let span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML = "&times;";
    modalContent.append(span);

    return modalContent;

  };

  showCrafts();