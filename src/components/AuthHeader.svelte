<script>
	import { router, meta } from 'tinro';

	const route = meta();
	const url = $route.url; // 현재 페이지의 url 정보를 가져옴
    
	const goLogin = () => router.goto('/login');
    const goRegister = () => router.goto('/register');
	const goHome = () => router.goto('/');
</script>

<header class="main-header">
	<p class="p-main-title" on:click={goHome}>비밀의 숲</p>
  <nav class="main-nav">
		<!--로그인 -->
		<button class="main-menu mr-6" class:main-menu-selected={url === '/login'} on:click={goLogin}>로그인</button> 
		<!--회원가입-->
		<button class="main-menu mr-6" class:main-menu-selected={url === '/register'} on:click={goRegister}>회원가입</button> 
</nav>
<nav>

</nav>
		
</header>

