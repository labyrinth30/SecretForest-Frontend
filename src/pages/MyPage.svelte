<script>
    import HomeHeader from "../components/HomeHeader.svelte";
    import MyPageBox from "../components/MyPageBox.svelte";
    import MyPageProfile from "../components/MyPageProfile.svelte";
    import { isLogin } from "../stores";
    import { router } from "tinro";
    import { onMount } from "svelte";
    onMount(() => {
    if ($isLogin === false) {
      alert("잘못된 접근입니다");
      router.goto("/reservation");
    };
  });
</script>

<HomeHeader />
<br />
<MyPageProfile />
<br />

<MyPageBox />
<MyPageBox />
<MyPageBox />
