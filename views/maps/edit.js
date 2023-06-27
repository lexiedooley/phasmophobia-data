<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

<div class="container d-flex flex-column flex-md-row justify-content-center mt-5 col-md-5" id="holder">
    <form class="col-md-8" action="/maps/<%= map.id %>?_method=PUT" method="POST">
      <div class="mb-2">
        <label for="rooms" class="form-label"></label>
        <input type="text" class="form-control" id="rooms" name="rooms" placeholder="Room Name">

      <button type="submit" class="btn btn-primary">Add Room</button>
    </form>
</div>

</body>
</html>