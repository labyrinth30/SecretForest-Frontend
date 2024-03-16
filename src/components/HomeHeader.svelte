<script>
	import { router } from 'tinro';

	const goLogin = () => router.goto('/login');
    const onLogout = () => router.goto('/');

	
</script>

<!-- start header -->
<header class="main-header">
  <p class="p-main-title" >비밀의 숲 </p>
  <nav class="main-nav">
		<button class="main-menu mr-6" on:click={() => {console.log('1')}}>예약하기</button>    
    
  </nav>

		<!--로그인 -->
		<button class="main-menu mr-6" on:click={() => {console.log('1')}}>로그인</button> 
	
</header>
<!-- end header -->

