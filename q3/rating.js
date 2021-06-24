const product = function(productID, ratedValue){
    this.productID = productID;
    this.ratedValue = ratedValue;
}


$(document).ready(function(){

    //get all product from local storage
    var products =JSON.parse( localStorage.getItem('products'));
    if (!products){
        products=[];
    }else{
        for(let i=0; i<products.length;i++){
            productID = products[i].productID;
            ratedValue = products[i].ratedValue;
            changeStartype(ratedValue,productID);
        };
    }
 


    $('.star').on('click',function(){
        curValue = parseInt($(this).data('index'));
        curID  =$(this).parent().parent().attr('id');
        console.log(curID)
        resetStarType(curID);
        proIndex = products.findIndex((obj => obj.productID == curID));
        if(proIndex ==  -1){
            curPro = new product(curID,curValue);
            products.push(curPro);
            localStorage.setItem('products',JSON.stringify(products));
        }
        else{
            products[proIndex].ratedValue = curValue;
            localStorage.setItem('products',JSON.stringify(products));
        }
        changeStartype(curValue,curID);
    })

    $('.star').mouseover(function(){
        var curValue = parseInt($(this).data('index'));
        curID  = $(this).parent().parent().attr('id');
        resetStarType(curID);
        for(let i= 0; i< curValue; i++){
            $('#'+curID+'>.rating > .star:eq('+i+')').addClass("fa-star").removeClass("fa-star-o").css('color','gray');
        }
    })

    $('.star').mouseleave(function(){
        curID  =$(this).parent().parent().attr('id');
        resetStarType(curID);
        for(let i=0; i<products.length;i++){
            productID = products[i].productID;
            ratedValue = products[i].ratedValue;
            changeStartype(ratedValue,productID);
        };
    })


    function changeStartype(ratedValue, productID){
        for(let i= 0; i< ratedValue; i++){
            $('#'+productID+'>.rating > .star:eq('+i+')').addClass("fa-star").removeClass("fa-star-o");
        }
        $('#'+productID+' > .value').html(ratedValue);
    }

    function resetStarType(productID){
            $('#'+productID+'>.rating > .star').removeClass("fa-star").addClass("fa-star-o").css('color','black');
    }


});