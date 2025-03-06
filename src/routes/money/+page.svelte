<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
</script>

{#snippet card()}
  <Card.Root>
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

<div class="page h-full flex flex-col md:flex-row">
  <div class="budget-cards grow">
    {@render card()}
  </div>
  <div class="budget-details h-64 md:h-full md:w-64"></div>
</div>

<style>
  .page {
    border: 2px solid green;
  }
  .budget-cards {
    border: 2px solid red;
  }

  .budget-details {
    border: 2px solid blue;
  }
</style>
