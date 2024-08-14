// const base_url="http://api.weatherapi.com/v1"
// const api_key="549e818ff2c84a7cab0105121241408"


const getWeather=async()=>{
    let result=''
    const city=winp.value
    const res=await fetch(`http://api.weatherapi.com/v1/current.json?key=549e818ff2c84a7cab0105121241408&q=${city}`)
    const jsres=await res.json()
    console.log(jsres)
    result=`
    <h3>${jsres.location.name},${jsres.location.region},${jsres.location.country}</h3>
    <img src=${jsres.current.condition.icon} alt='...'>
    <h5>${jsres.current.condition.text}</h5>
    `

    cnt.innerHTML=result
}