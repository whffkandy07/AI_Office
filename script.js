document.addEventListener("DOMContentLoaded", function () {
	const pages = [
		{ name: "HOME", id: "index" },
		{ name: "ABOUT", id: "about" },
		{ name: "PORTFOLIO", id: "portfolio" },
		{ name: "RESUME", id: "resume" },
		{ name: "CONTACT", id: "contact" }
	];

	// 네비게이션 바 생성
	let navHTML = `
	<nav>
		<h1><span>쓸모가 있을지도 모르는 사이트</span></h1>
	</nav>
	<div class="navbar-menu-fixed">
		<ul>
	`;

	pages.forEach((page, index) => {
		if (index > 0) navHTML += `<li class="divider">|</li>`;
		navHTML += `<li><a href="javascript:void(0)" data-page="${page.id}">${page.name}</a></li>`;
	});

	navHTML += `
		</ul>
	</div>
	`;

	document.body.insertAdjacentHTML("afterbegin", navHTML);

	const links = document.querySelectorAll('a[data-page]');

	// 클릭 이벤트 연결
	links.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();

			const page = e.currentTarget.dataset.page;

			// active 클래스 처리
			links.forEach(a => a.classList.remove("active"));
			e.currentTarget.classList.add("active");

			loadPage(page);
		});
	});

	// 배경 이미지 순환
	const imageList = [
		"images/BG001.png",
		"images/BG002.png",
		// 더 추가 가능
	];

	let current = 0;
	const h1 = document.querySelector("nav h1");

	setInterval(() => {
		current = (current + 1) % imageList.length;
		h1.style.setProperty("--bg-img", `url('${imageList[current]}')`);
	}, 1000); 

	// 기본 페이지 로드 + active 표시
	const homeLink = document.querySelector('a[data-page="index"]');
	if (homeLink) {
		homeLink.classList.add("active");
		loadPage("index");
	}
});

function loadPage(page) {
	fetch(`pages/${page}.html`)
		.then(res => res.text())
		.then(html => {
			document.querySelector(".content").innerHTML = html;
			//window.scrollTo(0, 0); // 스크롤을 맨 위로 (혹은 제거 가능)
		});
}

function copyEmail(targetId) {
	const email = document.getElementById(targetId).innerText;
	navigator.clipboard.writeText(email).then(() => {
		const msg = document.getElementById("copy-msg");
		msg.style.display = "inline";
		clearTimeout(window.copyTimer);
		window.copyTimer = setTimeout(() => {
			msg.style.display = "none";
		}, 2000);
	});
}

function openPreview(pdfUrl, description) {
	document.getElementById("pdf-frame").src = pdfUrl;
	document.getElementById("pdf-description").innerText = description;
	document.getElementById("pdf-modal").style.display = "flex";
}

function closePreview() {
	document.getElementById("pdf-modal").style.display = "none";
	document.getElementById("pdf-frame").src = "";
}
