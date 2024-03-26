<script>
	import { router, meta } from "tinro";
	import { auth, isLogin } from "../stores";

	const route = meta();
	const url = $route.url;

	const goLogin = () => router.goto("/login");
	const goLogout = () => auth.logout();

	const goTheme = () => router.goto("/theme");
	const goHome = () => router.goto("/");
	const goReservation = () => router.goto("/reservation");
	const goMyPage = () => router.goto("/mypage");
</script>

<header class="main-header">
	<button class="main-menu-title" on:click={goHome}>비밀의 숲</button>
	<nav class="main-nav mr-6">
			<button
			class="main-menu mr-6"
			class:main-menu-selected={url === '/theme'}
			on:click={goTheme}>테마</button
			>
			<button
				class="main-menu mr-6"
				class:main-menu-selected={url.startsWith('/reservation')}
				on:click={goReservation}>예약</button
			>
	

		<div>
			{#if $isLogin}
			<button
			class="main-menu"
			class:main-menu-selected={url.startsWith('/mypage')}
			on:click={goMyPage}>예약조회</button>
			<button
			class="main-menu"
			on:click={goLogout}>로그아웃</button>
			{:else}
			<button
			class="main-menu mr-6"
			on:click={goLogin}>로그인</button>
			{/if}
		</div>

	</nav>
</header>
