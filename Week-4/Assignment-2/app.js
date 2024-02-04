function ajax(src, callback) {
  fetch(src)
    .then((response) => response.json())
    .then((data) => callback(data));
}

function render(data) {
  let section = document.createElement("section");
  let main = document.querySelector("main");
  let info = "";

  // data.forEach((productObj) => {
  //   phone += `<h2>${productObj["name"]}</h2>
  //             <ul><li>\$${productObj["price"]}</li>
  //             <li>${productObj["description"]}</li></ul>`;
  // });
  // section.innerHTML = phone;
  // main.appendChild(section);

  data.forEach((productObj) => {
    info += "<ul>";

    for (phoneProperties in productObj) {
      info += `<li>${phoneProperties} : ${productObj[phoneProperties]}</li>`;
    }
    info += "</ul>";
  });
  section.innerHTML = info;
  main.appendChild(section);
}

ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
);
/*
[
  { name: 'Pixel 3', price: 27700, description: '最新的 Google 手機。' },
  { name: 'Chromecast', price: 1500, description: '在大螢幕上播放喜歡的影片。' },
  {
    name: 'Pixel Book',
    price: 12000,
    description: '最新的 Chromebook 產品。'
  }
]
*/
