<script>
    import HomeHeader from "../components/HomeHeader.svelte";
    import ReservationProgressBar from "../components/ReservationProgressBar.svelte";
    import ReservationCompleteBox from "../components/ReservationCompleteBox.svelte";
    // 로컬스토리지에서 예약 정보를 불러옵니다.
    let reservationInfo = JSON.parse(localStorage.getItem('reservationInfo'));
</script>

<HomeHeader />
<br />
<ReservationProgressBar activeId="3" />
<br />
<ReservationCompleteBox {reservationInfo}/>
