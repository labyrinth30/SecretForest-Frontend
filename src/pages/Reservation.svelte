<script>
    import HomeHeader from "../components/HomeHeader.svelte";
    import HomeFooter from "../components/HomeFooter.svelte";
    import ReservationProgressBar from "../components/ReservationProgressBar.svelte";
    import ReservationFilter from "../components/ReservationFilter.svelte";
    import ReservationCard from "../components/ReservationCard.svelte";
    import { date, theme } from "../stores/index.js";
    import { getApi } from "../service/api";
    import { onMount } from "svelte";
    import { themes } from "../model/themes";

    let currentTheme;
    let currentDate;

    const fetchData = async () => {
        try {
            const data = await getApi({
                path: `/reservation?date=${currentDate}&theme=${currentTheme}`,
            });
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    onMount(fetchData);

    $: currentTheme = $theme; // theme 값 변화에 따른 대응
    $: currentDate = $date; 
    $: fetchData(), currentTheme;
    $: fetchData(), currentDate;
</script>

<HomeHeader />
<br />
<ReservationProgressBar activeId="1" />
<br />
<ReservationFilter />
<br />
{#each themes as theme (theme.id)}
    {#if currentTheme === "0" || theme.id === currentTheme}
        <ReservationCard {theme} />
    {/if}
{/each}
<HomeFooter />
