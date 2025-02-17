<script>
    export let cards = []; // Array of card data to pass into CardItems
  </script>
  
  <div class="card-container">
    {#each cards as card (card.id)}
      <CardItem {card} />
    {/each}
  </div>
  
  <style>
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px;
    }
  </style>  