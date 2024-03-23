<script>
    import HomeHeader from "../components/HomeHeader.svelte";
    import HomeFooter from "../components/HomeFooter.svelte";
    import ReservationProgressBar from "../components/ReservationProgressBar.svelte";
    import ReservationFilter from "../components/ReservationFilter.svelte";
    import { date, theme } from '../stores/index.js';
    import { getApi } from "../service/api";
    import { onMount } from "svelte";

    let currentTheme;
    let currentDate;

    const fetchData = async () => {
        try {
            const data = await getApi({
                path: `/reservation?date=${currentDate}&theme=${currentTheme}`,
            });
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    onMount(fetchData);

    $: {
        currentTheme = $theme;
        currentDate = $date;
        fetchData();  // date 또는 theme이 변경될 때마다 fetchData 함수를 호출합니다.
    }
</script>
  
  <HomeHeader />
  <br />
  <ReservationProgressBar activeId='1' />
  <br />
  <ReservationFilter />
  <HomeFooter />
  