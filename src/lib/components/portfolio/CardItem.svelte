<script>
    export let card; // Single card data (e.g., title, description, image, link)
  </script>
  
  <div class="card-item">
    <img src={card.image} alt={card.title} />
    <h3>{card.title}</h3>
    <p>{card.description}</p>
    <a href={card.link} target="_blank" rel="noopener">Learn More</a>
  </div>
  
  <style>
    .card-item {
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 16px;
      width: 200px;
      text-align: center;
    }
  
    .card-item img {
      max-width: 100%;
      border-radius: 4px;
    }
  
    .card-item h3 {
      font-size: 1.2rem;
      margin: 12px 0;
    }
  
    .card-item p {
      font-size: 0.9rem;
      color: #666;
    }
  
    .card-item a {
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }
  
    .card-item a:hover {
      text-decoration: underline;
    }
  </style>  