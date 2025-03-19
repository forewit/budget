<script lang="ts">
  import { mount } from 'svelte';
    import Tag from './Tag.svelte';
    
    let editorElement: HTMLDivElement;
    
    function handleInput(event: Event): void {
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
      
      const range = selection.getRangeAt(0);
      const startContainer = range.startContainer;
      
      // Check if we're in a text node
      if (startContainer.nodeType === Node.TEXT_NODE) {
        const text = startContainer.textContent || '';
        const cursorPosition = range.startOffset;
        
        // Check if the last character typed was a slash
        if (text.charAt(cursorPosition - 1) === '/') {
          event.preventDefault();
          
          // Split the text at the cursor position
          const textBeforeSlash = text.slice(0, cursorPosition - 1);
          const textAfterSlash = text.slice(cursorPosition);
          
          // Update the text node to remove the slash
          startContainer.textContent = textBeforeSlash;
          
          // Create a container for the Tag component
          const tagContainer = document.createElement('span');
          
          // Insert the container in the right position
          const parentNode = startContainer.parentNode;
          if (parentNode) {
            parentNode.insertBefore(tagContainer, startContainer.nextSibling);
            
            // Create the Tag component inside the container
            mount(Tag,{
              target: tagContainer,
              props: {
                text: 'tag'
              }
            });
            
            // Create a space and the rest of the text
            let textNode = document.createTextNode(' ');
            const newTextNode = document.createTextNode(textAfterSlash);
            
            parentNode.insertBefore(textNode, tagContainer.nextSibling);
            parentNode.insertBefore(newTextNode, textNode.nextSibling);
            
            // Set cursor after the tag
            const newRange = document.createRange();
            newRange.setStart(newTextNode, 0);
            newRange.setEnd(newTextNode, 0);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }
        }
      }
    }
    
  </script>
  
  <div
    bind:this={editorElement}
    contenteditable="plaintext-only"
    class="editor"
    oninput={handleInput}
  ></div>
  
  <style>
    .editor {
      min-height: 100px;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 4px;
      line-height: 1.5;
      font-family: inherit;
      font-size: inherit;
      overflow-y: auto;
    }
  </style>