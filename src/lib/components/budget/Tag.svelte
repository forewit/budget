<script lang="ts">
    // Props
    export let text: string = "tag";
  </script>
  
  <div class="tag" contenteditable="false">
    {text}
  </div>
  
  <style>
    .tag {
      display: inline-flex;
      align-items: center;
      background-color: #e1f0ff;
      color: #0066cc;
      padding: 2px 6px;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 0.9em;
    }
  </style>