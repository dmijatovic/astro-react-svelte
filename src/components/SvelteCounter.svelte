<script>
  let count=0

  function increment(){
    count+=1
  }
  function decrement(){
    count-=1
  }
</script>
<section>
  <h3>Svelte counter</h3>
  <div>{count}</div>
  <nav>
    <button on:click={decrement}>Down</button>
    <button on:click={increment}>Up</button>
  </nav>
</section>

<style>
  h3{
    text-align: center;
  }
  div{
    font-size: 4rem;
    text-align: center;
  }
  nav{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  button{
    padding:1rem 2rem;
  }
  button:first-child{
    margin-right: 2rem;
  }
</style>
