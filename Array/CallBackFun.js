function CallBack()
{
    console.log("Checking callback function")
}

function check(a, b, c, gettingfun){
    result = a+ b * c;
    gettingfun();
    console.log(result)
}

check(23,453,245,CallBack)