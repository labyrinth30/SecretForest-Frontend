<script>
	import HomeFooter from "../components/HomeFooter.svelte";
    import HomeTheme from "../components/HomeTheme.svelte";
    import HomeHeader from "../components/HomeHeader.svelte";

    import { onMount } from 'svelte';
    import { auth } from "../stores";

    onMount(async () => {
        try {
            await auth.refreshAccessToken();
            await auth.fetchUserInfo();
        } catch (error) {
            console.log(error);
        }
    });

    // auth 스토어의 상태가 변경될 때마다 실행됩니다.
    $: if ($auth) {
        console.log($auth);
    }
</script>

<HomeHeader />
<HomeTheme />
<HomeFooter />