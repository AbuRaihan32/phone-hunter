const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phonesObj = await res.json();
    const phones = phonesObj.data;
    displayPhones(phones)
    console.log(phones)
}
loadPhone();

const displayPhones = (phones) =>{
    const phonesContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList = `card w-96 bg-base-100 shadow-xl`
        div.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
          <h2 class="text-3xl font-bold">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p class="text-xl font-bold">$999</p>
          <div class="card-actions flex justify-center">
            <button class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `
        phonesContainer.appendChild(div)
    })
}