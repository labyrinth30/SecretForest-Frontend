<script>
  // @ts-ignore
  import { onMount } from "svelte";
  import Router from "./router.svelte";
  import { auth, isRefresh } from "./stores";

  const refresh_time = 1000 * 60 * 10; // 10분
  onMount(() => {
    const onRefresh = setInterval(() => {
      if($isRefresh){
      auth.refresh();
      }
      else {
        clearInterval(onRefresh); // 리프레쉬 중지
      }
    }, refresh_time);
  })
</script>

<div class="main-container">
  {#await auth.refresh then}
    <Router />
  {/await}
</div>
