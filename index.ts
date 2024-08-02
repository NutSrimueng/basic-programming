//function HelloWorld(){
// console.log('สวัสดี')}
//HelloWorld()

//function getPi(){
//  return 3.14
//}
//console.log(getPi())

//function secondHello(name:string){
//  console.log(name)
//}
//console.log(secondHello('Nut'))

//function st(fname:string,sname: string,tname:string){
//  if (!(fname === 'nan' || sname === 'pleum') && tname==='yo'){
//    console.log('เริ่มสอน')
//} else{
//  console.log('ยังไม่เริ่มสอน')
//}
//}
//st('nan','pleum','yo')

//function st(test: string, high: number, weigh: number) {
  //  if (test === 'male' && high > 170 || (weigh > 50 && weigh < 110)) {
    //    console.log('จับใบดำใบแดง')
    //} else {
      //  console.log('ไม่เข้าเกณฑ์')
    //}
//}
//st('male', 170, 100)
function st(heigh: number,weigh: number) {
    const bmi = weigh / (heigh* heigh)
    if (bmi < 18.50) {
        return "น้ำหนักน้อย/ผอม"
    }else if (bmi >= 18.50&&bmi <=22.90) {
        return "ปกติ(สุขภาพดี)"
    }else if (bmi >= 23&&bmi <=24.90) {
        return "ท้วม/โรคอ้วนระดับ 1"
    }else if (bmi >= 25&&bmi <=29.90) {
        return "อ้วน/โรคอ้วนระดับ 2"
    }else if (bmi >= 30) {
        return "อ้วนมาก/โรคอ้วนระดับ 3"
    }
}

console.log(st(170,60))