
function foo(data,q1){
    // console.log(data);
    fetch(data.quotes + '/' + q1)
    .then(function(data1){
        // console.log(data1);
        return data1.json();
    }).then(function(elem){
        var k=elem[0].quote;
        bad(k);
        // getquotes(elem);
    }).catch(function(error){
        console.log(error);
    })
    // console.log(typeof(c));
    
}

function bad(data){
    
    var cardtext=document.querySelector('.card-text');
    cardtext.innerHTML=data;

    // var cardImage=document.getElementById('img');
    // cardImage.setAttribute('src','breakingbad2.jpg');
    // cardImage.addAttribute('class','img');
}
function getquotes(){
    var quote=document.getElementById('quote').value;
    console.log(quote);
    fetch("https://www.breakingbadapi.com/api/")
    .then(function(resp){
    return  resp.json();
    }).then(function(result){
    // console.log(result);
    foo(result,quote);
    }).catch(function(err){
    console.log(err);
})
}





















// fetch("https://www.breakingbadapi.com/api/")
//     .then(function (result) {
//     return result.json();
//     })
//     .then( function (resp) {
//         foo(result);
//     }).catch((err) => {
//         console.log(err);    
//     });
//     function foo(data){
//         let container=document.createElement('container');

//         let row=document.createElement('row');

//         let col=document.createElement('div');
//         col.setAttribute('class','col-4');

//         let ch=data.characters;
//         let ep=data.episodes;
//         let qts=data.quotes;
//         let dth=data.deaths;

//         console.log(ch,typeof(ch));
//     }

