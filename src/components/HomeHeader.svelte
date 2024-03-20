<script>
	import { router, meta } from "tinro";
	import { auth, isLogin } from "../stores";

	const route = meta();
	const url = $route.url;

	const goLogin = () => router.goto("/login");
	const onLogout = () => auth.logout();

	const goTheme = () => router.goto("/theme");
	const goHome = () => router.goto("/");
</script>


<header class="main-header">
	<p class="p-main-title" on:click={goHome}>비밀의 숲</p>
	<nav class="main-nav">
		<button
		class="main-menu mr-6"
		class:main-menu-selected={url === '/theme'}
		on:click={goTheme}>THEME</button
	>
		<button
			class="main-menu mr-6"
			class:main-menu-selected={url === '/reservation'}
			on:click={() => {
				console.log("1");
			}}>RESERVATION</button
		>
	</nav>

	<!--로그인 여부에 따라 다른 버튼을 보여줌 -->
	{#if $isLogin}
	  <!--로그아웃 -->
	  <button
		class="main-menu mr-6"
		on:click={onLogout}>로그아웃</button

	>
	{:else}
		<!--로그인 -->
		<button
		class="main-menu mr-6"
		on:click={goLogin}>로그인</button
	>
	{/if}
</header>