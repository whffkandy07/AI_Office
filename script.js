document.addEventListener("DOMContentLoaded", function () {
	const navHTML = `
	  <nav>
		<h1><span>내 홈페이지</span></h1>
		<ul>
		  <li><a href="index.html">HOME</a></li>
		  <li><a href="about.html">ABOUT</a></li>
		  <li><a href="portfolio.html">PORTFOLIO</a></li>
		  <li><a href="resume.html">RESUME</a></li>
		  <li><a href="contact.html">CONTACT</a></li>
		</ul>
	  </nav>
	  <hr />
	`;
	document.body.insertAdjacentHTML("afterbegin", navHTML);
  });
  