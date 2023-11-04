<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calculatrice</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <style>
        body {
    background-image: url('/images/bgi.avif');
    background-size: cover;
    }
    </style>
</head>
<body style="background-color: rgb(10, 32, 84)">
    <div class="container text-center mt-5 " style="background-color: rgba(4, 1, 38, 0.5); border-radius: 10px; padding: 20px;" >
        <form action="{{ route('hom') }}" method="POST">
            @csrf
            <h1 class="text-light">Calculatrice</h1><br>
            <input type="number" name="n1" placeholder="            Number 1"><br><br>
            <select name="opt">
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select><br><br>
            <input type="number" name="n2" placeholder="            Number 2"><br><br>
            <input type="submit" name="res" ><br><br>
        </form>
        <div>
            @if(isset($res))
                <div class="alert alert-dark ">
                    Resultat : {{ $res }}
                </div>
            @endif
        </div>
        
    </div>
</body>
</html>