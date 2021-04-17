<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Activity5</title>
        <link rel="stylesheet" type="text/css" href="./Activity5.css">
    </head>
    <body>
        <div>
          <h1>Registration Form</h1>
          <form action="Activity5-preview.php" method="POST">
              <p>
                <label for="name">Name:</label>  
                <input type="text" name="name" id="name"/>
              </p>
              <p>
                <label for="username">Username:</label>  
                <input type="text" name="username" id="username"/>
              </p>
              <p>
                <label for="password">Password:</label>  
                <input type="password" name="password" id="password"/>
              </p>
              <p>
                <label for="address">Address:</label>  
                <input type="text" name="address" id="address"/>
              </p>
              <p>
                <label for="countries">Country:</label>  
                <select name="countries">
                    <option value="USA">America</option>
                    <option value="TR">Turkey</option>
                    <option value="DE">Germany</option>
                    <option value="AU">Australia</option>
                </select>
              </p>
              <p>
                <label for="code">ZIP Code:</label>  
                <input type="text" name="code" id="code"/>
              </p>
              <p>
                <label for="email">Email:</label>  
                <input type="text" name="email" id="email"/>
              </p>
              <p>
                <label>Sex:</label>
                <input type="radio" name="sex" value="Male" id="male"/>Male<!--<label for="male">Male</label>-->
                <input type="radio" name="sex" value="Female" id="female"/>Female<!--<label for="female">Female</label>-->
              </p>
              <p>
                <label>Language:</label>
                <input type="checkbox" name="language[]" value="English" id="English"/>English<!--<label for="English">English</label>-->
                <input type="checkbox" name="language[]" value="French" id="French"/>French<!--<label for="French">French</label>-->
                <input type="checkbox" name="language[]" value="German" id="German"/>German<!--<label for="German">German</label>-->
              </p>
              <p>
                <label for="about">About:</label>  
                <textarea name="about" id="about" rows="5" cols="30"></textarea>
              </p>
              <p>
                  <input type="submit" value="Submit">
              </p>
          </form>
        </div>
    </body>
</html>