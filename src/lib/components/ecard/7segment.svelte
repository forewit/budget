<script lang="ts">
    import { cn } from "$lib/utils";
  let { class: className = "", digits = "24", dollarSign = false } = $props();
</script>

<div class={cn("relative flex justify-end p-1 rounded bg-stone-800",dollarSign && "pl-4", className)}>
  {#if dollarSign}
  <p class="absolute top-[1px] left-1.5 text-sm text-[#ff0] font-medium italic">$</p>
{/if}
  {#each digits as digit}
    <svg
      class="digit"
      data-digit={digit}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.1 71.9"
    >
      <g transform="translate(-3.9 -3.7)">
        <path
          class="segment"
          id="oben"
          d="M17.8 5l5 6h25.5l6.2-5.3s-2-1.7-3.3-1.9c-1.4-.2-30.3 0-30.3 0-1.8 0-2.9 1-3 1.2z"
        />
        <path
          class="segment"
          id="oben_r"
          d="M49.3 12l6-5c1 .7 1.5 2.3 1.7 4.3L52.6 36 49 38.6l-4-4.5z"
        />
        <path
          class="segment"
          id="oben_l"
          d="M18 33.7l3.8-21.8-5-6.2a5 5 0 0 0-2 2.7L9.6 36l2.4 2.6z"
        />
        <path class="segment" id="mitte" d="M12.9 39.7l4.3-3.8H45l3 3.8-4.1 3.6H15.7z" />
        <path class="segment" id="unten_r" d="M43 45.6l5.8-4.9 2.5 2.5-5.1 27.4-2 3-5.2-6.3z" />
        <path class="segment" id="unten_l" d="M8.3 43l3.4-2.6 4.2 4.8-3.8 22-6.7 5.2L3.9 68z" />
        <path
          class="segment"
          id="unten"
          d="M6.3 73.3l6.3-5.2L38 68l5.2 6.2c-.8 1-1.9 1.3-3.5 1.4H9.9c-1.2-.1-2.3-.7-3.6-2.3z"
        />
      </g>
    </svg>
  {/each}
</div>

<style>
  /* Individual Digit Styling */
  .digit {
    stroke: none; /* No outline stroke for the SVG */
    height: auto; /* Maintain aspect ratio */
  }

  /* Default Segment Styling (Off State) */
  .digit .segment {
    fill: #334; /* Dim color for segments that are 'off' */
  }

  /* --- Segment Activation Rules --- */
  /* These rules use the 'digit' attribute on the SVG to turn segments 'on' */
  /* The 'fill' color determines the 'on' state color */
  [data-digit="1"] #oben_r,
  [data-digit="1"] #unten_r {
    fill: #ff0; /* Yellow */
  }

  [data-digit="2"] #oben,
  [data-digit="2"] #oben_r,
  [data-digit="2"] #mitte,
  [data-digit="2"] #unten_l,
  [data-digit="2"] #unten {
    fill: #ff0;
  }

  [data-digit="3"] #oben,
  [data-digit="3"] #oben_r,
  [data-digit="3"] #mitte,
  [data-digit="3"] #unten_r,
  [data-digit="3"] #unten {
    fill: #ff0;
  }

  [data-digit="4"] #oben_l,
  [data-digit="4"] #mitte,
  [data-digit="4"] #oben_r,
  [data-digit="4"] #unten_r {
    fill: #ff0;
  }

  [data-digit="5"] #oben,
  [data-digit="5"] #oben_l,
  [data-digit="5"] #mitte,
  [data-digit="5"] #unten_r,
  [data-digit="5"] #unten {
    fill: #ff0;
  }

  [data-digit="6"] #oben,
  [data-digit="6"] #oben_l,
  [data-digit="6"] #mitte,
  [data-digit="6"] #unten_l,
  [data-digit="6"] #unten_r,
  [data-digit="6"] #unten {
    fill: #ff0;
  }

  [data-digit="7"] #oben,
  [data-digit="7"] #oben_r,
  [data-digit="7"] #unten_r {
    fill: #ff0;
  }

  [data-digit="8"] #oben,
  [data-digit="8"] #oben_r,
  [data-digit="8"] #oben_l,
  [data-digit="8"] #mitte,
  [data-digit="8"] #unten_r,
  [data-digit="8"] #unten_l,
  [data-digit="8"] #unten {
    fill: #ff0;
  }

  [data-digit="9"] #oben,
  [data-digit="9"] #oben_r,
  [data-digit="9"] #oben_l,
  [data-digit="9"] #mitte,
  [data-digit="9"] #unten_r,
  [data-digit="9"] #unten {
    fill: #ff0;
  }

  [data-digit="0"] #oben,
  [data-digit="0"] #oben_r,
  [data-digit="0"] #oben_l,
  [data-digit="0"] #unten_r,
  [data-digit="0"] #unten_l,
  [data-digit="0"] #unten {
    fill: #ff0;
  }

    /* --- UPPERCASE LETTERS --- */
  /* A */
  [data-digit="A"] #oben,
  [data-digit="A"] #oben_r,
  [data-digit="A"] #oben_l,
  [data-digit="A"] #mitte,
  [data-digit="A"] #unten_r,
  [data-digit="A"] #unten_l {
    fill: #ff0;
  }

  /* B (like '8') */
  [data-digit="B"] #oben,
  [data-digit="B"] #oben_r,
  [data-digit="B"] #oben_l,
  [data-digit="B"] #mitte,
  [data-digit="B"] #unten_r,
  [data-digit="B"] #unten_l,
  [data-digit="B"] #unten {
    fill: #ff0;
  }
  /* C */
  [data-digit="C"] #oben,
  [data-digit="C"] #oben_l,
  [data-digit="C"] #unten_l,
  [data-digit="C"] #unten {
    fill: #ff0;
  }

  /* D (like '0') */
  [data-digit="D"] #oben,
  [data-digit="D"] #oben_r,
  [data-digit="D"] #oben_l,
  [data-digit="D"] #unten_r,
  [data-digit="D"] #unten_l,
  [data-digit="D"] #unten {
    fill: #ff0;
  }

  /* E */
  [data-digit="E"] #oben,
  [data-digit="E"] #oben_l,
  [data-digit="E"] #mitte,
  [data-digit="E"] #unten_l,
  [data-digit="E"] #unten {
    fill: #ff0;
  }

  /* F */
  [data-digit="F"] #oben,
  [data-digit="F"] #oben_l,
  [data-digit="F"] #mitte,
  [data-digit="F"] #unten_l {
    fill: #ff0;
  }

  /* G (like '9') */
  [data-digit="G"] #oben,
  [data-digit="G"] #oben_r,
  [data-digit="G"] #oben_l,
  [data-digit="G"] #mitte,
  [data-digit="G"] #unten_r,
  [data-digit="G"] #unten {
    fill: #ff0;
  }

  /* H */
  [data-digit="H"] #oben_l,
  [data-digit="H"] #mitte,
  [data-digit="H"] #oben_r,
  [data-digit="H"] #unten_l,
  [data-digit="H"] #unten_r {
    fill: #ff0;
  }

  /* I (like '1') */
  [data-digit="I"] #oben_r,
  [data-digit="I"] #unten_r {
    fill: #ff0;
  }

  /* J */
  [data-digit="J"] #oben_r,
  [data-digit="J"] #unten_r,
  [data-digit="J"] #unten_l,
  [data-digit="J"] #unten {
    fill: #ff0;
  }

  /* L */
  [data-digit="L"] #oben_l,
  [data-digit="L"] #unten_l,
  [data-digit="L"] #unten {
    fill: #ff0;
  }

  /* N */
  [data-digit="N"] #oben,
  [data-digit="N"] #oben_l,
  [data-digit="N"] #oben_r,
  [data-digit="N"] #unten_l,
  [data-digit="N"] #unten_r {
    fill: #ff0;
  }

  /* O (like '0') */
  [data-digit="O"] #oben,
  [data-digit="O"] #oben_r,
  [data-digit="O"] #oben_l,
  [data-digit="O"] #unten_r,
  [data-digit="O"] #unten_l,
  [data-digit="O"] #unten {
    fill: #ff0;
  }

  /* P */
  [data-digit="P"] #oben,
  [data-digit="P"] #oben_l,
  [data-digit="P"] #mitte,
  [data-digit="P"] #oben_r,
  [data-digit="P"] #unten_l {
    fill: #ff0;
  }

  /* Q (like '9') */
   [data-digit="Q"] #oben,
   [data-digit="Q"] #oben_r,
   [data-digit="Q"] #oben_l,
   [data-digit="Q"] #mitte,
   [data-digit="Q"] #unten_r,
   [data-digit="Q"] #unten {
     fill: #ff0;
  }

  /* R */
  [data-digit="R"] #oben,
  [data-digit="R"] #oben_l,
  [data-digit="R"] #oben_r,
  [data-digit="R"] #mitte,
  [data-digit="R"] #unten_l,
  [data-digit="R"] #unten_r { /* Note: This R might look like P with a leg */
    fill: #ff0;
  }
  /* Alternatively, a simpler R (like lowercase r) */
  /*
  [data-digit="R"] #unten_l,
  [data-digit="R"] #mitte {
    fill: #ff0;
  }
  */


  /* S (like '5') */
  [data-digit="S"] #oben,
  [data-digit="S"] #oben_l,
  [data-digit="S"] #mitte,
  [data-digit="S"] #unten_r,
  [data-digit="S"] #unten {
    fill: #ff0;
  }

  /* T */
  [data-digit="T"] #oben,
  [data-digit="T"] #oben_r, /* Added top right for T */
  [data-digit="T"] #unten_r { /* Added bottom right for T */
     fill: #ff0;
  }
  /* Alternative T (like lowercase t) */
  /*
  [data-digit="T"] #oben_l,
  [data-digit="T"] #mitte,
  [data-digit="T"] #unten_l,
  [data-digit="T"] #unten {
    fill: #ff0;
  }
  */

  /* U */
  [data-digit="U"] #oben_l,
  [data-digit="U"] #oben_r,
  [data-digit="U"] #unten_l,
  [data-digit="U"] #unten_r,
  [data-digit="U"] #unten {
    fill: #ff0;
  }

  /* Y (like '4' without middle) */
  [data-digit="Y"] #oben_r,
  [data-digit="Y"] #oben_l,
  [data-digit="Y"] #mitte,
  [data-digit="Y"] #unten_r,
  [data-digit="Y"] #unten {
     fill: #ff0;
  }

  /* Z (like '2') */
  [data-digit="Z"] #oben,
  [data-digit="Z"] #oben_r,
  [data-digit="Z"] #mitte,
  [data-digit="Z"] #unten_l,
  [data-digit="Z"] #unten {
    fill: #ff0;
  }

  /* --- LOWERCASE LETTERS --- */
  /* a (like 'o' but with top bar) */
  [data-digit="a"] #oben,
  [data-digit="a"] #oben_r,
  [data-digit="a"] #mitte,
  [data-digit="a"] #unten_r,
  [data-digit="a"] #unten_l,
  [data-digit="a"] #unten {
    fill: #ff0;
  }
  /* Alternative lowercase 'a' (more like 'o') */
  /*
  [data-digit="a"] #mitte,
  [data-digit="a"] #unten_r,
  [data-digit="a"] #unten,
  [data-digit="a"] #unten_l,
  [data-digit="a"] #oben { // Added top for differentiation
    fill: #ff0;
  }
  */

  /* b */
  [data-digit="b"] #oben_l,
  [data-digit="b"] #mitte,
  [data-digit="b"] #unten_l,
  [data-digit="b"] #unten_r,
  [data-digit="b"] #unten {
    fill: #ff0;
  }

  /* c */
  [data-digit="c"] #mitte,
  [data-digit="c"] #unten_l,
  [data-digit="c"] #unten {
    fill: #ff0;
  }

  /* d */
  [data-digit="d"] #oben_r,
  [data-digit="d"] #mitte,
  [data-digit="d"] #unten_l,
  [data-digit="d"] #unten_r,
  [data-digit="d"] #unten {
    fill: #ff0;
  }

  /* e (like capital E) */
   [data-digit="e"] #oben,
   [data-digit="e"] #oben_l,
   [data-digit="e"] #mitte,
   [data-digit="e"] #unten_l,
   [data-digit="e"] #unten {
     fill: #ff0;
  }

  /* f (like capital F) */
   [data-digit="f"] #oben,
   [data-digit="f"] #oben_l,
   [data-digit="f"] #mitte,
   [data-digit="f"] #unten_l {
     fill: #ff0;
  }

  /* g (like '9') */
  [data-digit="g"] #oben,
  [data-digit="g"] #oben_r,
  [data-digit="g"] #oben_l,
  [data-digit="g"] #mitte,
  [data-digit="g"] #unten_r,
  [data-digit="g"] #unten {
    fill: #ff0;
  }

  /* h */
  [data-digit="h"] #oben_l,
  [data-digit="h"] #mitte,
  [data-digit="h"] #unten_l,
  [data-digit="h"] #unten_r {
    fill: #ff0;
  }

  /* i */
  [data-digit="i"] #unten_l { /* Just bottom-left */
    fill: #ff0;
  }
  /* Alternative i (like '1') */
  /*
  [data-digit="i"] #oben_r,
  [data-digit="i"] #unten_r {
    fill: #ff0;
  }
  */

  /* j (like capital J) */
  [data-digit="j"] #oben_r,
  [data-digit="j"] #unten_r,
  [data-digit="j"] #unten_l,
  [data-digit="j"] #unten {
    fill: #ff0;
  }

  /* l (like capital L without top) - or like '1'? */
  [data-digit="l"] #unten_l,
  [data-digit="l"] #unten {
    fill: #ff0;
  }
  /* Alternative l (like '1') */
  /*
  [data-digit="l"] #oben_r,
  [data-digit="l"] #unten_r {
     fill: #ff0;
  }
  */

  /* n */
  [data-digit="n"] #mitte,
  [data-digit="n"] #unten_l,
  [data-digit="n"] #unten_r {
    fill: #ff0;
  }

  /* o */
  [data-digit="o"] #mitte,
  [data-digit="o"] #unten_l,
  [data-digit="o"] #unten_r,
  [data-digit="o"] #unten {
    fill: #ff0;
  }

  /* p (like capital P) */
   [data-digit="p"] #oben,
   [data-digit="p"] #oben_l,
   [data-digit="p"] #mitte,
   [data-digit="p"] #oben_r,
   [data-digit="p"] #unten_l {
     fill: #ff0;
  }

  /* q (like '9') */
  [data-digit="q"] #oben,
  [data-digit="q"] #oben_r,
  [data-digit="q"] #oben_l,
  [data-digit="q"] #mitte,
  [data-digit="q"] #unten_r,
  [data-digit="q"] #unten {
     fill: #ff0;
  }

  /* r */
  [data-digit="r"] #mitte,
  [data-digit="r"] #unten_l {
    fill: #ff0;
  }

  /* s (like '5') */
  [data-digit="s"] #oben,
  [data-digit="s"] #oben_l,
  [data-digit="s"] #mitte,
  [data-digit="s"] #unten_r,
  [data-digit="s"] #unten {
    fill: #ff0;
  }

  /* t */
  [data-digit="t"] #oben_l, /* Changed from capital T */
  [data-digit="t"] #mitte,
  [data-digit="t"] #unten_l,
  [data-digit="t"] #unten {
    fill: #ff0;
  }

  /* u */
  [data-digit="u"] #unten_l,
  [data-digit="u"] #unten_r,
  [data-digit="u"] #unten {
    fill: #ff0;
  }

  /* y (like 'q' or '9') */
  [data-digit="y"] #oben_r,
  [data-digit="y"] #oben_l,
  [data-digit="y"] #mitte,
  [data-digit="y"] #unten_r,
  [data-digit="y"] #unten {
     fill: #ff0;
  }

  /* z (like '2') */
  [data-digit="z"] #oben,
  [data-digit="z"] #oben_r,
  [data-digit="z"] #mitte,
  [data-digit="z"] #unten_l,
  [data-digit="z"] #unten {
    fill: #ff0;
  }

  /* --- SYMBOLS --- */
  /* - (Minus/Hyphen) */
  [data-digit="-"] #mitte {
    fill: #ff0;
  }

  /* _ (Underscore) */
  [data-digit="_"] #unten {
    fill: #ff0;
  }

  /* ° (Degree symbol) */
  [data-digit="°"] #oben,
  [data-digit="°"] #oben_r,
  [data-digit="°"] #oben_l,
  [data-digit="°"] #mitte {
    fill: #ff0;
  }

  /* ? (Question Mark) */
  [data-digit="?"] #oben,
  [data-digit="?"] #oben_r,
  [data-digit="?"] #mitte,
  [data-digit="?"] #unten_l { /* Common representation */
    fill: #ff0;
  }

   /* = (Equals sign) */
  [data-digit="="] #mitte,
  [data-digit="="] #unten {
    fill: #ff0;
  }

  /* ' (Apostrophe/Single Quote) */
  [data-digit="'"] #oben_l { /* Top-left segment */
    fill: #ff0;
  }

  /* " (Double Quote) */
  [data-digit='"'] #oben_l,
  [data-digit='"'] #oben_r { /* Top-left and top-right */
    fill: #ff0;
  }

  /* Space character (no segments lit - handled by default) */
  [data-digit=" "] /* No rules needed, default is off */ {
  }
</style>
