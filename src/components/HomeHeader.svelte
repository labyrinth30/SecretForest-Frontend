<script>
	import { router } from "tinro";
	import { auth, isLogin } from "../stores";

	const goLogin = () => router.goto("/login");
	const onLogout = () => auth.logout();
</script>


<header class="main-header">
	<p class="p-main-title">비밀의숲</p>
	<nav class="main-nav">
		<button
		class="main-menu mr-6"
		on:click={() => {
			console.log("1");
		}}>THEME</button
	>
		<button
			class="main-menu mr-6"
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