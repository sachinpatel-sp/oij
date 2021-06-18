const app = document.getElementById("list");

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://sgdccdnems03.cdnsrv.jio.com/jiotv.data.cdn.jio.com/apis/v1.3/getMobileChannelList/get/?langId=6&os=android&devicetype=phone&usergroup=tvYR7NSNn7rymo3F&version=6.0.8&langId=6",
  true
);
request.onload = function () {
  // Begin accessing JSON data here
  var overallData = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    for (var i = 3; i <= 863; i++) {
      var channel = overallData.result[i];
      const card = document.createElement("div");
      card.setAttribute("class", "col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2");

      const url =
        "http://192.168.29.84:3500/getm3u8/162/" +
        channel.logoUrl.substring(0, channel.logoUrl.indexOf(".")) +
        "/yes";

      const a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("class", "card");

      const img = document.createElement("img");
      img.src =
        "http://jiotv.catchup.cdn.jio.com/dare_images/images/" +
        channel.logoUrl;
      img.setAttribute("class", "lazyload");
      img.style.height = "120px";

      const div = document.createElement("div");
      div.setAttribute("class", "card-body");

      const p = document.createElement("p");
      p.setAttribute("class", "card-text");
      p.innerText = channel.logoUrl.substring(0, channel.logoUrl.indexOf("."));

      div.appendChild(p);
      a.appendChild(img);
      a.appendChild(div);
      card.appendChild(a);
      app.appendChild(card);
    }
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
