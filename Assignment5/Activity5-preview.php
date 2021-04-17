<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Activity5-preview</title>
        <link rel="stylesheet" type="text/css" href="./Activity5.css">
    </head>
    <body>
        <div>
            <h1>Preview</h1>
            <?php

                if(empty($_REQUEST['name']) == false)
                {
                    echo $_REQUEST['name']."<br/>";
                }
                else
                {
                    echo "Name: Not provided"."<br/>";
                }

                if(empty($_REQUEST['username']) == false)
                {
                    echo $_REQUEST['username']."<br/>";
                }
                else
                {
                    echo "Username: Not provided"."<br/>";
                }

                if(empty($_REQUEST['password']) == false)
                {
                    echo $_REQUEST['password']."<br/>";
                }
                else
                {
                    echo "Password: Not provided"."<br/>";
                }

                if(empty($_REQUEST['address']) == false)
                {
                    echo $_REQUEST['address']."<br/>";
                }
                else
                {
                    echo "Address: Not provided"."<br/>";
                }

                if(empty($_REQUEST['countries']) == false)
                {
                    echo $_REQUEST['countries']."<br/>";
                }
                else
                {
                    echo "Countries: Not provided"."<br/>";
                }

                if(empty($_REQUEST['code']) == false)
                {
                    echo $_REQUEST['code']."<br/>";
                }
                else
                {
                    echo "Zip: Not provided"."<br/>";
                }

                if(empty($_REQUEST['email']) == false)
                {
                    echo $_REQUEST['email']."<br/>";
                }
                else
                {
                    echo "Email: Not provided"."<br/>";
                }

                if(empty($_REQUEST['sex']) == false)
                {
                    echo $_REQUEST['sex']."<br/>";
                }
                else
                {
                    echo "Sex: Not provided"."<br/>";
                }

                if(empty($_REQUEST['language']) == false)
                {
                    for($i = 0 ; $i < sizeof($_REQUEST['language']) ; $i++)
                    {
                        echo $_REQUEST['language'][$i]."<br/>";
                    }
                }
                else
                {
                    echo "Language: Not provided"."<br/>";
                }

                if(empty($_REQUEST['about']) == false)
                {
                    echo $_REQUEST['about']."<br/>";
                }
                else
                {
                    echo "About: Not provided"."<br/>";
                }
            ?>
        </div>
    </body>
</html>