let allSect = document.querySelectorAll('#all-sect')
allSect.forEach(allSects=>{
    let replyBtn = allSects.querySelectorAll('#reply-btn')
    let ul = allSects.querySelector('ul img')
    replyBtn.forEach(replyBtns=>{
            replyBtns.addEventListener('click',()=>{
    let reply = allSects.querySelector('#reply')
            reply.classList.toggle('show')
            reply.querySelector('img').src = ul.src
            if (replyBtns.textContent == 'Edit') {
                // alert('edit')
                reply.querySelector('textarea').addEventListener('keyup',()=>{
                    allSects.querySelector('#alls').style.width = '90%'
                    allSects.querySelector('#alls').style.margin = 'auto'
                    reply.style.width = '90%'
                    // reply.style.marginLeft = '20%'
                    allSects.querySelector('#text').textContent = reply.querySelector('textarea').value
                    reply.querySelector('button').addEventListener('click',()=>{
                        if (reply.querySelector('textarea').value == '') {
                            reply.style.display = 'flex'
                            reply.querySelector('textarea').style.borderColor = "red"
                        }else{
                            reply.style.display = 'none'
                        }
                    })
                })
            }
    })
    })

})
let counter = document.querySelectorAll('#counter')
counter.forEach(counters=>{
    let add = counters.querySelector('#add')
    let minus = counters.querySelector('#minus')
    let p = counters.querySelector('p')
    let num = 0
    add.addEventListener('click',()=>{
        num++
        p.textContent = num
    })
    minus.addEventListener('click',()=>{
        num--
        p.textContent = num
        if (num <= 0) {
            num = 0
            p.textContent = num
        }
    })
})
let deletes = document.querySelectorAll('#delete')
deletes.forEach(deletess=>{
    deletess.addEventListener('click',()=>{
        document.getElementById('confirmation').style.display = 'grid'
    })
})
function confirms(){

}
function cancel(){
    document.getElementById('confirmation').style.display = 'none'
}