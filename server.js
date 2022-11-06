document.querySelector("button").addEventListener("mousedown", getFetch);


function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://api.nasa.gov/planetary/apod&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("iframe").style.display = "none";
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
        document.querySelector("img").style.display = "none";
      }
      document.querySelector("h3").innerText = data.explanation;
      document.querySelector("h2").innerText = data.title;

    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

