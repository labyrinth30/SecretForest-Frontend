<script>
    import { Route } from 'tinro'; 
    import Home from './pages/Home.svelte';
    import Login from './pages/Login.svelte';
    import Register from './pages/Register.svelte';
</script>

<Route path="/"><Home /></Route>
<Route path="/home"><Home /></Route>
<Route path="/login"><Login /></Route>
<Route path="/register"><Register /></Route>