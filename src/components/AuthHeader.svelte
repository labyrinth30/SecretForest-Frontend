<script>
	import { router } from 'tinro';
    
	const goLogin = () => router.goto('/login');
    const goRegister = () => router.goto('/register');
	const goHome = () => router.goto('/');
</script>

<!-- start header -->
<header class="main-header">
  <button class="button-main-title" on:click={goHome}>비밀의숲 </button>
  <nav class="main-nav">
	<button
	class="main-menu mr-6"
	on:click={() => {
		console.log("1");
	}}>THEME</button
>
	<button
		class="main-menu"
		on:click={() => {
			console.log("1");
		}}>RESERVATION</button
	>
</nav>
<nav>
	<!--로그인 -->
	<button class="main-menu mr-6" on:click={goLogin}>로그인</button> 
	<!--회원가입-->
	<button class="main-menu mr-6" on:click={goRegister}>회원가입</button> 
</nav>
		
</header>
<!-- end header -->

