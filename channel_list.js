const api_url =
  "https://sgdccdnems03.cdnsrv.jio.com/jiotv.data.cdn.jio.com/apis/v1.3/getMobileChannelList/get/?langId=6&os=android&devicetype=phone&usergroup=tvYR7NSNn7rymo3F&version=6.0.8&langId=6";

async function view(id) {
     const m3u8 = "http://103.217.221.64/snehjiotv/play.php?c=" + id + "&q=800";
     console.log(m3u8);
  window.open(m3u8, "_parent");
}

async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  const ch_list = document.getElementById("ch_list");
  // Storing data in form of JSON
  let data = await response.json();

  for (let i = 0; i < 893; i++) {
    var div = document.createElement("div");
    var img = document.createElement("img");
    var img_val =
      "http://jiotv.catchup.cdn.jio.com/dare_images/images/" +
      data.result[i].logoUrl;
    img.setAttribute("src", img_val);
    div.id = data.result[i].logoUrl.substring(
      0,
      data.result[i].logoUrl.indexOf(".")
    );
    div.addEventListener("click", function () {
      view(this.id);
    });
    div.className = "channel";
    div.appendChild(img);
    ch_list.appendChild(div);
  }
}
// Calling that async function
getapi(api_url);
