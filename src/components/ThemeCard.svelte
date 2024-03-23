<script>
  import ThemeModal from "./ThemeModal.svelte";
  export let title;
  export let imageUrl;
  export let difficulty;
  export let genre;
  export let content;
  
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
    <img src={imageUrl} alt={title} />
  </div>
  <div class="text-container">
    <p class="title">{title}</p>
    <div class="tags">
      <span class="difficulty">{difficulty}</span>
      <span class="genre">{genre}</span>
    </div>
  </div>
</div>

{#if showModal}
  <ThemeModal title={title} content={content} on:close={closeModal} />
{/if}

