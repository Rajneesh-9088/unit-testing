$(()=>{
//    console.log("rajneesh");
    let kmBox = $('#km')
    let minBox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')

    calcBtn.click(()=>{
        console.log("kumar");
        $.post('/calcfare',{
            km: kmBox.val(),
            min: minBox.val()
        },
         (data)=> {
            fareDiv.text( data.fare ) 
        })
    })

})