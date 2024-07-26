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

function st(test: string, high: number, weigh: number) {
    if (test === 'male' && high > 170 || (weigh > 50 && weigh < 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
}
st('male', 170, 100)