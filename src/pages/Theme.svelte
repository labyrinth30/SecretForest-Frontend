<script>
  import axios from 'axios';
  import ThemeCard from "../components/ThemeCard.svelte";
  import HomeFooter from '../components/HomeFooter.svelte';
  import HomeHeader from '../components/HomeHeader.svelte';
  import { onMount } from "svelte";
    import { themes } from '../model/themes';
    import { theme } from '../stores';

  let servetThemes = []; // 서버로부터 받아온 데이터로 업데이트 될 배열

  onMount(async () => {
        try {
            await theme.getThemes();
        } catch (error) {
            console.log(error);
        }
    });
</script>

<HomeHeader />
  
  <div style="display: flex; flex-wrap: wrap;"> 
    {#each themes as theme}
    <ThemeCard
      {theme}
      />
      {/each}
  </div>
  
  <HomeFooter />
  