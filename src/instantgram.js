// class InstantGram {
//   constructor(url,caption){
//     this.url = url
//     this.caption = caption
//   }
// }
function InstantGram(obj){
  if (!(this instanceof InstantGram)) {
     return new InstantGram(obj);
  }
       this.url = obj.url
       this.caption = obj.caption 
 }
