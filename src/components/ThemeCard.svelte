<script>
  import ThemeModal from "./ThemeModal.svelte";
  export let theme;
  
  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div class="theme-card">
  <div class="image-container" on:click={openModal}>
    <img src={theme.imageUrl} alt={theme.title} />
  </div>
  <div class="text-container">
    <p class="title">{theme.title}</p>
    <div class="tags">
      <span class="difficulty">{theme.difficulty}</span>
      <span class="genre">{theme.genre}</span>
    </div>
  </div>
</div>

{#if showModal}
  <ThemeModal {theme} on:close={closeModal} />
{/if}

