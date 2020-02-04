<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        function isEven(num){
    if(num<0){
        console.log(0);
    }
else if (num%2==0){
    console.log("true");
}
else if(num%2!==0){
    console.log("false");

}


}
var a = prompt();
isEven(a);
        </script>
</body>
</html>
