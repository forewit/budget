<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { cn } from "$lib/utils.js";

  let { class: className = "" }: { class?: string } = $props();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
</script>

<div class={cn("py-6 bg-background text-2xl font-medium flex justify-center", className)}>
Budget
</div>
