
$(".submit-country").click(function(){
    $(".capitals").html(" ");
    const country = $(".input-country").val();
    console.log("user's input country is: " + country)
    getCapitals(country);
})

function getCapitals(country){
    $.ajax({
        url:"https://restcountries.eu/rest/v2/name/" + country,
        method: "GET",
        success: function(data,status,xhr){
            if(status === "success"){
                var cur_capital = data[0].capital;
                cur_capital = $("<p>"+ cur_capital+"</p>")
                $(".capitals").append(cur_capital);

                var borders = data[0].borders;
                borders = borders.join(';');
                console.log("all boder country: "+borders)
                $.ajax({
                    url:"https://restcountries.eu/rest/v2/alpha?codes=" + borders,
                    method:"GET",
                    success: function(data,status, xhr){
                        if(status === "success"){
                            for(var i in data) {
                                var bor_capital = data[i].capital
                                bor_capital=$("<p>"+ bor_capital+"</p>")
                                $(".capitals").append(bor_capital);
                            };
                        }
                    }
                })
            }
        },
        error: function(err){
            alert("enter valid country");
            console.log(err);
        }
    })
}
