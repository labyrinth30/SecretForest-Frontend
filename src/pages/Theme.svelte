<script>
  import { onMount } from "svelte";
  import { theme } from '../stores'; 
  import ThemeCard from "../components/ThemeCard.svelte";
  import HomeFooter from '../components/HomeFooter.svelte';
  import HomeHeader from '../components/HomeHeader.svelte';
  import { themes } from "../model/themes";

  onMount(async () => {
    await theme.getThemes();
    console.log($theme.themes);
  });
</script>

<HomeHeader />

<div style="display: flex; flex-wrap: wrap;"> 
  {#each themes as theme}
    <ThemeCard {theme} />
  {/each}
</div>

<HomeFooter />
