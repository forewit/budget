<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
</script>

{#snippet card()}
  <Card.Root class="max-w-[500px] m-auto">
    <Card.Header>
      <Card.Title>Card Title</Card.Title>
      <Card.Description>Card Description</Card.Description>
    </Card.Header>
    <Card.Content>
      <p>Card Content</p>
    </Card.Content>
    <Card.Footer>
      <p>Card Footer</p>
    </Card.Footer>
  </Card.Root>
{/snippet}

<div class="h-full flex flex-col md:flex-row">
  <ScrollArea class="grow p-4">
    {@render card()}
  </ScrollArea>
  <ScrollArea class="h-64 md:h-full md:w-64 border-t md:border-l md:border-t-0"></ScrollArea>
</div>
