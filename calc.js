const tvPackageObjects = document.getElementsByName('tv-pack')
const tvPackageArray = Array.prototype.slice.call(tvPackageObjects)


tvPackageArray[0].value = "Komfort+"
tvPackageArray[1].value = "Prestiż"
tvPackageArray[2].value = "Max"

const tvRecieverObjects = document.getElementsByName('tv-reciever')
const tvRecieverArray = Array.prototype.slice.call(tvRecieverObjects)

tvRecieverArray[0].value = 'HD'
tvRecieverArray[1].value = '4K'

const netPackageObjects = document.getElementsByName('net-pack')
const netPackageArray = Array.prototype.slice.call(netPackageObjects)

netPackageArray[0].value = 50
netPackageArray[1].value = 100
netPackageArray[2].value = 200
netPackageArray[3].value = 500

const buildingObjects = document.getElementsByName('building')
const buildingArray = Array.prototype.slice.call(buildingObjects)

buildingArray[0].value = 'Jednorodzinny'
buildingArray[1].value = 'Wielorodzinny'


const dekoderObjects = document.getElementsByName('dekoder')
const dekoderArray = Array.prototype.slice.call(dekoderObjects) 

dekoderArray[0].value = "Jeden"
dekoderArray[1].value = "Dwa"



const multiNet = [
  {
    package: 50,
    purePrice: 29,
    withKomfortPrice: 50,
    withPrestizPrice:60,
    withMaxPrice:70
  },
  {
    package: 100,
    purePrice: 35,
    withKomfortPrice: 60,
    withPrestizPrice:70,
    withMaxPrice:80
  },
  {
    package: 200,
    purePrice: 45,
    withKomfortPrice: 70,
    withPrestizPrice:80,
    withMaxPrice:90
  },
  {
    package: 500,
    purePrice: 55,
    withKomfortPrice: 80,
    withPrestizPrice:90,
    withMaxPrice:100
  }

] 

const singleNet = [

  {
    package: 50,
    purePrice: 49,
    withKomfortPrice: 79,
    withPrestizPrice:89,
    withMaxPrice:99
  },
  {
    package: 100,
    purePrice: 59,
    withKomfortPrice: 79,
    withPrestizPrice:89,
    withMaxPrice:99
  },
  {
    package: 200,
    purePrice: 69,
    withKomfortPrice: 89,
    withPrestizPrice:99,
    withMaxPrice:109
  },
  {
    package: 500,
    purePrice: 99,
    withKomfortPrice: 119,
    withPrestizPrice:129,
    withMaxPrice:139
  }
]

let summaryTvPackage = document.getElementById("tv-pack")
let summaryTvReciever = document.getElementById("tv-reciever")
let summaryDekoder = document.getElementById("dekoder")
let summaryNetPackage = document.getElementById("net-pack")
let summaryBuilding = document.getElementById("building")
let summaryFinal = document.getElementById("summary")



const summary = () => {
 let finalPrice = 0;
 let whichBuilding = buildingArray.find(single =>{
    return single.checked === true;
  })
 let whichTvPackage = tvPackageArray.find(single =>{
    return single.checked === true;
  })
 let whichNetPackage = netPackageArray.find(single =>{
   return single.checked === true;
  })


  if(whichBuilding.value === 'Wielorodzinny'){
        
      switch(whichTvPackage.value){
        case "Bez Pakietu":

            if(whichNetPackage.value === "50"){
              finalPrice = multiNet[0].purePrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = multiNet[1].purePrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = multiNet[2].purePrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = multiNet[3].purePrice
              
            }
        break;
        case "Komfort+":

            if(whichNetPackage.value === "50"){
              finalPrice = multiNet[0].withKomfortPrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = multiNet[1].withKomfortPrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = multiNet[2].withKomfortPrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = multiNet[3].withKomfortPrice
              
            }
        break;
        case "Prestiż":
          
           if(whichNetPackage.value === "50"){
              finalPrice = multiNet[0].withPrestizPrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = multiNet[1].withPrestizPrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = multiNet[2].withPrestizPrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = multiNet[3].withPrestizPrice
              
            }


        break;
        case "Max":
          
            if(whichNetPackage.value === "50"){
              finalPrice = multiNet[0].withMaxPrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = multiNet[1].withMaxPrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = multiNet[2].withMaxPrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = multiNet[3].withMaxPrice
              
            }



        break;

   }




  }
  else if(whichBuilding.value === 'Jednorodzinny'){
    
    switch(whichTvPackage.value){
        case "Bez Pakietu":

            if(whichNetPackage.value === "50"){
              finalPrice = singleNet[0].purePrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = singleNet[1].purePrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = singleNet[2].purePrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = singleNet[3].purePrice
              
            }
        break;
        case "Komfort+":

            if(whichNetPackage.value === "50"){
              finalPrice = singleNet[0].withKomfortPrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = singleNet[1].withKomfortPrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = singleNet[2].withKomfortPrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = singleNet[3].withKomfortPrice
              
            }
        break;
        case "Prestiż":
          
           if(whichNetPackage.value === "50"){
              finalPrice = singleNet[0].withPrestizPrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = singleNet[1].withPrestizPrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = singleNet[2].withPrestizPrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = singleNet[3].withPrestizPrice
              
            }


        break;
        case "Max":
          
            if(whichNetPackage.value === "50"){
              finalPrice = singleNet[0].withMaxPrice
              
            }
            else if(whichNetPackage.value === "100"){
              finalPrice = singleNet[1].withMaxPrice
              
            }
            else if(whichNetPackage.value === "200"){
              finalPrice = singleNet[2].withMaxPrice
              
            }
            else if(whichNetPackage.value === "500"){
              finalPrice = singleNet[3].withMaxPrice
              
            }



        break;

   }


  }

 let whichReciever = tvRecieverArray.find(single => {
   return single.checked === true;
  })

  if(whichReciever.value === "4K"){
    finalPrice += 5
  }

  let whichDekoder = dekoderArray.find(single => {
    return single.checked === true;
  })
  if(whichDekoder.value === "Dwa"){
    finalPrice += 15
  }

  summaryFinal.innerHTML = finalPrice + " zł"
}

summary()

const settingOptions = (e) =>{
  if(e.name === 'tv-pack')
    {
      summaryTvPackage.innerHTML = e.value
    }
  else if(e.name === 'tv-reciever')
  {
    summaryTvReciever.innerHTML = e.value
  }
  else if(e.name === 'net-pack')
  {
    summaryNetPackage.innerHTML = e.value + " MBit" 
  }
  else if(e.name === 'building'){
     summaryBuilding.innerHTML = e.value
  }
  else if(e.name === 'dekoder'){
    summaryDekoder.innerHTML = e.value
  }
  summary();
}


