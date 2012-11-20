<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meat name="viewport" content="width=device-width, initial-scale=1" />
  <title>jQuery Mobile</title>
  <link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css" />
  <script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
  <script src="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.js"></script>
</head>
<body>

<section id="index" data-role="page" data-title="jQuery Mobile">

  <header data-role="header">
    <h1>jQuery Mobile</h1>
  </header>

  <div id="index_content" data-role="content">
<?php
   sleep(5);
   print('jQuery Mobile リファレンス');
?>
  </div>

  <footer data-role="footer">
    Copyright 1978-2012, Sakai Tomoyuki
  </footer>

</section>

</body>
</html>
