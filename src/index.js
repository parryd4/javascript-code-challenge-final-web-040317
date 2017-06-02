// defaults
let imageUrl = `https://media1.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif`
let imageCaption = `I don't have to think of something to write if the program does it for me!`

function readAndValidateForm(){
  var $inputs = $('#photo-form :input')

  imageUrl = $inputs[0].value === "" ? imageUrl : $inputs[0].value
  imageCaption = $inputs[1].value === "" ? imageCaption : $inputs[1].value
}

function render(){
  $('#photo-list').append(`
    <img src="${imageUrl}" />
    <p>${imageCaption}</p>
    `)
}

$(document).ready(function(){
  // your code here!
  $('#photo-form').submit(function(e){
    e.preventDefault()
    
    // doEverythingWithClass()

    readAndValidateForm()
    render()
    this.reset()

  })
})

// didn't see Classes until late into challenge.
// not persisting, Classes not necessary for this simple app...

function doEverythingWithClass(){
  var $inputs = $('#photo-form :input')

  var classImageUrl = $inputs[0].value === "" ? `https://media4.giphy.com/media/f6pOe5e8ShRhS/giphy.gif` : $inputs[0].value
  var classImageCaption = $inputs[1].value === "" ? `How the challenge feels about me having to use Classes` : $inputs[1].value

  var classyGram = new InstantGram({url: classImageUrl, caption: classImageCaption})

  $('#photo-list').append(`
    <img src="${classyGram.url}" />
    <p>${classyGram.caption}</p>
    `)
}
