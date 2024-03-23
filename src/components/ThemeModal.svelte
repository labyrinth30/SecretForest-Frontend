<script>
  import { router } from "tinro";
  import { theme as currentTheme} from '../stores/index.js';
  import { createEventDispatcher } from 'svelte';
  export let theme;
  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close'); // 부모 컴포넌트에게 'close' 이벤트 전달
  }
  function goReservation() {
    currentTheme.set(theme.id)
    router.goto('/reservation');
  }
</script>

<div class="modal-background" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <button class="close-button" on:click={closeModal}>X</button>
    <h2>{theme.title}</h2>
    <p>{theme.content}</p>
    <button class="reservation-button" on:click={goReservation}>예약하기</button>
  </div>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    position: relative;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
  }

  .reservation-button {
    width: 100%;
    padding: 10px 0; 
    background-color: #007bff;
    color: white;
    border: none; 
    border-radius: 5px;
    cursor: pointer; 
    font-size: 16px;
    margin-top: 20px; 
  }

  .reservation-button:hover {
    background-color: #0056b3; 
  }
</style>
