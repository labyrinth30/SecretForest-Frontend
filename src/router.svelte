<script>
    import { Route } from 'tinro'; 
    import Home from './pages/Home.svelte';
    import Login from './pages/Login.svelte';
    import Register from './pages/Register.svelte';
    import Theme from './pages/Theme.svelte';
    import Reservation from './pages/Reservation.svelte';
    import ReservationInfo from './pages/ReservationInfo.svelte';
    import ReservationComplete from './pages/ReservationComplete.svelte';
    import NotFound from './pages/NotFound.svelte';
</script>

<Route path="/"><Home /></Route>
<Route path="/home"><Home /></Route>
<Route path="/login"><Login /></Route>
<Route path="/register"><Register /></Route>
<Route path="/theme"><Theme /></Route>
<Route path="/reservation"><Reservation /></Route>
<Route path="/reservation/:theme/:timeNum" let:meta>
    <ReservationInfo theme={meta.params.theme} timeNum={meta.params.timeNum}/>
  </Route>
<Route path="/reservation-complete"><ReservationComplete /></Route>
<Route fallback><NotFound /></Route>