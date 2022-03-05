<template>
  <section id="app">
    <div class="container">
      <!-- Title -->
      <CompTile />
      <div class="row">
        <ProductList />

        <CartWrapper />
      </div>
    </div>
  </section>
</template>

<script>
import CompTile from "./components/CompTitle.vue";
import ProductList from "./components/ProductList.vue";
import CartWrapper from "./components/CartWrapper.vue";
export default {
  name: "App",
  components: { CompTile, ProductList, CartWrapper },
};
</script>

<style></style>
