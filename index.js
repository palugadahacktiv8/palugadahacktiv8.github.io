let data = [{
    id: 1,
    name: "Lampu Meja",
    harga: 2000,
    rating: 8,
    review: "barangnya keren",
  },
  {
    id: 2,
    name: "Sofa",
    harga: 45000,
    rating: 8,
    review: "barangnya Second Oke",
  },
  {
    id: 3,
    name: "Meja",
    harga: 25000,
    rating: 8,
    review: "barangnya keren",
  },
  {
    id: 4,
    name: "Kursi",
    harga: 25000,
    rating: 8,
    review: "barangnya Second Oke",
  },
  {
    id: 5,
    name: "Cermin",
    harga: 30000,
    rating: 8,
    review: "barangnya keren",
  },
  {
    id: 6,
    name: "Lemari",
    harga: 60000,
    rating: 8,
    review: "barangnya Second Oke",
  },
];

function renderData(param1) {
  let domCalled = document.getElementById('data-array')
  let context = ''
  for (let i = 0; i < param1.length; i++) {
    for (let key in param1[i]) {
      context += `<p> ${param1[i][key]}</p>`
    }
  }
  domCalled.innerHTML = context
}
renderData(data)

function createData() {
  
  // let username = document.getElementById () ISI NAMA DARI FORM 
  // let harga =  document.getElementById () ISI HARGA DARI FORM
  // let review = document.getElementById () ISI REVIEW DARI FORM

  for (let i = 0; i < data.length; i++) {

  }

  let maxId = Number.MIN_VALUE;
  const isiData = database[i];
  // for (let j = 0; j < isiData.length; j++) {
  //   const isiDataDalam = isiData[j];
  //   if (maxId < isiDataDalam.id) {
  //     maxId = isiDataDalam.id;
  //   }
  // }

  let tempobj = {
    
  };
  output[userName].push(tempobj);
}

function getData(param1) {
  let getId
  let result = []
  for (let i = 0; i < param1.length; i++) {
    if (getId === param1[i].id) {
      result.push(param1[i])
    }
  }
  return result
}

function editData(param1) {
  for (let i = 0; i < param1.length; i++) {

  }
  let text = ''
  let ulasan = prompt('Tulis review yang ingin anda edit:', 'Edit review')
  if (ulasan) {
    text = `Review: ${ulasan}`
    let edit = document.getElementById()
    edit.innerHTML = text
  } else {}
  return text
}

function warning(id) {
  if (confirm('Apakah anda yakin ingin menghapus data ini?')) {
    return deleteData(id)
  } else {
    return alert('Data tidak jadi dihapus')
  }
}

function deleteData(id) {
  let filtered = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].id !== id) {
      filtered.push(data[i])
    }
  }
  renderData(filtered)
  data = filtered
}