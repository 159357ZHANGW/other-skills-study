enum Gender{
  Male,
  Female
}


let i:{
    name: string,
    gender: Gender
  }

i = {
  name: '孙悟空',
  gender:Gender.Male
  }


enum tianqi{
  Sunny,
  Rainy,
  Windy,
  Snowy
}

let getweather = function (status: any) {
  switch (status) {
    case tianqi.Sunny:
       console.log('阳光');
      break;
    case tianqi.Snowy:
      console.log("下雪");
      break;
    case tianqi.Windy:
      console.log("大风天气");
      break;
    case tianqi.Rainy:
      console.log("下雨天气");
      break;
    default:
      break;
  }
}
getweather(tianqi.Snowy)
// getweather(tianqi)
console.log(tianqi[1]);

console.log(tianqi.Sunny);  //0
console.log(tianqi.Rainy);  //1









