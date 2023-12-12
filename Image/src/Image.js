async function loadImage(container) {
  const url = "https://picsum.photos/1000/1000";

  const options = {
    method: "GET",
  };

  let response = await fetch(url, options);

  if (response.status === 200) {
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);

    const image = document.createElement("img");
    image.src = imageObjectURL;
    // //make image fill container
    image.style.width = "100%";
    image.style.height = "100%";

    //clear container
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.append(image);
  } else {
    console.log("HTTP-Error: " + response.status);
  }
}

export default loadImage;
