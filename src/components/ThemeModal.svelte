<script>
  import { createEventDispatcher } from 'svelte';
  export let title;
  export let content;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close'); // 부모 컴포넌트에게 'close' 이벤트 전달
  }
</script>

<div class="modal-background" on:click={closeModal}>
  <div class="modal-content" on:click|stopPropagation>
    <h2>{title}</h2>
    <p>{content}</p>
    <button on:click={closeModal}>닫기</button>
  </div>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
</style>
