<script>
    import ReservationProgressBar from "../components/ReservationProgressBar.svelte";
    import HomeHeader from "../components/HomeHeader.svelte";
    import ReservationForm from "../components/ReservationForm.svelte";
    import ReservationCompleteBox from "../components/ReservationCompleteBox.svelte";
    import { get } from "svelte/store";
    import { auth } from "../stores/index.js";
    import { postApi } from "../service/api.js";
    import { router } from "tinro";

    export let theme;
    export let timeNum;
    let reservationInfo = {};

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        for(let [key, value] of data.entries()){
            reservationInfo[key] = String(value);
        }

        // Access token을 가져옵니다.
        const access_token = get(auth).accessToken;

        try {
            const response = await postApi({
                path: "/reservation",
                data: Object.fromEntries(data),
                access_token: access_token,
            });
            reservationInfo = Object.fromEntries(data);
            // 예약 정보를 로컬스토리지에 저장합니다.
            window.localStorage.setItem(
                "reservation",
                JSON.stringify(reservationInfo),
            );

            console.log("예약 성공", response);
        } catch (error) {
            // 일단 서버와 연동하기 전에는 임시로 성공했다고 가정하고 라우팅
            window.localStorage.setItem(
                "reservationInfo",
                JSON.stringify(reservationInfo),
            );
            router.goto("/reservation-complete");
            console.error(
                "There has been a problem with your fetch operation:",
                error,
            );
        }
    }
</script>

<HomeHeader />
<br />
<ReservationProgressBar activeId="2" />
<br />
<ReservationForm {handleSubmit} {theme} {timeNum} />
