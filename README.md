
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HCGAMES ULTRA</title>
<link rel="stylesheet" href="css/style.css">
</head>
<body>

<header>
<div class="logo">
<img src="assets/logo.png">
<h1>HCGAMES ULTRA</h1>
</div>

<input id="search" placeholder="Search 200+ games...">
</header>

<nav class="categories">
<button onclick="filterGames('all')">All</button>
<button onclick="filterGames('arcade')">Arcade</button>
<button onclick="filterGames('puzzle')">Puzzle</button>
<button onclick="filterGames('action')">Action</button>
<button onclick="filterGames('sports')">Sports</button>
</nav>

<section id="gamesGrid"></section>

<footer>
<p>© HCGAMES ULTRA</p>
</footer>

<script src="js/app.js"></script>
<script src="js/search.js"></script>
</body>
</html>
