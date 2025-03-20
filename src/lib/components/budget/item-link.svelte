<script lang="ts">
  let elm: HTMLSpanElement | undefined = $state();

  function handleClick() {
    console.log("clicked");
    // delete this component
    elm?.parentElement?.remove();
  }
</script>

<button bind:this={elm} onclick={handleClick} class="cursor-pointer p-1 select-none bg-foreground text-background rounded text-xs inline-block">
  Link
</button>