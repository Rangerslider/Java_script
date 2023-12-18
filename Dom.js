// ! html collection ke array te convert korar best way hocche just Array.from(name of htmlcollection)



        //!  Select Attribute ( ID, CLASS )

        // const x = document.querySelector('.aa')
        // console.log(x)
// // target selector first child 
//         console.log(x.firstElementChild)

// // Target selector last child 
//         console.log(x.lastElementChild)

// // set some content into selectors 
//         console.log(x.lastElementChild.innerHTML="This is dynamically added")

// // selector er majher content 3 ta diyei dekha jai 
//         console.log(document.getElementById("aa").innerText)
//         console.log(document.getElementById("aa").innerHTML)
//         console.log(document.getElementById("aa").textContent)

// // To get the class name of any seletor 
//         console.log(document.getElementById('aa').getAttribute('class'))
//         console.log(document.getElementById('aa'))

// // To get the parent of any child element
// console.log(x.parentElement)

// // To get the sibling of any element 
// console.log(x.nextElementSibling)


        //!  Select HTML Tag

// // manually 
//         const b = document.querySelectorAll('.b')
// // select all p tag 
//         console.log(document.querySelectorAll('.b p'))
// // selecting 1st p tag 
//         console.log(b[0].children[1].innerHTML)
// // selecting 1st h1 tag 
//         console.log(b[0].children[0].innerHTML)
// // selecting last h1 tag 
//         console.log(b[0].children[5].innerHTML='modifing last h1')

// //  using selector 

// // select all p tag 
//         console.log(document.querySelectorAll('.b p'))
// // selecting 1st p tag 
//         console.log(document.querySelector('.b p').innerHTML)
// // selecting 1st h1 tag 
//         console.log(document.querySelector('.b h1').innerHTML)
// // selecting last h1 tag 
//         console.log(document.querySelectorAll('.b h1')[1].innerHTML)


        //!  Add Dynamic Attribute

// // adding class Attribute  ( this will hide the h2 )
//             console.log(document.querySelector('.c h2').setAttribute('class','hidden'))
// // adding id attribute 
            // console.log(document.querySelector('.c p').setAttribute('id','green'))

        //!  Add Dynamic Tag
// // adding new div tag

//         // jaiga ready korlam  
//         const newDiv = document.createElement('div')
//         // class name dilam 
//         newDiv.className = 'new-div'
//         // style korlam 
//         newDiv.style.color = 'blue'
//         // oitar majher content push korlam 
//         newDiv.appendChild(document.createTextNode('this content is created using js'))
//         // ei div ke jaiga moto bosai dilam 
//         document.querySelector('.d').appendChild(newDiv)


        //!  Add Dynamic Style

// // normally 
//         document.querySelector('.e h1').style.color='blue'
// //       using function 
//         function cngColor(){
//                 document.querySelector('.e h2').style.backgroundColor='red'
//                 document.querySelector('.e h2').style.color='white'
//         }

        //!  Add Dynamic Content
        
        // const x= document.querySelector('.f h4')
        // x.outerHTML = ` <p>This is 2nd p tag.</p> <p>This is 4th p tag</p>`

        //!  Remove Attribute

// // removing class 
//         document.querySelector('.g h2').removeAttribute('class','hidden')
// // removing id
//         document.querySelector('.g p').removeAttribute('id','green')



        //!  Replace Attribute

        // function ReplaceAttribute (){
        //         document.querySelector('.h h2').setAttribute('class','blue')
        // }


        //  Add Event
        function changeText(id){
            id.innerHTML = 'done'
    }

    document.querySelector('.cng').onclick=function(){
            document.querySelector('.cng').setAttribute('class','hidden')
    }

    //  Remove Event