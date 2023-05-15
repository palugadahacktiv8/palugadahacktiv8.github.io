let data = [
  {
    id: 1,
    name: "Lampu Meja",
    harga: 2000,
    img: "https://www.ikea-club.org/images/productcatalog/gallery/10394638/1.jpg",
    rating: 8,
    review: "barangnya keren",
  },
  {
    id: 2,
    name: "Sofa",
    harga: 45000,
    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/1.-sectional-sofa.jpg",
    rating: 8,
    review: "barangnya Second Oke",
  },
  {
    id: 3,
    name: "Meja",
    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/1.-sectional-sofa.jpg",
    harga: 25000,
    rating: 8,
    review: "barangnya keren",
  },
  {
    id: 4,
    name: "Kursi",
    harga: 25000,
    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/1.-sectional-sofa.jpg",
    rating: 8,
    review: "barangnya Second Oke",
  },
  {
    id: 5,
    name: "Cermin",
    harga: 30000,
    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/1.-sectional-sofa.jpg",
    rating: 8,
    review: "barangnya keren",
  },
  {
    id: 6,
    name: "Lemari",
    harga: 60000,
    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/02/1.-sectional-sofa.jpg",
    rating: 8,
    review: "barangnya Second Oke",
  },
];

let targetSubmit = document.getElementById("submit-button-form");
console.log(targetSubmit);
targetSubmit.addEventListener("click", function (event) {
  createData(event);
});

function renderData(param1) {
  console.log(param1);
  let domCalled = document.getElementById("card-container");
  let newDiv = document.createElement("div");
  let context = "";

  for (let i = 0; i < param1.length; i++) {
    context += `
      <div class="col" id='card'>
        <div class="card shadow-sm">
          <img src="${param1[i].img}" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>

          <div class="card-body">
              
              <h3>${param1[i].name}</h3>
              <h4>${param1[i].harga}</h4>
            <p class="card-text">${param1[i].review}</p> 
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="editData(${param1[i].id})">Edit</button>
                <button type="button" class="btn btn-sm btn-outline-secondary" onclick="warning(${param1[i].id})">Delete</button>
              </div>
              <small class="text-muted">Rating: ${param1[i].rating}/10</small> 
            </div>
          </div>
        </div>`;
  }
  newDiv.innerHTML = context;
  domCalled.append(newDiv);
  // domCalled.innerHTML = context;
}
renderData(data);

function createData(event) {
  event.preventDefault();
  console.log("Haiiiiiiiiiiiiiiiiiiiiiii");
  let form = document.getElementById("create-form");
  console.log(form.formPrice.value);
  let obj = {
    id: data[data.length - 1].id + 1,
    name: form.formName.value,
    harga: form.formPrice.value,
    rating: form.formRating.value,
    review: form.formReview.value,
  };
  data.push(obj);
  renderData(data);
}

let data1 = createData(data);
console.log(data1);

function getData(param1) {
  let getId;
  let result = [];
  for (let i = 0; i < param1.length; i++) {
    if (getId === param1[i].id) {
      result.push(param1[i]);
    }
  }
}

function editData(id) {
  // for (let i = 0; i < param1.length; i++) {}
  let text = "";
  let ulasan = prompt("Tulis review yang ingin anda edit:", "Edit review");
  if (ulasan) {
    text = `Review: ${ulasan}`;
    let edit = document.getElementById();
    edit.innerHTML = text;
  } else {
  }
  return text;
}

function warning(id) {
  if (confirm("Apakah anda yakin ingin menghapus data ini?")) {
    return deleteData(id);
  } else {
    return alert("Data tidak jadi dihapus");
  }
}

function deleteData(id) {
  let filtered = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].id !== id) {
      filtered.push(data[i]);
    }
  }
  renderData(filtered);
  data = filtered;
}
