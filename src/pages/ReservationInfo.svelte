<script>
    import ReservationProgressBar from "../components/ReservationProgressBar.svelte";
    import HomeHeader from "../components/HomeHeader.svelte";
    import ReservationForm from "../components/ReservationForm.svelte";
    import { get } from "svelte/store";
    import { auth } from "../stores/index.js";
    import { postApi } from "../service/api.js";

    export let theme;
    export let timeNum;

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        
        // Access token을 가져옵니다.
        const access_token = get(auth).Authorization;

        try {
            const response = await postApi({
                path: '/reservation',
                data: Object.fromEntries(data),
                access_token: access_token,
            });

            console.log('예약 성공', response);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }
</script>

<HomeHeader />
<br />
<ReservationProgressBar activeId="2" />
<br />
  <ReservationForm {handleSubmit} {theme} {timeNum}/>

