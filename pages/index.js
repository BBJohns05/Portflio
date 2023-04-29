setInterval(() => {
    $("#lantern").removeClass('active')
    $('#lantern' + $changeBox).slideDown(200, function(){
        $(this.addClass('active'))
    })
        $("#lantern").removeClass('active')
    $('#lantern' + $changeBox).slideUp(200, function(){
        $(this.addClass('active'))
    })
},200)